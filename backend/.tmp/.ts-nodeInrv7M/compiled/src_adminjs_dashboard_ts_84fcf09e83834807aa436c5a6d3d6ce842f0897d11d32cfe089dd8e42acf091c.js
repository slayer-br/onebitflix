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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardOptions = void 0;
const adminjs_1 = __importDefault(require("adminjs"));
const models_1 = require("../models");
exports.dashboardOptions = {
    component: adminjs_1.default.bundle("./components/Dashboard"),
    handler: (req, res, context) => __awaiter(void 0, void 0, void 0, function* () {
        const courses = yield models_1.Course.count();
        const episodes = yield models_1.Episode.count();
        const categories = yield models_1.Category.count();
        const standardUsers = yield models_1.User.count({ where: { role: "user" } });
        res.json({
            Cursos: courses,
            Episódios: episodes,
            Categorias: categories,
            Usuários: standardUsers,
        });
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvZGFzaGJvYXJkLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvYWRtaW5qcy9kYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQStDO0FBQy9DLHNDQUE0RDtBQUUvQyxRQUFBLGdCQUFnQixHQUd6QjtJQUNGLFNBQVMsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNuRCxPQUFPLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ25DLE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLE1BQU0sZ0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLGlCQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxhQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRSxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1AsTUFBTSxFQUFFLE9BQU87WUFDZixTQUFTLEVBQUUsUUFBUTtZQUNuQixVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSlMsIHsgUGFnZUhhbmRsZXIgfSBmcm9tIFwiYWRtaW5qc1wiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSwgQ291cnNlLCBFcGlzb2RlLCBVc2VyIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZE9wdGlvbnM6IHtcclxuICBoYW5kbGVyPzogUGFnZUhhbmRsZXI7XHJcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xyXG59ID0ge1xyXG4gIGNvbXBvbmVudDogQWRtaW5KUy5idW5kbGUoXCIuL2NvbXBvbmVudHMvRGFzaGJvYXJkXCIpLFxyXG4gIGhhbmRsZXI6IGFzeW5jIChyZXEsIHJlcywgY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IENvdXJzZS5jb3VudCgpO1xyXG4gICAgY29uc3QgZXBpc29kZXMgPSBhd2FpdCBFcGlzb2RlLmNvdW50KCk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgQ2F0ZWdvcnkuY291bnQoKTtcclxuICAgIGNvbnN0IHN0YW5kYXJkVXNlcnMgPSBhd2FpdCBVc2VyLmNvdW50KHsgd2hlcmU6IHsgcm9sZTogXCJ1c2VyXCIgfSB9KTtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgQ3Vyc29zOiBjb3Vyc2VzLFxyXG4gICAgICBFcGlzw7NkaW9zOiBlcGlzb2RlcyxcclxuICAgICAgQ2F0ZWdvcmlhczogY2F0ZWdvcmllcyxcclxuICAgICAgVXN1w6FyaW9zOiBzdGFuZGFyZFVzZXJzLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuIl19