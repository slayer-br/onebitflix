"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const models_1 = require("../models");
function filterLastEpisodesByCourse(episodes) {
    const coursesOnList = [];
    const lastEpisodes = episodes.reduce((currentList, episode) => {
        if (!coursesOnList.includes(episode.courseId)) {
            coursesOnList.push(episode.courseId);
            currentList.push(episode);
            return currentList;
        }
        const episodeFromSameCourse = currentList.find((ep) => ep.courseId === episode.courseId);
        if (episodeFromSameCourse.order > episode.order)
            return currentList;
        const listWithoutEpisodeFromSameCourse = currentList.filter((ep) => ep.courseId !== episode.courseId);
        listWithoutEpisodeFromSameCourse.push(episode);
        return listWithoutEpisodeFromSameCourse;
    }, []);
    return lastEpisodes;
}
exports.userService = {
    findByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            attributes: ["id", ["first_name", "firstName"], ["last_name", "lastName"], "phone", "birth", "email", "password"],
            where: { email },
        });
        return user;
    }),
    create: (attributes) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.create(attributes);
        return user;
    }),
    getKeepWatchingList: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const userWithWatchingEpisodes = yield models_1.User.findByPk(id, {
            include: {
                association: "Episodes",
                attributes: [
                    "id",
                    "name",
                    "synopsis",
                    "order",
                    ["video_url", "videoUrl"],
                    ["seconds_long", "secondsLong"],
                    ["course_id", "courseId"],
                ],
                include: [
                    {
                        association: "Course",
                        attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
                        as: "course",
                    },
                ],
                through: {
                    as: "watchTime",
                    attributes: ["seconds", ["updated_at", "updatedAt"]],
                },
            },
        });
        if (!userWithWatchingEpisodes)
            throw new Error("Usuário não encontrado.");
        const keepWatchingList = filterLastEpisodesByCourse(userWithWatchingEpisodes.Episodes);
        keepWatchingList.sort((episodeOne, episodeTwo) => 
        // @ts-ignore
        episodeOne.watchTime.updatedAt < episodeTwo.watchTime.updatedAt ? 1 : -1);
        return keepWatchingList;
    }),
    update: (id, attributes) => __awaiter(void 0, void 0, void 0, function* () {
        const [affectedRows, updatedUsers] = yield models_1.User.update(attributes, { where: { id }, returning: true });
        return updatedUsers[0];
    }),
    updatePassword: (id, password) => __awaiter(void 0, void 0, void 0, function* () {
        const [affectedRows, updatedUsers] = yield models_1.User.update({
            password
        }, {
            where: { id },
            individualHooks: true,
            returning: true
        });
        return updatedUsers[0];
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL3VzZXJTZXJ2aWNlLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvc2VydmljZXMvdXNlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBSWpDLFNBQVMsMEJBQTBCLENBQUMsUUFBMkI7SUFDN0QsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO0lBRW5DLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFFRCxNQUFNLHFCQUFxQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpGLElBQUkscUJBQXNCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1lBQUUsT0FBTyxXQUFXLENBQUM7UUFFckUsTUFBTSxnQ0FBZ0MsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0MsT0FBTyxnQ0FBZ0MsQ0FBQztJQUMxQyxDQUFDLEVBQUUsRUFBdUIsQ0FBQyxDQUFDO0lBRTVCLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFFWSxRQUFBLFdBQVcsR0FBRztJQUN6QixXQUFXLEVBQUUsQ0FBTyxLQUFhLEVBQUUsRUFBRTtRQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUNqSCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUU7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUE7SUFFRCxNQUFNLEVBQUUsQ0FBTyxVQUFrQyxFQUFFLEVBQUU7UUFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFBO0lBRUQsbUJBQW1CLEVBQUUsQ0FBTyxFQUFVLEVBQUUsRUFBRTtRQUN4QyxNQUFNLHdCQUF3QixHQUFHLE1BQU0sYUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsT0FBTyxFQUFFO2dCQUNQLFdBQVcsRUFBRSxVQUFVO2dCQUN2QixVQUFVLEVBQUU7b0JBQ1YsSUFBSTtvQkFDSixNQUFNO29CQUNOLFVBQVU7b0JBQ1YsT0FBTztvQkFDUCxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7b0JBQ3pCLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQztvQkFDL0IsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsV0FBVyxFQUFFLFFBQVE7d0JBQ3JCLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUN6RSxFQUFFLEVBQUUsUUFBUTtxQkFDYjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsRUFBRSxFQUFFLFdBQVc7b0JBQ2YsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUNyRDthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHdCQUF3QjtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUUxRSxNQUFNLGdCQUFnQixHQUFHLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLFFBQVMsQ0FBQyxDQUFDO1FBRXhGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRTtRQUMvQyxhQUFhO1FBQ2IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pFLENBQUM7UUFDRixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUMsQ0FBQTtJQUVELE1BQU0sRUFBRSxDQUNOLEVBQVUsRUFDVixVQU1DLEVBQ0QsRUFBRTtRQUNGLE1BQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLEdBQUcsTUFBTSxhQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXZHLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQTtJQUVELGNBQWMsRUFBRSxDQUFPLEVBQW1CLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1FBQzlELE1BQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLEdBQUcsTUFBTSxhQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JELFFBQVE7U0FDVCxFQUFFO1lBQ0QsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ2IsZUFBZSxFQUFFLElBQUk7WUFDckIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO1FBRUYsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEIsQ0FBQyxDQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEVwaXNvZGVJbnN0YW5jZSB9IGZyb20gXCIuLi9tb2RlbHMvRXBpc29kZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25BdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMYXN0RXBpc29kZXNCeUNvdXJzZShlcGlzb2RlczogRXBpc29kZUluc3RhbmNlW10pIHtcclxuICBjb25zdCBjb3Vyc2VzT25MaXN0OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICBjb25zdCBsYXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5yZWR1Y2UoKGN1cnJlbnRMaXN0LCBlcGlzb2RlKSA9PiB7XHJcbiAgICBpZiAoIWNvdXJzZXNPbkxpc3QuaW5jbHVkZXMoZXBpc29kZS5jb3Vyc2VJZCkpIHtcclxuICAgICAgY291cnNlc09uTGlzdC5wdXNoKGVwaXNvZGUuY291cnNlSWQpO1xyXG4gICAgICBjdXJyZW50TGlzdC5wdXNoKGVwaXNvZGUpO1xyXG4gICAgICByZXR1cm4gY3VycmVudExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXBpc29kZUZyb21TYW1lQ291cnNlID0gY3VycmVudExpc3QuZmluZCgoZXApID0+IGVwLmNvdXJzZUlkID09PSBlcGlzb2RlLmNvdXJzZUlkKTtcclxuXHJcbiAgICBpZiAoZXBpc29kZUZyb21TYW1lQ291cnNlIS5vcmRlciA+IGVwaXNvZGUub3JkZXIpIHJldHVybiBjdXJyZW50TGlzdDtcclxuXHJcbiAgICBjb25zdCBsaXN0V2l0aG91dEVwaXNvZGVGcm9tU2FtZUNvdXJzZSA9IGN1cnJlbnRMaXN0LmZpbHRlcigoZXApID0+IGVwLmNvdXJzZUlkICE9PSBlcGlzb2RlLmNvdXJzZUlkKTtcclxuICAgIGxpc3RXaXRob3V0RXBpc29kZUZyb21TYW1lQ291cnNlLnB1c2goZXBpc29kZSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3RXaXRob3V0RXBpc29kZUZyb21TYW1lQ291cnNlO1xyXG4gIH0sIFtdIGFzIEVwaXNvZGVJbnN0YW5jZVtdKTtcclxuXHJcbiAgcmV0dXJuIGxhc3RFcGlzb2RlcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0ge1xyXG4gIGZpbmRCeUVtYWlsOiBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFtcImZpcnN0X25hbWVcIiwgXCJmaXJzdE5hbWVcIl0sIFtcImxhc3RfbmFtZVwiLCBcImxhc3ROYW1lXCJdLCBcInBob25lXCIsIFwiYmlydGhcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCJdLFxyXG4gICAgICB3aGVyZTogeyBlbWFpbCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9LFxyXG5cclxuICBjcmVhdGU6IGFzeW5jIChhdHRyaWJ1dGVzOiBVc2VyQ3JlYXRpb25BdHRyaWJ1dGVzKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoYXR0cmlidXRlcyk7XHJcbiAgICByZXR1cm4gdXNlcjtcclxuICB9LFxyXG5cclxuICBnZXRLZWVwV2F0Y2hpbmdMaXN0OiBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdXNlcldpdGhXYXRjaGluZ0VwaXNvZGVzID0gYXdhaXQgVXNlci5maW5kQnlQayhpZCwge1xyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgYXNzb2NpYXRpb246IFwiRXBpc29kZXNcIixcclxuICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIixcclxuICAgICAgICAgIFwic3lub3BzaXNcIixcclxuICAgICAgICAgIFwib3JkZXJcIixcclxuICAgICAgICAgIFtcInZpZGVvX3VybFwiLCBcInZpZGVvVXJsXCJdLFxyXG4gICAgICAgICAgW1wic2Vjb25kc19sb25nXCIsIFwic2Vjb25kc0xvbmdcIl0sXHJcbiAgICAgICAgICBbXCJjb3Vyc2VfaWRcIiwgXCJjb3Vyc2VJZFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXNzb2NpYXRpb246IFwiQ291cnNlXCIsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInN5bm9wc2lzXCIsIFtcInRodW1ibmFpbF91cmxcIiwgXCJ0aHVtYm5haWxVcmxcIl1dLFxyXG4gICAgICAgICAgICBhczogXCJjb3Vyc2VcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aHJvdWdoOiB7XHJcbiAgICAgICAgICBhczogXCJ3YXRjaFRpbWVcIixcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcInNlY29uZHNcIiwgW1widXBkYXRlZF9hdFwiLCBcInVwZGF0ZWRBdFwiXV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcldpdGhXYXRjaGluZ0VwaXNvZGVzKSB0aHJvdyBuZXcgRXJyb3IoXCJVc3XDoXJpbyBuw6NvIGVuY29udHJhZG8uXCIpO1xyXG5cclxuICAgIGNvbnN0IGtlZXBXYXRjaGluZ0xpc3QgPSBmaWx0ZXJMYXN0RXBpc29kZXNCeUNvdXJzZSh1c2VyV2l0aFdhdGNoaW5nRXBpc29kZXMuRXBpc29kZXMhKTtcclxuXHJcbiAgICBrZWVwV2F0Y2hpbmdMaXN0LnNvcnQoKGVwaXNvZGVPbmUsIGVwaXNvZGVUd28pID0+XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgZXBpc29kZU9uZS53YXRjaFRpbWUudXBkYXRlZEF0IDwgZXBpc29kZVR3by53YXRjaFRpbWUudXBkYXRlZEF0ID8gMSA6IC0xLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBrZWVwV2F0Y2hpbmdMaXN0O1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogYXN5bmMgKFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgIHBob25lOiBzdHJpbmc7XHJcbiAgICAgIGJpcnRoOiBEYXRlO1xyXG4gICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgfSxcclxuICApID0+IHtcclxuICAgIGNvbnN0IFthZmZlY3RlZFJvd3MsIHVwZGF0ZWRVc2Vyc10gPSBhd2FpdCBVc2VyLnVwZGF0ZShhdHRyaWJ1dGVzLCB7IHdoZXJlOiB7IGlkIH0sIHJldHVybmluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICByZXR1cm4gdXBkYXRlZFVzZXJzWzBdO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBhc3luYyAoaWQ6IHN0cmluZyB8IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgW2FmZmVjdGVkUm93cywgdXBkYXRlZFVzZXJzXSA9IGF3YWl0IFVzZXIudXBkYXRlKHtcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH0sIHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgaW5kaXZpZHVhbEhvb2tzOiB0cnVlLFxyXG4gICAgICByZXR1cm5pbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWRVc2Vyc1swXVxyXG4gIH0sXHJcbn07XHJcbiJdfQ==