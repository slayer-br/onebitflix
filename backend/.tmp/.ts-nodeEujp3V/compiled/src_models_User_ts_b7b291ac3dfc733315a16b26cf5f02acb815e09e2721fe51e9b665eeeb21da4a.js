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
exports.User = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.User = database_1.sequelize.define("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    birth: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
    email: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true,
        },
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    role: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    hooks: {
        beforeSave: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.isNewRecord || user.changed("password")) {
                user.password = yield bcrypt_1.default.hash(user.password.toString(), 10);
            }
        }),
    },
});
exports.User.prototype.checkPassword = function (password, callbackfn) {
    bcrypt_1.default.compare(password, this.password, (err, isSame) => {
        if (err) {
            callbackfn(err, false);
        }
        else {
            callbackfn(err, isSame);
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL21vZGVscy9Vc2VyLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvbW9kZWxzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXdDO0FBQ3hDLHlDQUF1RDtBQUN2RCxvREFBNEI7QUF1QmYsUUFBQSxJQUFJLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQ2xDLE9BQU8sRUFDUDtJQUNFLEVBQUUsRUFBRTtRQUNGLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87S0FDeEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN2QjtJQUNELEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDdkI7SUFDRCxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDdkI7SUFDRCxJQUFJLEVBQUU7UUFDSixTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0NBQ0YsRUFDRDtJQUNFLEtBQUssRUFBRTtRQUNMLFVBQVUsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQTtLQUNGO0NBQ0YsQ0FDRixDQUFDO0FBRUQsWUFBSSxDQUFDLFNBQTBCLENBQUMsYUFBYSxHQUFHLFVBRS9DLFFBQWdCLEVBQ2hCLFVBQTZEO0lBRTdELGdCQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3RELElBQUksR0FBRyxFQUFFO1lBQ1AsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IERhdGFUeXBlcywgTW9kZWwsIE9wdGlvbmFsIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuaW1wb3J0IHsgRXBpc29kZUluc3RhbmNlIH0gZnJvbSBcIi4vRXBpc29kZVwiO1xyXG5cclxudHlwZSBDaGVja1Bhc3N3b3JkQ2FsbGJhY2sgPSAoZXJyPzogRXJyb3IsIGlzU2FtZT86IGJvb2xlYW4pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBwaG9uZTogc3RyaW5nO1xyXG4gIGJpcnRoOiBEYXRlO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByb2xlOiBcImFkbWluXCIgfCBcInVzZXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ3JlYXRpb25BdHRyaWJ1dGVzIGV4dGVuZHMgT3B0aW9uYWw8VXNlciwgXCJpZFwiPiB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5zdGFuY2UgZXh0ZW5kcyBNb2RlbDxVc2VyLCBVc2VyQ3JlYXRpb25BdHRyaWJ1dGVzPiwgVXNlciB7XHJcbiAgRXBpc29kZXM/OiBFcGlzb2RlSW5zdGFuY2VbXTtcclxuICBjaGVja1Bhc3N3b3JkOiAocGFzc3dvcmQ6IHN0cmluZywgY2FsbGJhY2tmbjogQ2hlY2tQYXNzd29yZENhbGxiYWNrKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmU8VXNlckluc3RhbmNlLCBVc2VyPihcclxuICBcInVzZXJzXCIsXHJcbiAge1xyXG4gICAgaWQ6IHtcclxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcclxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXHJcbiAgICB9LFxyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICB9LFxyXG4gICAgbGFzdE5hbWU6IHtcclxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcclxuICAgIH0sXHJcbiAgICBwaG9uZToge1xyXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgfSxcclxuICAgIGJpcnRoOiB7XHJcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcclxuICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICBpc0VtYWlsOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgIGJlZm9yZVNhdmU6IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuaXNOZXdSZWNvcmQgfHwgdXNlci5jaGFuZ2VkKFwicGFzc3dvcmRcIikpIHtcclxuICAgICAgICAgIHVzZXIucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLnRvU3RyaW5nKCksIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbik7XHJcblxyXG4oVXNlci5wcm90b3R5cGUgYXMgVXNlckluc3RhbmNlKS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKFxyXG4gIHRoaXM6IFVzZXJJbnN0YW5jZSxcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGNhbGxiYWNrZm46IChlcnI6IEVycm9yIHwgdW5kZWZpbmVkLCBpc1NhbWU6IGJvb2xlYW4pID0+IHZvaWQsXHJcbikge1xyXG4gIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkLCAoZXJyLCBpc1NhbWUpID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgY2FsbGJhY2tmbihlcnIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrZm4oZXJyLCBpc1NhbWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iXX0=