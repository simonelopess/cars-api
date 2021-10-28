"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var CategoriesRepository_1 = require("../repositories/CategoriesRepository");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
categoriesRoutes.post("/", function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    categoriesRepository.create({ name: name, description: description });
    return response.status(201).send();
});
