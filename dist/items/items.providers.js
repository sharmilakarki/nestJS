"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_entity_1 = require("../items/item.entity");
exports.itemsProviders = [
    {
        provide: 'ITEMS_REPOSITORY',
        useValue: item_entity_1.Item,
    },
];
//# sourceMappingURL=items.providers.js.map