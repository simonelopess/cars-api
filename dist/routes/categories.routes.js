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
    var categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return response
            .status(400)
            .json({ error: "Category already exists! " });
    }
    categoriesRepository.create({ name: name, description: description });
    return response.status(201).send();
});
categoriesRoutes.get("/", function (request, response) {
    var all = categoriesRepository.list();
    return response.status(200).json(all);
});
