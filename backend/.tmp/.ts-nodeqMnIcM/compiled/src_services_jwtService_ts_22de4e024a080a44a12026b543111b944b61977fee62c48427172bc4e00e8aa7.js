"use strict";
// src/services/jwtService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../config/environment");
exports.jwtService = {
    signToken: (payload, expiration) => {
        return jsonwebtoken_1.default.sign(payload, environment_1.JWT_KEY, { expiresIn: expiration });
    },
    verifyToken: (token, callbackfn) => {
        jsonwebtoken_1.default.verify(token, environment_1.JWT_KEY, callbackfn);
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZpY2VzL2p3dFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2Nhc2lsdmEvRG9jdW1lbnRzL09uZUJpdENvZGUvb25lYml0ZmxpeC9iYWNrZW5kL3NyYy9zZXJ2aWNlcy9qd3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBNkI7Ozs7OztBQUU3QixnRUFBZ0Q7QUFDaEQsdURBQWdEO0FBRW5DLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLFNBQVMsRUFBRSxDQUFDLE9BQWlDLEVBQUUsVUFBb0MsRUFBRSxFQUFFO1FBQ3JGLE9BQU8sc0JBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHFCQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsV0FBVyxFQUFFLENBQUMsS0FBYSxFQUFFLFVBQThCLEVBQUUsRUFBRTtRQUM3RCxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUscUJBQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zZXJ2aWNlcy9qd3RTZXJ2aWNlLnRzXHJcblxyXG5pbXBvcnQgand0LCB7IFNpZ25PcHRpb25zIH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBKV1RfS0VZIH0gZnJvbSBcIi4uL2NvbmZpZy9lbnZpcm9ubWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGp3dFNlcnZpY2UgPSB7XHJcbiAgc2lnblRva2VuOiAocGF5bG9hZDogc3RyaW5nIHwgb2JqZWN0IHwgQnVmZmVyLCBleHBpcmF0aW9uOiBTaWduT3B0aW9uc1tcImV4cGlyZXNJblwiXSkgPT4ge1xyXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIEpXVF9LRVksIHsgZXhwaXJlc0luOiBleHBpcmF0aW9uIH0pO1xyXG4gIH0sXHJcblxyXG4gIHZlcmlmeVRva2VuOiAodG9rZW46IHN0cmluZywgY2FsbGJhY2tmbjogand0LlZlcmlmeUNhbGxiYWNrKSA9PiB7XHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBKV1RfS0VZLCBjYWxsYmFja2ZuKTtcclxuICB9LFxyXG59O1xyXG4iXX0=