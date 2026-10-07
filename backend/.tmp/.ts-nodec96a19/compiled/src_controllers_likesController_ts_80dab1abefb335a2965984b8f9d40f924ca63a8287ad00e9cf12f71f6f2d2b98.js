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
exports.likesController = void 0;
const likeService_1 = require("../services/likeService");
exports.likesController = {
    // POST /likes
    save: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const { courseId } = req.body;
        try {
            const like = yield likeService_1.likeService.create(userId, courseId);
            return res.status(201).json(like);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const courseId = req.params.id;
        try {
            yield likeService_1.likeService.delete(userId, Number(courseId));
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2xpa2VzQ29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2xpa2VzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSx5REFBc0Q7QUFFekMsUUFBQSxlQUFlLEdBQUc7SUFDN0IsY0FBYztJQUNkLElBQUksRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDdkQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUssQ0FBQyxFQUFFLENBQUM7UUFDNUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFOUIsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtnQkFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsTUFBTSxFQUFFLENBQU8sR0FBeUIsRUFBRSxHQUFhLEVBQUUsRUFBRTtRQUN6RCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSyxDQUFDLEVBQUUsQ0FBQTtRQUMzQixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUU5QixJQUFJO1lBQ0YsTUFBTSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDbEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1NBQzlCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7YUFDdEQ7U0FDRjtJQUNILENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZWRSZXF1ZXN0IH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL2F1dGhcIjtcclxuaW1wb3J0IHsgbGlrZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbGlrZVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaWtlc0NvbnRyb2xsZXIgPSB7XHJcbiAgLy8gUE9TVCAvbGlrZXNcclxuICBzYXZlOiBhc3luYyAocmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gcmVxLnVzZXIhLmlkO1xyXG4gICAgY29uc3QgeyBjb3Vyc2VJZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbGlrZSA9IGF3YWl0IGxpa2VTZXJ2aWNlLmNyZWF0ZSh1c2VySWQsIGNvdXJzZUlkKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGxpa2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGVsZXRlOiBhc3luYyAocmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gcmVxLnVzZXIhLmlkXHJcbiAgICBjb25zdCBjb3Vyc2VJZCA9IHJlcS5wYXJhbXMuaWRcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsaWtlU2VydmljZS5kZWxldGUodXNlcklkLCBOdW1iZXIoY291cnNlSWQpKVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLnNlbmQoKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==