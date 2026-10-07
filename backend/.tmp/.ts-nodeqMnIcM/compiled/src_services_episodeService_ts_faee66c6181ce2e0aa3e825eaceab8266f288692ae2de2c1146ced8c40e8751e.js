"use strict";
// src/services/episodeService.ts
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
exports.episodeService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const models_1 = require("../models");
exports.episodeService = {
    streamEpisodeToResponse: (res, videoUrl, range) => {
        const filePath = path_1.default.join(__dirname, "../../uploads", videoUrl);
        const fileStat = fs_1.default.statSync(filePath);
        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileStat.size - 1;
            const chunkSize = end - start + 1;
            const file = fs_1.default.createReadStream(filePath, { start, end });
            const head = {
                "Content-Range": `bytes ${start}-${end}/${fileStat.size}`,
                "Accept-Ranges": "bytes",
                "Content-Length": chunkSize,
                "Content-Type": "video/mp4",
            };
            res.writeHead(206, head);
            file.pipe(res);
        }
        else {
            const head = {
                "Content-Length": fileStat.size,
                "Content-Type": "video/mp4",
            };
            res.writeHead(200, head);
            fs_1.default.createReadStream(filePath).pipe(res);
        }
    },
    getWatchTime: (userId, episodeId) => __awaiter(void 0, void 0, void 0, function* () {
        const watchTime = yield models_1.WatchTime.findOne({
            attributes: ["seconds"],
            where: {
                userId,
                episodeId,
            },
        });
        return watchTime;
    }),
    setWatchTime: ({ userId, episodeId, seconds }) => __awaiter(void 0, void 0, void 0, function* () {
        const watchTimeAlreadyExists = yield models_1.WatchTime.findOne({
            where: {
                userId,
                episodeId,
            },
        });
        if (watchTimeAlreadyExists) {
            watchTimeAlreadyExists.seconds = seconds;
            yield watchTimeAlreadyExists.save();
            return watchTimeAlreadyExists;
        }
        else {
            const watchTime = yield models_1.WatchTime.create({
                userId,
                episodeId,
                seconds,
            });
            return watchTime;
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2VwaXNvZGVTZXJ2aWNlLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvc2VydmljZXMvZXBpc29kZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7O0FBR2pDLDRDQUFvQjtBQUNwQixnREFBd0I7QUFFeEIsc0NBQXNDO0FBRXpCLFFBQUEsY0FBYyxHQUFHO0lBQzVCLHVCQUF1QixFQUFFLENBQUMsR0FBYSxFQUFFLFFBQWdCLEVBQUUsS0FBeUIsRUFBRSxFQUFFO1FBQ3RGLE1BQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRSxNQUFNLFFBQVEsR0FBRyxZQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZDLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNsRSxNQUFNLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVsQyxNQUFNLElBQUksR0FBRyxZQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFM0QsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsZUFBZSxFQUFFLFNBQVMsS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUN6RCxlQUFlLEVBQUUsT0FBTztnQkFDeEIsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsY0FBYyxFQUFFLFdBQVc7YUFDNUIsQ0FBQztZQUVGLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHO2dCQUNYLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUMvQixjQUFjLEVBQUUsV0FBVzthQUM1QixDQUFDO1lBRUYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekIsWUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxZQUFZLEVBQUUsQ0FBTyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxFQUFFO1FBQ3hELE1BQU0sU0FBUyxHQUFHLE1BQU0sa0JBQVMsQ0FBQyxPQUFPLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUssRUFBRTtnQkFDTCxNQUFNO2dCQUNOLFNBQVM7YUFDVjtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUMsQ0FBQTtJQUVELFlBQVksRUFBRSxDQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQXVCLEVBQUUsRUFBRTtRQUMxRSxNQUFNLHNCQUFzQixHQUFHLE1BQU0sa0JBQVMsQ0FBQyxPQUFPLENBQUM7WUFDckQsS0FBSyxFQUFFO2dCQUNMLE1BQU07Z0JBQ04sU0FBUzthQUNWO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxzQkFBc0IsRUFBRTtZQUMxQixzQkFBc0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3pDLE1BQU0sc0JBQXNCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFcEMsT0FBTyxzQkFBc0IsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxTQUFTLEdBQUcsTUFBTSxrQkFBUyxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsTUFBTTtnQkFDTixTQUFTO2dCQUNULE9BQU87YUFDUixDQUFDLENBQUM7WUFFSCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2VydmljZXMvZXBpc29kZVNlcnZpY2UudHNcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBXYXRjaFRpbWVBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL21vZGVscy9XYXRjaFRpbWVcIjtcclxuaW1wb3J0IHsgV2F0Y2hUaW1lIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVwaXNvZGVTZXJ2aWNlID0ge1xyXG4gIHN0cmVhbUVwaXNvZGVUb1Jlc3BvbnNlOiAocmVzOiBSZXNwb25zZSwgdmlkZW9Vcmw6IHN0cmluZywgcmFuZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uLy4uL3VwbG9hZHNcIiwgdmlkZW9VcmwpO1xyXG4gICAgY29uc3QgZmlsZVN0YXQgPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XHJcblxyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gcmFuZ2UucmVwbGFjZSgvYnl0ZXM9LywgXCJcIikuc3BsaXQoXCItXCIpO1xyXG5cclxuICAgICAgY29uc3Qgc3RhcnQgPSBwYXJzZUludChwYXJ0c1swXSwgMTApO1xyXG4gICAgICBjb25zdCBlbmQgPSBwYXJ0c1sxXSA/IHBhcnNlSW50KHBhcnRzWzFdLCAxMCkgOiBmaWxlU3RhdC5zaXplIC0gMTtcclxuICAgICAgY29uc3QgY2h1bmtTaXplID0gZW5kIC0gc3RhcnQgKyAxO1xyXG5cclxuICAgICAgY29uc3QgZmlsZSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGhlYWQgPSB7XHJcbiAgICAgICAgXCJDb250ZW50LVJhbmdlXCI6IGBieXRlcyAke3N0YXJ0fS0ke2VuZH0vJHtmaWxlU3RhdC5zaXplfWAsXHJcbiAgICAgICAgXCJBY2NlcHQtUmFuZ2VzXCI6IFwiYnl0ZXNcIixcclxuICAgICAgICBcIkNvbnRlbnQtTGVuZ3RoXCI6IGNodW5rU2l6ZSxcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInZpZGVvL21wNFwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVzLndyaXRlSGVhZCgyMDYsIGhlYWQpO1xyXG4gICAgICBmaWxlLnBpcGUocmVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGhlYWQgPSB7XHJcbiAgICAgICAgXCJDb250ZW50LUxlbmd0aFwiOiBmaWxlU3RhdC5zaXplLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidmlkZW8vbXA0XCIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXMud3JpdGVIZWFkKDIwMCwgaGVhZCk7XHJcbiAgICAgIGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpLnBpcGUocmVzKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRXYXRjaFRpbWU6IGFzeW5jICh1c2VySWQ6IG51bWJlciwgZXBpc29kZUlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHdhdGNoVGltZSA9IGF3YWl0IFdhdGNoVGltZS5maW5kT25lKHtcclxuICAgICAgYXR0cmlidXRlczogW1wic2Vjb25kc1wiXSxcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgZXBpc29kZUlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHdhdGNoVGltZTtcclxuICB9LFxyXG5cclxuICBzZXRXYXRjaFRpbWU6IGFzeW5jICh7IHVzZXJJZCwgZXBpc29kZUlkLCBzZWNvbmRzIH06IFdhdGNoVGltZUF0dHJpYnV0ZXMpID0+IHtcclxuICAgIGNvbnN0IHdhdGNoVGltZUFscmVhZHlFeGlzdHMgPSBhd2FpdCBXYXRjaFRpbWUuZmluZE9uZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIGVwaXNvZGVJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh3YXRjaFRpbWVBbHJlYWR5RXhpc3RzKSB7XHJcbiAgICAgIHdhdGNoVGltZUFscmVhZHlFeGlzdHMuc2Vjb25kcyA9IHNlY29uZHM7XHJcbiAgICAgIGF3YWl0IHdhdGNoVGltZUFscmVhZHlFeGlzdHMuc2F2ZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHdhdGNoVGltZUFscmVhZHlFeGlzdHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3YXRjaFRpbWUgPSBhd2FpdCBXYXRjaFRpbWUuY3JlYXRlKHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgZXBpc29kZUlkLFxyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHdhdGNoVGltZTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iXX0=