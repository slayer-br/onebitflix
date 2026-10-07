"use strict";
// src/controllers/favoritesController.ts
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
exports.favoritesController = void 0;
const favoriteService_1 = require("../services/favoriteService");
exports.favoritesController = {
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        try {
            const favorites = yield favoriteService_1.favoriteService.findByUserId(userId);
            return res.json(favorites);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    save: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const { courseId } = req.body;
        try {
            const favorite = yield favoriteService_1.favoriteService.create(userId, courseId);
            return res.status(201).json(favorite);
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
            yield favoriteService_1.favoriteService.delete(userId, Number(courseId));
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2Zhdm9yaXRlc0NvbnRyb2xsZXIudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9jb250cm9sbGVycy9mYXZvcml0ZXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBeUM7Ozs7Ozs7Ozs7OztBQUl6QyxpRUFBOEQ7QUFFakQsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxLQUFLLEVBQUUsQ0FBTyxHQUF5QixFQUFFLEdBQWEsRUFBRSxFQUFFO1FBQ3hELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUMsRUFBRSxDQUFDO1FBRTVCLElBQUk7WUFDRixNQUFNLFNBQVMsR0FBRyxNQUFNLGlDQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDLENBQUE7SUFFRCxJQUFJLEVBQUUsQ0FBTyxHQUF5QixFQUFFLEdBQWEsRUFBRSxFQUFFO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUMsRUFBRSxDQUFDO1FBQzVCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRTlCLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLGlDQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNoRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELE1BQU0sRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDekQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUssQ0FBQyxFQUFFLENBQUE7UUFDM0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFFOUIsSUFBSTtZQUNGLE1BQU0saUNBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ3RELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUM5QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2FBQ3REO1NBQ0Y7SUFDSCxDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbnRyb2xsZXJzL2Zhdm9yaXRlc0NvbnRyb2xsZXIudHNcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRlZFJlcXVlc3QgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aFwiO1xyXG5pbXBvcnQgeyBmYXZvcml0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmF2b3JpdGVTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmF2b3JpdGVzQ29udHJvbGxlciA9IHtcclxuICBpbmRleDogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmYXZvcml0ZXMgPSBhd2FpdCBmYXZvcml0ZVNlcnZpY2UuZmluZEJ5VXNlcklkKHVzZXJJZCk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihmYXZvcml0ZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2F2ZTogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZDtcclxuICAgIGNvbnN0IHsgY291cnNlSWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZhdm9yaXRlID0gYXdhaXQgZmF2b3JpdGVTZXJ2aWNlLmNyZWF0ZSh1c2VySWQsIGNvdXJzZUlkKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGZhdm9yaXRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRlbGV0ZTogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZFxyXG4gICAgY29uc3QgY291cnNlSWQgPSByZXEucGFyYW1zLmlkXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmF2b3JpdGVTZXJ2aWNlLmRlbGV0ZSh1c2VySWQsIE51bWJlcihjb3Vyc2VJZCkpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuc2VuZCgpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19