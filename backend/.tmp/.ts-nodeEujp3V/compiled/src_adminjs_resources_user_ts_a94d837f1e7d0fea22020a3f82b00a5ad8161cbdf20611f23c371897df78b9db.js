"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResourceOptions = void 0;
exports.userResourceOptions = {
    navigation: "Administração",
    properties: {
        birth: {
            type: "date",
        },
        password: {
            type: "password",
        },
        role: {
            availableValues: [
                { value: "admin", label: "Administrador" },
                { value: "user", label: "Usuário Padrão" },
            ],
        },
    },
    editProperties: ["firstName", "lastName", "phone", "birth", "email", "password", "role"],
    filterProperties: ["firstName", "lastName", "phone", "birth", "email", "role", "createdAt", "updatedAt"],
    listProperties: ["id", "firstName", "email", "role"],
    showProperties: ["id", "firstName", "lastName", "phone", "birth", "email", "role", "createdAt", "updatedAt"],
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvcmVzb3VyY2VzL3VzZXIudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9hZG1pbmpzL3Jlc291cmNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsbUJBQW1CLEdBQW9CO0lBQ2xELFVBQVUsRUFBRSxlQUFlO0lBQzNCLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNELElBQUksRUFBRTtZQUNKLGVBQWUsRUFBRTtnQkFDZixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtnQkFDMUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTthQUMzQztTQUNGO0tBQ0Y7SUFDRCxjQUFjLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7SUFDeEYsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO0lBQ3hHLGNBQWMsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUNwRCxjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztDQUM3RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSBcImFkbWluanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMgPSB7XHJcbiAgbmF2aWdhdGlvbjogXCJBZG1pbmlzdHJhw6fDo29cIixcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBiaXJ0aDoge1xyXG4gICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICBhdmFpbGFibGVWYWx1ZXM6IFtcclxuICAgICAgICB7IHZhbHVlOiBcImFkbWluXCIsIGxhYmVsOiBcIkFkbWluaXN0cmFkb3JcIiB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidXNlclwiLCBsYWJlbDogXCJVc3XDoXJpbyBQYWRyw6NvXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBlZGl0UHJvcGVydGllczogW1wiZmlyc3ROYW1lXCIsIFwibGFzdE5hbWVcIiwgXCJwaG9uZVwiLCBcImJpcnRoXCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcInJvbGVcIl0sXHJcbiAgZmlsdGVyUHJvcGVydGllczogW1wiZmlyc3ROYW1lXCIsIFwibGFzdE5hbWVcIiwgXCJwaG9uZVwiLCBcImJpcnRoXCIsIFwiZW1haWxcIiwgXCJyb2xlXCIsIFwiY3JlYXRlZEF0XCIsIFwidXBkYXRlZEF0XCJdLFxyXG4gIGxpc3RQcm9wZXJ0aWVzOiBbXCJpZFwiLCBcImZpcnN0TmFtZVwiLCBcImVtYWlsXCIsIFwicm9sZVwiXSxcclxuICBzaG93UHJvcGVydGllczogW1wiaWRcIiwgXCJmaXJzdE5hbWVcIiwgXCJsYXN0TmFtZVwiLCBcInBob25lXCIsIFwiYmlydGhcIiwgXCJlbWFpbFwiLCBcInJvbGVcIiwgXCJjcmVhdGVkQXRcIiwgXCJ1cGRhdGVkQXRcIl0sXHJcbn07XHJcbiJdfQ==