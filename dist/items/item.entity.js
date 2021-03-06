"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const purchase_service_1 = require("../purchase/purchase.service");
const purchase_entity_1 = require("../purchase/purchase.entity");
let Item = class Item extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Item.prototype, "quantity", void 0);
__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    }),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => purchase_entity_1.Purchase),
    __metadata("design:type", Array)
], Item.prototype, "purchase", void 0);
Item = __decorate([
    sequelize_typescript_1.Table
], Item);
exports.Item = Item;
//# sourceMappingURL=item.entity.js.map