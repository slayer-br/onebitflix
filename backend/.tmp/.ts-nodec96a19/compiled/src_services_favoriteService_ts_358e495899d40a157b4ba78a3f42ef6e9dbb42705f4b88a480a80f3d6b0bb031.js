"use strict";
// src/services/favoriteService.ts
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
exports.favoriteService = void 0;
const Favorite_1 = require("../models/Favorite");
exports.favoriteService = {
    findByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorites = yield Favorite_1.Favorite.findAll({
            attributes: [["user_id", "userId"]],
            where: { userId },
            include: {
                association: "Course",
                attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
            },
        });
        return {
            userId,
            courses: favorites.map((favorite) => favorite.Course),
        };
    }),
    create: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorite = yield Favorite_1.Favorite.create({
            userId,
            courseId,
        });
        return favorite;
    }),
    delete: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        yield Favorite_1.Favorite.destroy({
            where: {
                userId,
                courseId,
            },
        });
    }),
    isFavorited: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorite = yield Favorite_1.Favorite.findOne({
            where: {
                userId,
                courseId,
            },
        });
        return favorite !== null;
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2Zhdm9yaXRlU2VydmljZS50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2Zhdm9yaXRlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0NBQWtDOzs7Ozs7Ozs7Ozs7QUFFbEMsaURBQThDO0FBRWpDLFFBQUEsZUFBZSxHQUFHO0lBQzdCLFlBQVksRUFBRSxDQUFPLE1BQWMsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sU0FBUyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUM7WUFDdkMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sRUFBRTtnQkFDUCxXQUFXLEVBQUUsUUFBUTtnQkFDckIsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDMUU7U0FDRixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsTUFBTTtZQUNOLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3RELENBQUM7SUFDSixDQUFDLENBQUE7SUFFRCxNQUFNLEVBQUUsQ0FBTyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1FBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTTtZQUNOLFFBQVE7U0FDVCxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUE7SUFFRCxNQUFNLEVBQUUsQ0FBTyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1FBQ2pELE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFO2dCQUNMLE1BQU07Z0JBQ04sUUFBUTthQUNUO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsV0FBVyxFQUFFLENBQU8sTUFBYyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtRQUN0RCxNQUFNLFFBQVEsR0FBRyxNQUFNLG1CQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3RDLEtBQUssRUFBRTtnQkFDTCxNQUFNO2dCQUNOLFFBQVE7YUFDVDtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQztJQUMzQixDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NlcnZpY2VzL2Zhdm9yaXRlU2VydmljZS50c1xyXG5cclxuaW1wb3J0IHsgRmF2b3JpdGUgfSBmcm9tIFwiLi4vbW9kZWxzL0Zhdm9yaXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmF2b3JpdGVTZXJ2aWNlID0ge1xyXG4gIGZpbmRCeVVzZXJJZDogYXN5bmMgKHVzZXJJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBmYXZvcml0ZXMgPSBhd2FpdCBGYXZvcml0ZS5maW5kQWxsKHtcclxuICAgICAgYXR0cmlidXRlczogW1tcInVzZXJfaWRcIiwgXCJ1c2VySWRcIl1dLFxyXG4gICAgICB3aGVyZTogeyB1c2VySWQgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGFzc29jaWF0aW9uOiBcIkNvdXJzZVwiLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInN5bm9wc2lzXCIsIFtcInRodW1ibmFpbF91cmxcIiwgXCJ0aHVtYm5haWxVcmxcIl1dLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcklkLFxyXG4gICAgICBjb3Vyc2VzOiBmYXZvcml0ZXMubWFwKChmYXZvcml0ZSkgPT4gZmF2b3JpdGUuQ291cnNlKSxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlOiBhc3luYyAodXNlcklkOiBudW1iZXIsIGNvdXJzZUlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZhdm9yaXRlID0gYXdhaXQgRmF2b3JpdGUuY3JlYXRlKHtcclxuICAgICAgdXNlcklkLFxyXG4gICAgICBjb3Vyc2VJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmYXZvcml0ZTtcclxuICB9LFxyXG5cclxuICBkZWxldGU6IGFzeW5jICh1c2VySWQ6IG51bWJlciwgY291cnNlSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgYXdhaXQgRmF2b3JpdGUuZGVzdHJveSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIGNvdXJzZUlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaXNGYXZvcml0ZWQ6IGFzeW5jICh1c2VySWQ6IG51bWJlciwgY291cnNlSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZmF2b3JpdGUgPSBhd2FpdCBGYXZvcml0ZS5maW5kT25lKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgY291cnNlSWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmF2b3JpdGUgIT09IG51bGw7XHJcbiAgfSxcclxufTtcclxuIl19