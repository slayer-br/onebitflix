"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsResources = void 0;
const models_1 = require("../../models");
const category_1 = require("./category");
const course_1 = require("./course");
const episode_1 = require("./episode");
const user_1 = require("./user");
exports.adminJsResources = [
    {
        resource: models_1.Category,
        options: category_1.categoryResourceOptions,
    },
    {
        resource: models_1.Course,
        options: course_1.courseResourceOptions,
        features: course_1.courseResourceFeatures,
    },
    {
        resource: models_1.Episode,
        options: episode_1.episodeResourceOptions,
        features: episode_1.episodeResourceFeatures,
    },
    {
        resource: models_1.User,
        options: user_1.userResourceOptions
    }
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzovVXNlcnMvY2FzaWx2YS9Eb2N1bWVudHMvT25lQml0Q29kZS9vbmViaXRmbGl4L2JhY2tlbmQvc3JjL2FkbWluanMvcmVzb3VyY2VzL2luZGV4LnRzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9jYXNpbHZhL0RvY3VtZW50cy9PbmVCaXRDb2RlL29uZWJpdGZsaXgvYmFja2VuZC9zcmMvYWRtaW5qcy9yZXNvdXJjZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQStEO0FBQy9ELHlDQUFxRDtBQUNyRCxxQ0FBeUU7QUFDekUsdUNBQTRFO0FBQzVFLGlDQUE2QztBQUVoQyxRQUFBLGdCQUFnQixHQUEwQjtJQUNyRDtRQUNFLFFBQVEsRUFBRSxpQkFBUTtRQUNsQixPQUFPLEVBQUUsa0NBQXVCO0tBQ2pDO0lBQ0Q7UUFDRSxRQUFRLEVBQUUsZUFBTTtRQUNoQixPQUFPLEVBQUUsOEJBQXFCO1FBQzlCLFFBQVEsRUFBRSwrQkFBc0I7S0FDakM7SUFDRDtRQUNFLFFBQVEsRUFBRSxnQkFBTztRQUNqQixPQUFPLEVBQUUsZ0NBQXNCO1FBQy9CLFFBQVEsRUFBRSxpQ0FBdUI7S0FDbEM7SUFDRDtRQUNFLFFBQVEsRUFBRSxhQUFJO1FBQ2QsT0FBTyxFQUFFLDBCQUFtQjtLQUM3QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvdXJjZVdpdGhPcHRpb25zIH0gZnJvbSBcImFkbWluanNcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnksIENvdXJzZSwgRXBpc29kZSwgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgY2F0ZWdvcnlSZXNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgeyBjb3Vyc2VSZXNvdXJjZU9wdGlvbnMsIGNvdXJzZVJlc291cmNlRmVhdHVyZXMgfSBmcm9tIFwiLi9jb3Vyc2VcIjtcclxuaW1wb3J0IHsgZXBpc29kZVJlc291cmNlT3B0aW9ucywgZXBpc29kZVJlc291cmNlRmVhdHVyZXMgfSBmcm9tIFwiLi9lcGlzb2RlXCI7XHJcbmltcG9ydCB7IHVzZXJSZXNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRtaW5Kc1Jlc291cmNlczogUmVzb3VyY2VXaXRoT3B0aW9uc1tdID0gW1xyXG4gIHtcclxuICAgIHJlc291cmNlOiBDYXRlZ29yeSxcclxuICAgIG9wdGlvbnM6IGNhdGVnb3J5UmVzb3VyY2VPcHRpb25zLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmVzb3VyY2U6IENvdXJzZSxcclxuICAgIG9wdGlvbnM6IGNvdXJzZVJlc291cmNlT3B0aW9ucyxcclxuICAgIGZlYXR1cmVzOiBjb3Vyc2VSZXNvdXJjZUZlYXR1cmVzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmVzb3VyY2U6IEVwaXNvZGUsXHJcbiAgICBvcHRpb25zOiBlcGlzb2RlUmVzb3VyY2VPcHRpb25zLFxyXG4gICAgZmVhdHVyZXM6IGVwaXNvZGVSZXNvdXJjZUZlYXR1cmVzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmVzb3VyY2U6IFVzZXIsXHJcbiAgICBvcHRpb25zOiB1c2VyUmVzb3VyY2VPcHRpb25zXHJcbiAgfVxyXG5dO1xyXG4iXX0=