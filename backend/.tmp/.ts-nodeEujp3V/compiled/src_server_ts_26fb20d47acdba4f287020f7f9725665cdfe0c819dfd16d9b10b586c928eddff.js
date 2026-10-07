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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const adminjs_1 = require("./adminjs");
const database_1 = require("./database");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(adminjs_1.adminJs.options.rootPath, adminjs_1.adminJsRouter);
app.use(routes_1.router);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.authenticate();
        console.log("Database connected successfully!");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    console.log(`Server is running on port: ${PORT}`);
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZlci50cyIsInNvdXJjZXMiOlsiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsdUNBQW1EO0FBQ25ELHlDQUF1QztBQUN2QyxxQ0FBa0M7QUFFbEMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLHVCQUFhLENBQUMsQ0FBQztBQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxDQUFDO0FBRWhCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUV0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFTLEVBQUU7SUFDMUIsSUFBSTtRQUNGLE1BQU0sb0JBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDakQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUQ7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcclxuaW1wb3J0IHsgYWRtaW5KcywgYWRtaW5Kc1JvdXRlciB9IGZyb20gXCIuL2FkbWluanNcIjtcclxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4vZGF0YWJhc2VcIjtcclxuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWNcIikpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShhZG1pbkpzLm9wdGlvbnMucm9vdFBhdGgsIGFkbWluSnNSb3V0ZXIpO1xyXG5hcHAudXNlKHJvdXRlcik7XHJcblxyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAxO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseSFcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0OiAke1BPUlR9YCk7XHJcbn0pO1xyXG4iXX0=