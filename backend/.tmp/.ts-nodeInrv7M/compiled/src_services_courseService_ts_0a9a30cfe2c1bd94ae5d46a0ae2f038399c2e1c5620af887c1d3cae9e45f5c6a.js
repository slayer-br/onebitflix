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
exports.courseService = void 0;
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
exports.courseService = {
    findByIdWithEpisodes: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const courseWithEpisodes = yield models_1.Course.findByPk(id, {
            attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
            include: {
                association: "episodes",
                attributes: ["id", "name", "synopsis", "order", ["video_url", "videoUrl"], ["seconds_long", "secondsLong"]],
                order: [["order", "ASC"]],
                separate: true,
            },
        });
        return courseWithEpisodes;
    }),
    getRandomFeaturedCourses: () => __awaiter(void 0, void 0, void 0, function* () {
        const featuredCourses = yield models_1.Course.findAll({
            attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
            where: {
                featured: true,
            },
        });
        const randomFeaturedCourses = featuredCourses.sort(() => 0.5 - Math.random());
        return randomFeaturedCourses.slice(0, 3);
    }),
    getTopTenNewest: () => __awaiter(void 0, void 0, void 0, function* () {
        const courses = yield models_1.Course.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        });
        return courses;
    }),
    findByName: (name, page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const { count, rows } = yield models_1.Course.findAndCountAll({
            attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
            where: {
                name: {
                    [sequelize_1.Op.iLike]: `%${name}%`,
                },
            },
            limit: perPage,
            offset,
        });
        return {
            courses: rows,
            page,
            perPage,
            total: count,
        };
    }),
    getTopTenByLikes: () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const results = yield ((_a = models_1.Course.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT
        courses.id,
        courses.name,
        courses.synopsis,
        courses.thumbnail_url as thumbnailUrl,
        COUNT(users.id) AS likes
      FROM courses
        LEFT OUTER JOIN likes
          ON courses.id = likes.course_id
          INNER JOIN users
            ON users.id = likes.user_id
      GROUP BY courses.id
      ORDER BY likes DESC
      LIMIT 10;`));
        if (results) {
            const [topTen] = results;
            return topTen;
        }
        else {
            return null;
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2NvdXJzZVNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9zZXJ2aWNlcy9jb3Vyc2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFtQztBQUNuQyx5Q0FBK0I7QUFFbEIsUUFBQSxhQUFhLEdBQUc7SUFDM0Isb0JBQW9CLEVBQUUsQ0FBTyxFQUFVLEVBQUUsRUFBRTtRQUN6QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sZUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDekUsT0FBTyxFQUFFO2dCQUNQLFdBQVcsRUFBRSxVQUFVO2dCQUN2QixVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzNHLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDLENBQUE7SUFFRCx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDbkMsTUFBTSxlQUFlLEdBQUcsTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDO1lBQzNDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxxQkFBcUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU5RSxPQUFPLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0lBRUQsZUFBZSxFQUFFLEdBQVMsRUFBRTtRQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLGVBQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkMsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDLENBQUE7SUFFRCxVQUFVLEVBQUUsQ0FBTyxJQUFZLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxFQUFFO1FBQ2hFLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVwQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sZUFBTSxDQUFDLGVBQWUsQ0FBQztZQUNuRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN6RSxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLENBQUMsY0FBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHO2lCQUN4QjthQUNGO1lBQ0QsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSTtZQUNKLE9BQU87WUFDUCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7SUFDSixDQUFDLENBQUE7SUFFRCxnQkFBZ0IsRUFBRSxHQUFTLEVBQUU7O1FBQzNCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQSxNQUFBLGVBQU0sQ0FBQyxTQUFTLDBDQUFFLEtBQUssQ0FDM0M7Ozs7Ozs7Ozs7Ozs7Z0JBYVUsQ0FDWCxDQUFBLENBQUM7UUFFRixJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE9wIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZVNlcnZpY2UgPSB7XHJcbiAgZmluZEJ5SWRXaXRoRXBpc29kZXM6IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBjb3Vyc2VXaXRoRXBpc29kZXMgPSBhd2FpdCBDb3Vyc2UuZmluZEJ5UGsoaWQsIHtcclxuICAgICAgYXR0cmlidXRlczogW1wiaWRcIiwgXCJuYW1lXCIsIFwic3lub3BzaXNcIiwgW1widGh1bWJuYWlsX3VybFwiLCBcInRodW1ibmFpbFVybFwiXV0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBhc3NvY2lhdGlvbjogXCJlcGlzb2Rlc1wiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInN5bm9wc2lzXCIsIFwib3JkZXJcIiwgW1widmlkZW9fdXJsXCIsIFwidmlkZW9VcmxcIl0sIFtcInNlY29uZHNfbG9uZ1wiLCBcInNlY29uZHNMb25nXCJdXSxcclxuICAgICAgICBvcmRlcjogW1tcIm9yZGVyXCIsIFwiQVNDXCJdXSxcclxuICAgICAgICBzZXBhcmF0ZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3Vyc2VXaXRoRXBpc29kZXM7XHJcbiAgfSxcclxuXHJcbiAgZ2V0UmFuZG9tRmVhdHVyZWRDb3Vyc2VzOiBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmZWF0dXJlZENvdXJzZXMgPSBhd2FpdCBDb3Vyc2UuZmluZEFsbCh7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInN5bm9wc2lzXCIsIFtcInRodW1ibmFpbF91cmxcIiwgXCJ0aHVtYm5haWxVcmxcIl1dLFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGZlYXR1cmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tRmVhdHVyZWRDb3Vyc2VzID0gZmVhdHVyZWRDb3Vyc2VzLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgcmV0dXJuIHJhbmRvbUZlYXR1cmVkQ291cnNlcy5zbGljZSgwLCAzKTtcclxuICB9LFxyXG5cclxuICBnZXRUb3BUZW5OZXdlc3Q6IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBDb3Vyc2UuZmluZEFsbCh7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgb3JkZXI6IFtbXCJjcmVhdGVkX2F0XCIsIFwiREVTQ1wiXV0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY291cnNlcztcclxuICB9LFxyXG5cclxuICBmaW5kQnlOYW1lOiBhc3luYyAobmFtZTogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHBlclBhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIHBlclBhZ2U7XHJcblxyXG4gICAgY29uc3QgeyBjb3VudCwgcm93cyB9ID0gYXdhaXQgQ291cnNlLmZpbmRBbmRDb3VudEFsbCh7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInN5bm9wc2lzXCIsIFtcInRodW1ibmFpbF91cmxcIiwgXCJ0aHVtYm5haWxVcmxcIl1dLFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgIFtPcC5pTGlrZV06IGAlJHtuYW1lfSVgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbWl0OiBwZXJQYWdlLFxyXG4gICAgICBvZmZzZXQsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb3Vyc2VzOiByb3dzLFxyXG4gICAgICBwYWdlLFxyXG4gICAgICBwZXJQYWdlLFxyXG4gICAgICB0b3RhbDogY291bnQsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGdldFRvcFRlbkJ5TGlrZXM6IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDb3Vyc2Uuc2VxdWVsaXplPy5xdWVyeShcclxuICAgICAgYFNFTEVDVFxyXG4gICAgICAgIGNvdXJzZXMuaWQsXHJcbiAgICAgICAgY291cnNlcy5uYW1lLFxyXG4gICAgICAgIGNvdXJzZXMuc3lub3BzaXMsXHJcbiAgICAgICAgY291cnNlcy50aHVtYm5haWxfdXJsIGFzIHRodW1ibmFpbFVybCxcclxuICAgICAgICBDT1VOVCh1c2Vycy5pZCkgQVMgbGlrZXNcclxuICAgICAgRlJPTSBjb3Vyc2VzXHJcbiAgICAgICAgTEVGVCBPVVRFUiBKT0lOIGxpa2VzXHJcbiAgICAgICAgICBPTiBjb3Vyc2VzLmlkID0gbGlrZXMuY291cnNlX2lkXHJcbiAgICAgICAgICBJTk5FUiBKT0lOIHVzZXJzXHJcbiAgICAgICAgICAgIE9OIHVzZXJzLmlkID0gbGlrZXMudXNlcl9pZFxyXG4gICAgICBHUk9VUCBCWSBjb3Vyc2VzLmlkXHJcbiAgICAgIE9SREVSIEJZIGxpa2VzIERFU0NcclxuICAgICAgTElNSVQgMTA7YCxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgY29uc3QgW3RvcFRlbl0gPSByZXN1bHRzO1xyXG4gICAgICByZXR1cm4gdG9wVGVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIl19