"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const items_controller_1 = require("./items/items.controller");
const items_service_1 = require("./items/items.service");
const items_module_1 = require("./items/items.module");
const items_providers_1 = require("./items/items.providers");
const purchase_controller_1 = require("./purchase/purchase.controller");
const purchase_service_1 = require("./purchase/purchase.service");
const purchase_providers_1 = require("./purchase/purchase.providers");
const purchase_module_1 = require("./purchase/purchase.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [items_module_1.ItemsModule, purchase_module_1.PurchaseModule],
        controllers: [app_controller_1.AppController, items_controller_1.ItemsController, purchase_controller_1.PurchaseController],
        providers: [app_service_1.AppService, items_service_1.ItemsService, ...items_providers_1.itemsProviders, purchase_service_1.PurchaseService, ...purchase_providers_1.purchaseProviders],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map