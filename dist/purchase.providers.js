"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_entity_1 = require("../purchase/purchase.entity");
exports.purchaseProviders = [
    {
        provide: 'PURCHASE_REPOSITORY',
        useValue: purchase_entity_1.Purchase,
    },
];
//# sourceMappingURL=purchase.providers.js.map