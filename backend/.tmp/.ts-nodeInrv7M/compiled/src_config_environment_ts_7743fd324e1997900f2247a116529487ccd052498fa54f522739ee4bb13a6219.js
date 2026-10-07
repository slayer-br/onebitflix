"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_KEY = exports.ADMINJS_COOKIE_PASSWORD = exports.DATABASE_URL = void 0;
const env = __importStar(require("env-var"));
exports.DATABASE_URL = env.get("DATABASE_URL").required().asString();
exports.ADMINJS_COOKIE_PASSWORD = env.get("ADMINJS_COOKIE_PASSWORD").required().asString();
exports.JWT_KEY = env.get("JWT_KEY").required().asString();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbmZpZy9lbnZpcm9ubWVudC50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2NvbmZpZy9lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUVsQixRQUFBLFlBQVksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRTdELFFBQUEsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRW5GLFFBQUEsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlbnYgZnJvbSBcImVudi12YXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkwgPSBlbnYuZ2V0KFwiREFUQUJBU0VfVVJMXCIpLnJlcXVpcmVkKCkuYXNTdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRE1JTkpTX0NPT0tJRV9QQVNTV09SRCA9IGVudi5nZXQoXCJBRE1JTkpTX0NPT0tJRV9QQVNTV09SRFwiKS5yZXF1aXJlZCgpLmFzU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY29uc3QgSldUX0tFWSA9IGVudi5nZXQoXCJKV1RfS0VZXCIpLnJlcXVpcmVkKCkuYXNTdHJpbmcoKTtcclxuIl19