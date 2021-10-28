"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var Category_1 = require("../model/Category");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var categories = [];
categoriesRoutes.post("/", function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var category = new Category_1.Category();
    //instancia um novo objeto
    Object.assign(category, {
        name: name,
        description: description,
        created_at: new Date(),
    });
    categories.push(category);
    return response.status(201).json({ category: category });
});
