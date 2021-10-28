"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
var Category_1 = require("../model/Category");
var CategoriesRepository = /** @class */ (function () {
    function CategoriesRepository() {
        this.categories = [];
    }
    CategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new Category_1.Category();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date(),
        });
        this.categories.push(category);
    };
    return CategoriesRepository;
}());
exports.CategoriesRepository = CategoriesRepository;
