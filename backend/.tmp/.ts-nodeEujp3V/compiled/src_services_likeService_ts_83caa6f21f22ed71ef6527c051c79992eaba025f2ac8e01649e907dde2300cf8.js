"use strict";
// src/services/likeService.ts
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
exports.likeService = void 0;
const models_1 = require("../models");
exports.likeService = {
    create: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const like = yield models_1.Like.create({
            userId,
            courseId,
        });
        return like;
    }),
    delete: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Like.destroy({
            where: {
                userId,
                courseId,
            },
        });
    }),
    isLiked: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const like = yield models_1.Like.findOne({
            where: {
                userId,
                courseId,
            },
        });
        return like !== null ? true : false;
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2xpa2VTZXJ2aWNlLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvc2VydmljZXMvbGlrZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhCQUE4Qjs7Ozs7Ozs7Ozs7O0FBRTlCLHNDQUFpQztBQUVwQixRQUFBLFdBQVcsR0FBRztJQUN6QixNQUFNLEVBQUUsQ0FBTyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1FBQ2pELE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixNQUFNO1lBQ04sUUFBUTtTQUNULENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFBO0lBRUQsTUFBTSxFQUFFLENBQU8sTUFBYyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtRQUNqRCxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLE1BQU07Z0JBQ04sUUFBUTthQUNUO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsT0FBTyxFQUFFLENBQU8sTUFBYyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtRQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUIsS0FBSyxFQUFFO2dCQUNMLE1BQU07Z0JBQ04sUUFBUTthQUNUO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NlcnZpY2VzL2xpa2VTZXJ2aWNlLnRzXHJcblxyXG5pbXBvcnQgeyBMaWtlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VTZXJ2aWNlID0ge1xyXG4gIGNyZWF0ZTogYXN5bmMgKHVzZXJJZDogbnVtYmVyLCBjb3Vyc2VJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlID0gYXdhaXQgTGlrZS5jcmVhdGUoe1xyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIGNvdXJzZUlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGxpa2U7XHJcbiAgfSxcclxuXHJcbiAgZGVsZXRlOiBhc3luYyAodXNlcklkOiBudW1iZXIsIGNvdXJzZUlkOiBudW1iZXIpID0+IHtcclxuICAgIGF3YWl0IExpa2UuZGVzdHJveSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIGNvdXJzZUlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgaXNMaWtlZDogYXN5bmMgKHVzZXJJZDogbnVtYmVyLCBjb3Vyc2VJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlID0gYXdhaXQgTGlrZS5maW5kT25lKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgY291cnNlSWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGlrZSAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxuICB9LFxyXG59O1xyXG4iXX0=