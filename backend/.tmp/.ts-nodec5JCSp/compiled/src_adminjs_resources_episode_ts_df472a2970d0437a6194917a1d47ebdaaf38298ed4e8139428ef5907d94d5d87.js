"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodeResourceFeatures = exports.episodeResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.episodeResourceOptions = {
    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "courseId", "order", "uploadVideo", "secondsLong"],
    filterProperties: ["name", "synopsis", "courseId", "secondsLong", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "courseId", "order", "secondsLong"],
    showProperties: ["id", "name", "synopsis", "courseId", "order", "videoUrl", "secondsLong", "createdAt", "updatedAt"],
};
exports.episodeResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, "../../../uploads"),
            },
        },
        properties: {
            key: "videoUrl",
            file: "uploadVideo",
        },
        uploadPath: (record, filename) => `videos/course-${record.get("courseId")}/${filename}`,
    }),
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvcmVzb3VyY2VzL2VwaXNvZGUudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9hZG1pbmpzL3Jlc291cmNlcy9lcGlzb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQUN4Qiw2REFBZ0Q7QUFHbkMsUUFBQSxzQkFBc0IsR0FBb0I7SUFDckQsVUFBVSxFQUFFLFVBQVU7SUFDdEIsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDdkYsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztJQUMzRixjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDO0lBQ2xFLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO0NBQ3JILENBQUM7QUFFVyxRQUFBLHVCQUF1QixHQUFrQjtJQUNwRCxJQUFBLGdCQUFpQixFQUFDO1FBQ2hCLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7YUFDakQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLGFBQWE7U0FDcEI7UUFDRCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLEVBQUU7S0FDeEYsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgdXBsb2FkRmlsZUZlYXR1cmUgZnJvbSBcIkBhZG1pbmpzL3VwbG9hZFwiO1xyXG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMsIEZlYXR1cmVUeXBlIH0gZnJvbSBcImFkbWluanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlcGlzb2RlUmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMgPSB7XHJcbiAgbmF2aWdhdGlvbjogXCJDYXTDoWxvZ29cIixcclxuICBlZGl0UHJvcGVydGllczogW1wibmFtZVwiLCBcInN5bm9wc2lzXCIsIFwiY291cnNlSWRcIiwgXCJvcmRlclwiLCBcInVwbG9hZFZpZGVvXCIsIFwic2Vjb25kc0xvbmdcIl0sXHJcbiAgZmlsdGVyUHJvcGVydGllczogW1wibmFtZVwiLCBcInN5bm9wc2lzXCIsIFwiY291cnNlSWRcIiwgXCJzZWNvbmRzTG9uZ1wiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiXSxcclxuICBsaXN0UHJvcGVydGllczogW1wiaWRcIiwgXCJuYW1lXCIsIFwiY291cnNlSWRcIiwgXCJvcmRlclwiLCBcInNlY29uZHNMb25nXCJdLFxyXG4gIHNob3dQcm9wZXJ0aWVzOiBbXCJpZFwiLCBcIm5hbWVcIiwgXCJzeW5vcHNpc1wiLCBcImNvdXJzZUlkXCIsIFwib3JkZXJcIiwgXCJ2aWRlb1VybFwiLCBcInNlY29uZHNMb25nXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVwaXNvZGVSZXNvdXJjZUZlYXR1cmVzOiBGZWF0dXJlVHlwZVtdID0gW1xyXG4gIHVwbG9hZEZpbGVGZWF0dXJlKHtcclxuICAgIHByb3ZpZGVyOiB7XHJcbiAgICAgIGxvY2FsOiB7XHJcbiAgICAgICAgYnVja2V0OiBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uLy4uLy4uL3VwbG9hZHNcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBrZXk6IFwidmlkZW9VcmxcIixcclxuICAgICAgZmlsZTogXCJ1cGxvYWRWaWRlb1wiLFxyXG4gICAgfSxcclxuICAgIHVwbG9hZFBhdGg6IChyZWNvcmQsIGZpbGVuYW1lKSA9PiBgdmlkZW9zL2NvdXJzZS0ke3JlY29yZC5nZXQoXCJjb3Vyc2VJZFwiKX0vJHtmaWxlbmFtZX1gLFxyXG4gIH0pLFxyXG5dO1xyXG4iXX0=