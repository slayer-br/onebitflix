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
exports.coursesController = void 0;
const courseService_1 = require("../services/courseService");
const getPaginationParams_1 = require("../helpers/getPaginationParams");
const likeService_1 = require("../services/likeService");
const favoriteService_1 = require("../services/favoriteService");
exports.coursesController = {
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const courseId = req.params.id;
        try {
            const course = yield courseService_1.courseService.findByIdWithEpisodes(courseId);
            if (!course)
                return res.status(404).json({ message: "Curso não encontrado" });
            const liked = yield likeService_1.likeService.isLiked(userId, Number(courseId));
            const favorited = yield favoriteService_1.favoriteService.isFavorited(userId, Number(courseId));
            return res.json(Object.assign(Object.assign({}, course.get()), { favorited, liked }));
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    featured: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const featuredCourses = yield courseService_1.courseService.getRandomFeaturedCourses();
            return res.json(featuredCourses);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    newest: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newestCourses = yield courseService_1.courseService.getTopTenNewest();
            return res.json(newestCourses);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    search: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        const [page, perPage] = (0, getPaginationParams_1.getPaginationParams)(req.query);
        try {
            if (typeof name !== "string")
                throw new Error("name param must be of type string");
            const courses = yield courseService_1.courseService.findByName(name, page, perPage);
            return res.json(courses);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    popular: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const topTen = yield courseService_1.courseService.getTopTenByLikes();
            return res.json(topTen);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2NvdXJzZXNDb250cm9sbGVyLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvY29udHJvbGxlcnMvY291cnNlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQTBEO0FBQzFELHdFQUFxRTtBQUVyRSx5REFBc0Q7QUFDdEQsaUVBQThEO0FBRWpELFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsSUFBSSxFQUFFLENBQU8sR0FBeUIsRUFBRSxHQUFhLEVBQUUsRUFBRTtRQUN2RCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSyxDQUFDLEVBQUUsQ0FBQztRQUM1QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUUvQixJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSw2QkFBYSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxFLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLE1BQU0sS0FBSyxHQUFHLE1BQU0seUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sU0FBUyxHQUFHLE1BQU0saUNBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRTlFLE9BQU8sR0FBRyxDQUFDLElBQUksaUNBQU0sTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFF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Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBjb3Vyc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdXJzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0UGFnaW5hdGlvblBhcmFtcyB9IGZyb20gXCIuLi9oZWxwZXJzL2dldFBhZ2luYXRpb25QYXJhbXNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRlZFJlcXVlc3QgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aFwiO1xyXG5pbXBvcnQgeyBsaWtlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9saWtlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBmYXZvcml0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmF2b3JpdGVTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlc0NvbnRyb2xsZXIgPSB7XHJcbiAgc2hvdzogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZDtcclxuICAgIGNvbnN0IGNvdXJzZUlkID0gcmVxLnBhcmFtcy5pZDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBjb3Vyc2VTZXJ2aWNlLmZpbmRCeUlkV2l0aEVwaXNvZGVzKGNvdXJzZUlkKTtcclxuXHJcbiAgICAgIGlmICghY291cnNlKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkN1cnNvIG7Do28gZW5jb250cmFkb1wiIH0pO1xyXG5cclxuICAgICAgY29uc3QgbGlrZWQgPSBhd2FpdCBsaWtlU2VydmljZS5pc0xpa2VkKHVzZXJJZCwgTnVtYmVyKGNvdXJzZUlkKSk7XHJcbiAgICAgIGNvbnN0IGZhdm9yaXRlZCA9IGF3YWl0IGZhdm9yaXRlU2VydmljZS5pc0Zhdm9yaXRlZCh1c2VySWQsIE51bWJlcihjb3Vyc2VJZCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgLi4uY291cnNlLmdldCgpLCBmYXZvcml0ZWQsIGxpa2VkIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZmVhdHVyZWQ6IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVkQ291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZ2V0UmFuZG9tRmVhdHVyZWRDb3Vyc2VzKCk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihmZWF0dXJlZENvdXJzZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbmV3ZXN0OiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBuZXdlc3RDb3Vyc2VzID0gYXdhaXQgY291cnNlU2VydmljZS5nZXRUb3BUZW5OZXdlc3QoKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKG5ld2VzdENvdXJzZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VhcmNoOiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IFtwYWdlLCBwZXJQYWdlXSA9IGdldFBhZ2luYXRpb25QYXJhbXMocmVxLnF1ZXJ5KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIm5hbWUgcGFyYW0gbXVzdCBiZSBvZiB0eXBlIHN0cmluZ1wiKTtcclxuICAgICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGNvdXJzZVNlcnZpY2UuZmluZEJ5TmFtZShuYW1lLCBwYWdlLCBwZXJQYWdlKTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNvdXJzZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhcjogYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9wVGVuID0gYXdhaXQgY291cnNlU2VydmljZS5nZXRUb3BUZW5CeUxpa2VzKCk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih0b3BUZW4pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIl19