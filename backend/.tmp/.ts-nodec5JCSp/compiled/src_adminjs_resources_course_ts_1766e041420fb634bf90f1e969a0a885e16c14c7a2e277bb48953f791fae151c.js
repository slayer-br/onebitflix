"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseResourceFeatures = exports.courseResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.courseResourceOptions = {
    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "uploadThumbnail", "categoryId", "featured"],
    filterProperties: ["name", "categoryId", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "categoryId", "featured"],
    showProperties: ["id", "name", "synopsis", "thumbnailUrl", "categoryId", "featured", "createdAt", "updatedAt"],
};
exports.courseResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, "../../../public"),
            },
        },
        properties: {
            key: "thumbnailUrl",
            file: "uploadThumbnail",
        },
        uploadPath: (record, filename) => `thumbnails/course-${record.get("id")}/${filename}`,
    }),
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvcmVzb3VyY2VzL2NvdXJzZS50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvcmVzb3VyY2VzL2NvdXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsNkRBQWdEO0FBR25DLFFBQUEscUJBQXFCLEdBQW9CO0lBQ3BELFVBQVUsRUFBRSxVQUFVO0lBQ3RCLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUNqRixnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sRUFBRyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztJQUNuRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFHLFlBQVksRUFBRSxVQUFVLENBQUM7SUFDekQsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUcsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztDQUMvRyxDQUFDO0FBRVcsUUFBQSxzQkFBc0IsR0FBa0I7SUFDbkQsSUFBQSxnQkFBaUIsRUFBQztRQUNoQixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDO2FBQ2hEO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCO1FBQ0QsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMscUJBQXFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFO0tBQ3RGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHVwbG9hZEZpbGVGZWF0dXJlIGZyb20gXCJAYWRtaW5qcy91cGxvYWRcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zLCBGZWF0dXJlVHlwZSB9IGZyb20gXCJhZG1pbmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMgPSB7XHJcbiAgbmF2aWdhdGlvbjogXCJDYXTDoWxvZ29cIixcclxuICBlZGl0UHJvcGVydGllczogW1wibmFtZVwiLCBcInN5bm9wc2lzXCIsIFwidXBsb2FkVGh1bWJuYWlsXCIsIFwiY2F0ZWdvcnlJZFwiLCBcImZlYXR1cmVkXCJdLFxyXG4gIGZpbHRlclByb3BlcnRpZXM6IFtcIm5hbWVcIiwgIFwiY2F0ZWdvcnlJZFwiLCBcImNyZWF0ZWRBdFwiLCBcInVwZGF0ZWRBdFwiXSxcclxuICBsaXN0UHJvcGVydGllczogW1wiaWRcIiwgXCJuYW1lXCIsICBcImNhdGVnb3J5SWRcIiwgXCJmZWF0dXJlZFwiXSxcclxuICBzaG93UHJvcGVydGllczogW1wiaWRcIiwgXCJuYW1lXCIsIFwic3lub3BzaXNcIiwgIFwidGh1bWJuYWlsVXJsXCIsIFwiY2F0ZWdvcnlJZFwiLCBcImZlYXR1cmVkXCIsXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIl0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlUmVzb3VyY2VGZWF0dXJlczogRmVhdHVyZVR5cGVbXSA9IFtcclxuICB1cGxvYWRGaWxlRmVhdHVyZSh7XHJcbiAgICBwcm92aWRlcjoge1xyXG4gICAgICBsb2NhbDoge1xyXG4gICAgICAgIGJ1Y2tldDogcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLi8uLi8uLi9wdWJsaWNcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBrZXk6IFwidGh1bWJuYWlsVXJsXCIsXHJcbiAgICAgIGZpbGU6IFwidXBsb2FkVGh1bWJuYWlsXCIsXHJcbiAgICB9LFxyXG4gICAgdXBsb2FkUGF0aDogKHJlY29yZCwgZmlsZW5hbWUpID0+IGB0aHVtYm5haWxzL2NvdXJzZS0ke3JlY29yZC5nZXQoXCJpZFwiKX0vJHtmaWxlbmFtZX1gLFxyXG4gIH0pLFxyXG5dO1xyXG4iXX0=