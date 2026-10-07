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
exports.authenticationOptions = void 0;
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const environment_1 = require("../config/environment");
exports.authenticationOptions = {
    authenticate: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({ where: { email } });
        if (user && user.role === "admin") {
            const matched = yield bcrypt_1.default.compare(password, user.password);
            if (matched) {
                return user;
            }
        }
        return false;
    }),
    cookiePassword: environment_1.ADMINJS_COOKIE_PASSWORD,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvYXV0aGVudGljYXRpb24udHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9hZG1pbmpzL2F1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFpQztBQUNqQyxvREFBNEI7QUFDNUIsdURBQWdFO0FBQ25ELFFBQUEscUJBQXFCLEdBQTBCO0lBQzFELFlBQVksRUFBRSxDQUFPLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtRQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDakMsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlELElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFBO0lBQ0QsY0FBYyxFQUFFLHFDQUF1QjtDQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aGVudGljYXRpb25PcHRpb25zIH0gZnJvbSBcIkBhZG1pbmpzL2V4cHJlc3NcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCB7IEFETUlOSlNfQ09PS0lFX1BBU1NXT1JEIH0gZnJvbSBcIi4uL2NvbmZpZy9lbnZpcm9ubWVudFwiO1xyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpb25PcHRpb25zOiBBdXRoZW50aWNhdGlvbk9wdGlvbnMgPSB7XHJcbiAgYXV0aGVudGljYXRlOiBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcclxuXHJcbiAgICBpZiAodXNlciAmJiB1c2VyLnJvbGUgPT09IFwiYWRtaW5cIikge1xyXG4gICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgaWYgKG1hdGNoZWQpIHtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcbiAgY29va2llUGFzc3dvcmQ6IEFETUlOSlNfQ09PS0lFX1BBU1NXT1JELFxyXG59O1xyXG4iXX0=