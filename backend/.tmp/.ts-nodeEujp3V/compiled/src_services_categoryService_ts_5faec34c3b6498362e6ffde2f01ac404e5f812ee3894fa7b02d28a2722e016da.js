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
exports.categoryService = void 0;
const models_1 = require("../models");
exports.categoryService = {
    findAllPaginated: (page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const { count, rows } = yield models_1.Category.findAndCountAll({
            attributes: ["id", "name", "position"],
            order: [["position", "ASC"]],
            limit: perPage,
            offset,
        });
        return {
            categories: rows,
            page,
            perPage,
            total: count,
        };
    }),
    findByWithCourses: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const categoryWithCourses = yield models_1.Category.findByPk(id, {
            attributes: ['id', 'name'],
            include: {
                association: 'courses',
                attributes: [
                    'id',
                    'name',
                    'synopsis',
                    ['thumbnail_url', 'thumbnailUrl']
                ],
            },
        });
        return categoryWithCourses;
    })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2NhdGVnb3J5U2VydmljZS50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2NhdGVnb3J5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFFaEMsUUFBQSxlQUFlLEdBQUc7SUFDN0IsZ0JBQWdCLEVBQUUsQ0FBTyxJQUFZLEVBQUUsT0FBZSxFQUFFLEVBQUU7UUFDeEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBRXBDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxpQkFBUSxDQUFDLGVBQWUsQ0FBQztZQUNyRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QixLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU07U0FDUCxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSTtZQUNKLE9BQU87WUFDUCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7SUFDSixDQUFDLENBQUE7SUFFRCxpQkFBaUIsRUFBRSxDQUFPLEVBQVMsRUFBQyxFQUFFO1FBQ3BDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztZQUMxQixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLFVBQVUsRUFBRTtvQkFDVixJQUFJO29CQUNKLE1BQU07b0JBQ04sVUFBVTtvQkFDVixDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUM7aUJBQ2xDO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSwgQ291cnNlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5U2VydmljZSA9IHtcclxuICBmaW5kQWxsUGFnaW5hdGVkOiBhc3luYyAocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG5cclxuICAgIGNvbnN0IHsgY291bnQsIHJvd3MgfSA9IGF3YWl0IENhdGVnb3J5LmZpbmRBbmRDb3VudEFsbCh7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFtcImlkXCIsIFwibmFtZVwiLCBcInBvc2l0aW9uXCJdLFxyXG4gICAgICBvcmRlcjogW1tcInBvc2l0aW9uXCIsIFwiQVNDXCJdXSxcclxuICAgICAgbGltaXQ6IHBlclBhZ2UsXHJcbiAgICAgIG9mZnNldCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IHJvd3MsXHJcbiAgICAgIHBhZ2UsXHJcbiAgICAgIHBlclBhZ2UsXHJcbiAgICAgIHRvdGFsOiBjb3VudCxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgZmluZEJ5V2l0aENvdXJzZXM6IGFzeW5jIChpZDpzdHJpbmcpPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlXaXRoQ291cnNlcyA9IGF3YWl0IENhdGVnb3J5LmZpbmRCeVBrKGlkLCB7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IFsnaWQnLCAnbmFtZSddLFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgYXNzb2NpYXRpb246ICdjb3Vyc2VzJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAnaWQnLCBcclxuICAgICAgICAgICduYW1lJywgXHJcbiAgICAgICAgICAnc3lub3BzaXMnLCBcclxuICAgICAgICAgIFsndGh1bWJuYWlsX3VybCcsICd0aHVtYm5haWxVcmwnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjYXRlZ29yeVdpdGhDb3Vyc2VzO1xyXG4gIH1cclxufTtcclxuIl19