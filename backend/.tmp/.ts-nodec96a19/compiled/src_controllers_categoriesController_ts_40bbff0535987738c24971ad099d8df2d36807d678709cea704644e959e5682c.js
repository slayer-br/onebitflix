"use strict";
// src/controllers/categories-controller.ts
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
exports.categoriesController = void 0;
const getPaginationParams_1 = require("../helpers/getPaginationParams");
const categoryService_1 = require("../services/categoryService");
const categoriesController = {
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const [page, perPage] = (0, getPaginationParams_1.getPaginationParams)(req.query);
        try {
            const paginatedCategories = yield categoryService_1.categoryService.findAllPaginated(page, perPage);
            return res.json(paginatedCategories);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const category = yield categoryService_1.categoryService.findByWithCourses(id);
            return res.json(category);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
exports.categoriesController = categoriesController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2NhdGVnb3JpZXNDb250cm9sbGVyLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvY29udHJvbGxlcnMvY2F0ZWdvcmllc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQzs7Ozs7Ozs7Ozs7O0FBRzNDLHdFQUFxRTtBQUNyRSxpRUFBOEQ7QUFFOUQsTUFBTSxvQkFBb0IsR0FBRztJQUMzQixLQUFLLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFBLHlDQUFtQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RCxJQUFJO1lBQ0YsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRWxGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELElBQUksRUFBRSxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtRQUMxQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUUxQixJQUFJO1lBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDLENBQUE7Q0FDRixDQUFDO0FBRU8sb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbnRyb2xsZXJzL2NhdGVnb3JpZXMtY29udHJvbGxlci50c1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0aW9uUGFyYW1zIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UGFnaW5hdGlvblBhcmFtc1wiO1xyXG5pbXBvcnQgeyBjYXRlZ29yeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2F0ZWdvcnlTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzQ29udHJvbGxlciA9IHtcclxuICBpbmRleDogYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgW3BhZ2UsIHBlclBhZ2VdID0gZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXEucXVlcnkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhZ2luYXRlZENhdGVnb3JpZXMgPSBhd2FpdCBjYXRlZ29yeVNlcnZpY2UuZmluZEFsbFBhZ2luYXRlZChwYWdlLCBwZXJQYWdlKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuanNvbihwYWdpbmF0ZWRDYXRlZ29yaWVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNob3c6IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBjYXRlZ29yeVNlcnZpY2UuZmluZEJ5V2l0aENvdXJzZXMoaWQpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2F0ZWdvcnkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGNhdGVnb3JpZXNDb250cm9sbGVyIH07XHJcbiJdfQ==