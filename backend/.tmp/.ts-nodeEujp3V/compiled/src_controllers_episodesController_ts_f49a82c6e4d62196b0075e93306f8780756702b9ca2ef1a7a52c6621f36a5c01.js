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
exports.episodesController = void 0;
const episodeService_1 = require("../services/episodeService");
exports.episodesController = {
    // GET /episodes/stream
    stream: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { videoUrl } = req.query;
        const range = req.headers.range;
        try {
            if (typeof videoUrl !== "string") {
                throw new Error("videoUrl must be of type 'string'");
            }
            episodeService_1.episodeService.streamEpisodeToResponse(res, videoUrl, range);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    getWatchTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const episodeId = req.params.id;
        try {
            const watchTime = yield episodeService_1.episodeService.getWatchTime(userId, Number(episodeId));
            return res.json(watchTime);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    setWatchTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const episodeId = Number(req.params.id);
        const { seconds } = req.body;
        try {
            const watchTime = yield episodeService_1.episodeService.setWatchTime({
                episodeId,
                userId,
                seconds,
            });
            return res.json(watchTime);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2VwaXNvZGVzQ29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2VwaXNvZGVzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwrREFBNEQ7QUFHL0MsUUFBQSxrQkFBa0IsR0FBRztJQUNoQyx1QkFBdUI7SUFDdkIsTUFBTSxFQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1FBQzVDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQy9CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRWhDLElBQUk7WUFDRixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2FBQ3REO1lBRUQsK0JBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELFlBQVksRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDL0QsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUssQ0FBQyxFQUFFLENBQUM7UUFDNUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFaEMsSUFBSTtZQUNGLE1BQU0sU0FBUyxHQUFHLE1BQU0sK0JBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDLENBQUE7SUFFRCxZQUFZLEVBQUUsQ0FBTyxHQUF5QixFQUFFLEdBQWEsRUFBRSxFQUFFO1FBQy9ELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUMsRUFBRSxDQUFDO1FBQzVCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRTdCLElBQUk7WUFDRixNQUFNLFNBQVMsR0FBRyxNQUFNLCtCQUFjLENBQUMsWUFBWSxDQUFDO2dCQUNsRCxTQUFTO2dCQUNULE1BQU07Z0JBQ04sT0FBTzthQUNSLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDLENBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBlcGlzb2RlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9lcGlzb2RlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkUmVxdWVzdCB9IGZyb20gXCIuLi9taWRkbGV3YXJlcy9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXBpc29kZXNDb250cm9sbGVyID0ge1xyXG4gIC8vIEdFVCAvZXBpc29kZXMvc3RyZWFtXHJcbiAgc3RyZWFtOiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZpZGVvVXJsIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCByYW5nZSA9IHJlcS5oZWFkZXJzLnJhbmdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmlkZW9VcmwgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2aWRlb1VybCBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZydcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVwaXNvZGVTZXJ2aWNlLnN0cmVhbUVwaXNvZGVUb1Jlc3BvbnNlKHJlcywgdmlkZW9VcmwsIHJhbmdlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFdhdGNoVGltZTogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZDtcclxuICAgIGNvbnN0IGVwaXNvZGVJZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2F0Y2hUaW1lID0gYXdhaXQgZXBpc29kZVNlcnZpY2UuZ2V0V2F0Y2hUaW1lKHVzZXJJZCwgTnVtYmVyKGVwaXNvZGVJZCkpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24od2F0Y2hUaW1lKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNldFdhdGNoVGltZTogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJlcS51c2VyIS5pZDtcclxuICAgIGNvbnN0IGVwaXNvZGVJZCA9IE51bWJlcihyZXEucGFyYW1zLmlkKTtcclxuICAgIGNvbnN0IHsgc2Vjb25kcyB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2F0Y2hUaW1lID0gYXdhaXQgZXBpc29kZVNlcnZpY2Uuc2V0V2F0Y2hUaW1lKHtcclxuICAgICAgICBlcGlzb2RlSWQsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24od2F0Y2hUaW1lKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiJdfQ==