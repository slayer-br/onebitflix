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
exports.usersController = void 0;
const userService_1 = require("../services/userService");
exports.usersController = {
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = req.user;
            return res.json(currentUser);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.user;
        const { firstName, lastName, phone, email, birth } = req.body;
        try {
            const updatedUser = yield userService_1.userService.update(id, {
                firstName,
                lastName,
                phone,
                email,
                birth,
            });
            return res.json(updatedUser);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    updatePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.user;
        const { currentPassword, newPassword } = req.body;
        if (!user) {
            return res.status(401).json({ message: "Não autorizado!" });
        }
        try {
            user.checkPassword(currentPassword, (err, isSame) => __awaiter(void 0, void 0, void 0, function* () {
                if (err)
                    return res.status(400).json({ message: err.message });
                if (!isSame) {
                    return res.status(400).json({ message: "Senha incorreta." });
                }
                yield userService_1.userService.updatePassword(user.id, newPassword);
                return res.status(204).send();
            }));
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    watching: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.user;
        try {
            const watching = yield userService_1.userService.getKeepWatchingList(id);
            return res.json(watching);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL3VzZXJDb250cm9sbGVyLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEseURBQXNEO0FBRXpDLFFBQUEsZUFBZSxHQUFHO0lBQzdCLElBQUksRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDdkQsSUFBSTtZQUNGLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDN0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELE1BQU0sRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDekQsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUM7UUFDekIsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRTlELElBQUk7WUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLHlCQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsU0FBUztnQkFDVCxRQUFRO2dCQUNSLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELGNBQWMsRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDakUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN4RCxJQUFJLEdBQUc7b0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFFL0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztpQkFDOUQ7Z0JBRUQsTUFBTSx5QkFBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtJQUVELFFBQVEsRUFBRSxDQUFPLEdBQXlCLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDM0QsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUM7UUFFekIsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtnQkFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQyxDQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRlZFJlcXVlc3QgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJzQ29udHJvbGxlciA9IHtcclxuICBzaG93OiBhc3luYyAocmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXIgPSByZXEudXNlcjtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGN1cnJlbnRVc2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyITtcclxuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsLCBiaXJ0aCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS51cGRhdGUoaWQsIHtcclxuICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgYmlydGgsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHVwZGF0ZWRVc2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBhc3luYyAocmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlcS51c2VyO1xyXG4gICAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOw6NvIGF1dG9yaXphZG8hXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdXNlci5jaGVja1Bhc3N3b3JkKGN1cnJlbnRQYXNzd29yZCwgYXN5bmMgKGVyciwgaXNTYW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgIGlmICghaXNTYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlNlbmhhIGluY29ycmV0YS5cIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHVzZXJTZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKHVzZXIuaWQsIG5ld1Bhc3N3b3JkKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLnNlbmQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaGluZzogYXN5bmMgKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyITtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3YXRjaGluZyA9IGF3YWl0IHVzZXJTZXJ2aWNlLmdldEtlZXBXYXRjaGluZ0xpc3QoaWQpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24od2F0Y2hpbmcpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIl19