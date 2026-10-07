"use strict";
// src/models/Like.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
exports.Like = database_1.sequelize.define("Like", {
    userId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "users",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "courses",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL21vZGVscy9MaWtlLnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvbW9kZWxzL0xpa2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFxQjs7O0FBRXJCLHlDQUE2QztBQUM3QywwQ0FBd0M7QUFTM0IsUUFBQSxJQUFJLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQXFCLE1BQU0sRUFBRTtJQUMvRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLElBQUk7U0FDVjtRQUNELFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxTQUFTO0tBQ3BCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsU0FBUztZQUNoQixHQUFHLEVBQUUsSUFBSTtTQUNWO1FBQ0QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvbW9kZWxzL0xpa2UudHNcclxuXHJcbmltcG9ydCB7IERhdGFUeXBlcywgTW9kZWwgfSBmcm9tIFwic2VxdWVsaXplXCI7XHJcbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi9kYXRhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWtlIHtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICBjb3Vyc2VJZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpa2VJbnN0YW5jZSBleHRlbmRzIE1vZGVsPExpa2U+LCBMaWtlIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTGlrZSA9IHNlcXVlbGl6ZS5kZWZpbmU8TGlrZUluc3RhbmNlLCBMaWtlPihcIkxpa2VcIiwge1xyXG4gIHVzZXJJZDoge1xyXG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgIHByaW1hcnlLZXk6IHRydWUsXHJcbiAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcclxuICAgIHJlZmVyZW5jZXM6IHtcclxuICAgICAgbW9kZWw6IFwidXNlcnNcIixcclxuICAgICAga2V5OiBcImlkXCIsXHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6IFwiQ0FTQ0FERVwiLFxyXG4gICAgb25EZWxldGU6IFwiQ0FTQ0FERVwiLFxyXG4gIH0sXHJcbiAgY291cnNlSWQ6IHtcclxuICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICBwcmltYXJ5S2V5OiB0cnVlLFxyXG4gICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXHJcbiAgICByZWZlcmVuY2VzOiB7XHJcbiAgICAgIG1vZGVsOiBcImNvdXJzZXNcIixcclxuICAgICAga2V5OiBcImlkXCIsXHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGU6IFwiQ0FTQ0FERVwiLFxyXG4gICAgb25EZWxldGU6IFwiQ0FTQ0FERVwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iXX0=