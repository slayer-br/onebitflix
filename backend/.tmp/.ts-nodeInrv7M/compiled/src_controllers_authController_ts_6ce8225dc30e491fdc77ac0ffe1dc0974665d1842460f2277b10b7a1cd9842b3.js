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
exports.authController = void 0;
const userService_1 = require("../services/userService");
const jwtService_1 = require("../services/jwtService");
exports.authController = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { firstName, lastName, phone, birth, email, password } = req.body;
        try {
            const userAlreadyExists = yield userService_1.userService.findByEmail(email);
            if (userAlreadyExists) {
                throw new Error("Este e-mail já está cadastrado.");
            }
            const user = yield userService_1.userService.create({
                firstName,
                lastName,
                phone,
                birth,
                email,
                password,
                role: "user",
            });
            return res.status(201).json(user);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield userService_1.userService.findByEmail(email);
            if (!user) {
                return res.status(401).json({ message: "E-mail não registrado." });
            }
            user.checkPassword(password, (err, isSame) => {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                if (!isSame) {
                    return res.status(401).json({ message: "Senha incorreta." });
                }
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    email: user.email,
                };
                const token = jwtService_1.jwtService.signToken(payload, "7d");
                return res.json({ authenticated: true, user, token });
            });
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbnRyb2xsZXJzL2F1dGhDb250cm9sbGVyLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvY29udHJvbGxlcnMvYXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXNEO0FBQ3RELHVEQUFvRDtBQUV2QyxRQUFBLGNBQWMsR0FBRztJQUM1QixRQUFRLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDOUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUV4RSxJQUFJO1lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLHlCQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNwRDtZQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxRQUFRO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDLENBQUE7SUFFRCxLQUFLLEVBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXJDLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHlCQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7YUFDcEU7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDdkQ7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztpQkFDOUQ7Z0JBRUQsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNsQixDQUFDO2dCQUVGLE1BQU0sS0FBSyxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFbEQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGp3dFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvand0U2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhDb250cm9sbGVyID0ge1xyXG4gIHJlZ2lzdGVyOiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lLCBiaXJ0aCwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyQWxyZWFkeUV4aXN0cyA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcclxuXHJcbiAgICAgIGlmICh1c2VyQWxyZWFkeUV4aXN0cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVzdGUgZS1tYWlsIGrDoSBlc3TDoSBjYWRhc3RyYWRvLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmNyZWF0ZSh7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGJpcnRoLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZ2luOiBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcclxuXHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiRS1tYWlsIG7Do28gcmVnaXN0cmFkby5cIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXNlci5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkLCAoZXJyLCBpc1NhbWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNTYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIlNlbmhhIGluY29ycmV0YS5cIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dFNlcnZpY2Uuc2lnblRva2VuKHBheWxvYWQsIFwiN2RcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7IGF1dGhlbnRpY2F0ZWQ6IHRydWUsIHVzZXIsIHRva2VuIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiJdfQ==