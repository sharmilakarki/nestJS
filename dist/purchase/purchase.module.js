"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../config/database.module");
const purchase_controller_1 = require("./purchase.controller");
const purchase_service_1 = require("./purchase.service");
const purchase_providers_1 = require("./purchase.providers");
const common_1 = require("@nestjs/common");
const items_service_1 = require("../items/items.service");
const items_providers_1 = require("../items/items.providers");
let PurchaseModule = class PurchaseModule {
};
PurchaseModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule,],
        controllers: [purchase_controller_1.PurchaseController],
        providers: [purchase_service_1.PurchaseService, ...purchase_providers_1.purchaseProviders, items_service_1.ItemsService, ...items_providers_1.itemsProviders],
    })
], PurchaseModule);
exports.PurchaseModule = PurchaseModule;
//# sourceMappingURL=purchase.module.js.map