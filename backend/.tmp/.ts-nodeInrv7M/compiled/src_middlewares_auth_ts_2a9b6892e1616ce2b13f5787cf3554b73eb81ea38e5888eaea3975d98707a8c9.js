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
exports.ensureAuthViaQuery = exports.ensureAuth = void 0;
const jwtService_1 = require("../services/jwtService");
const userService_1 = require("../services/userService");
function ensureAuth(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return res.status(401).json({ message: "Não autorizado: nenhum Token fornecido." });
    }
    const token = authorizationHeader.replace(/Bearer /, "");
    jwtService_1.jwtService.verifyToken(token, (err, decoded) => __awaiter(this, void 0, void 0, function* () {
        if (err || typeof decoded === "undefined") {
            return res.status(401).json({ message: "Não autorizado: Token inválido." });
        }
        const user = yield userService_1.userService.findByEmail(decoded.email);
        req.user = user;
        next();
    }));
}
exports.ensureAuth = ensureAuth;
function ensureAuthViaQuery(req, res, next) {
    const { token } = req.query;
    if (!token) {
        return res.status(401).json({ message: "Não autorizado: nenhum Token fornecido." });
    }
    if (typeof token !== "string") {
        return res.status(400).json({ message: "O parâmetro token deve ser do tipo string" });
    }
    jwtService_1.jwtService.verifyToken(token, (err, decoded) => __awaiter(this, void 0, void 0, function* () {
        if (err || typeof decoded === "undefined") {
            return res.status(401).json({ message: "Não autorizado: Token inválido." });
        }
        const user = yield userService_1.userService.findByEmail(decoded.email);
        req.user = user;
        next();
    }));
}
exports.ensureAuthViaQuery = ensureAuthViaQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL21pZGRsZXdhcmVzL2F1dGgudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9taWRkbGV3YXJlcy9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFRdEQsU0FBZ0IsVUFBVSxDQUFDLEdBQXlCLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3JGLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEQsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsQ0FBQyxDQUFDO0tBQ3JGO0lBQ0QsTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV6RCx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDbkQsSUFBSSxHQUFHLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3pDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSx5QkFBVyxDQUFDLFdBQVcsQ0FBRSxPQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUM7QUFmRCxnQ0FlQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEdBQXlCLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzdGLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBRTVCLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLENBQUMsQ0FBQztLQUNyRjtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZGO0lBRUQsdUJBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ25ELElBQUksR0FBRyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUN6QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztTQUM3RTtRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxXQUFXLENBQUUsT0FBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDO0FBcEJELGdEQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBqd3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2p3dFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSnd0UGF5bG9hZCB9IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgVXNlckluc3RhbmNlIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhlbnRpY2F0ZWRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgdXNlcj86IFVzZXJJbnN0YW5jZSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBdXRoKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gIGNvbnN0IGF1dGhvcml6YXRpb25IZWFkZXIgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gIGlmICghYXV0aG9yaXphdGlvbkhlYWRlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOw6NvIGF1dG9yaXphZG86IG5lbmh1bSBUb2tlbiBmb3JuZWNpZG8uXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbkhlYWRlci5yZXBsYWNlKC9CZWFyZXIgLywgXCJcIik7XHJcblxyXG4gIGp3dFNlcnZpY2UudmVyaWZ5VG9rZW4odG9rZW4sIGFzeW5jIChlcnIsIGRlY29kZWQpID0+IHtcclxuICAgIGlmIChlcnIgfHwgdHlwZW9mIGRlY29kZWQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOw6NvIGF1dG9yaXphZG86IFRva2VuIGludsOhbGlkby5cIiB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyU2VydmljZS5maW5kQnlFbWFpbCgoZGVjb2RlZCBhcyBKd3RQYXlsb2FkKS5lbWFpbCk7XHJcbiAgICByZXEudXNlciA9IHVzZXI7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBdXRoVmlhUXVlcnkocmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk7Do28gYXV0b3JpemFkbzogbmVuaHVtIFRva2VuIGZvcm5lY2lkby5cIiB9KTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdG9rZW4gIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiTyBwYXLDom1ldHJvIHRva2VuIGRldmUgc2VyIGRvIHRpcG8gc3RyaW5nXCIgfSk7XHJcbiAgfVxyXG5cclxuICBqd3RTZXJ2aWNlLnZlcmlmeVRva2VuKHRva2VuLCBhc3luYyAoZXJyLCBkZWNvZGVkKSA9PiB7XHJcbiAgICBpZiAoZXJyIHx8IHR5cGVvZiBkZWNvZGVkID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTsOjbyBhdXRvcml6YWRvOiBUb2tlbiBpbnbDoWxpZG8uXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKChkZWNvZGVkIGFzIEp3dFBheWxvYWQpLmVtYWlsKTtcclxuICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgIG5leHQoKTtcclxuICB9KTtcclxufVxyXG4iXX0=