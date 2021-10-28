"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var categories = [];
categoriesRoutes.post("/categories", function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    categories.push({
        name: name,
        description: description,
    });
    return response.status(201).send();
});
