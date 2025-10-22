"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoute = void 0;
const express_1 = require("express");
const auth_routes_1 = require("../module/auth/auth.routes");
const project_routes_1 = require("../module/projects/project.routes");
const blog_routes_1 = require("../module/blogs/blog.routes");
const router = (0, express_1.Router)();
const Routes = [
    {
        url: "/auth",
        path: auth_routes_1.AuthRoute,
    },
    {
        url: "/projects",
        path: project_routes_1.ProjectRoutes,
    },
    {
        url: "/blogs",
        path: blog_routes_1.BlogRoutes
    }
];
Routes.forEach((route) => router.use(route.url, route.path));
exports.RootRoute = router;
