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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor(itemsRepository) {
        this.itemsRepository = itemsRepository;
    }
    async findAll() {
        return await this.itemsRepository.findAll();
    }
    async findOne(id) {
        return await this.itemsRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async create(item) {
        const savedItem = new this.itemsRepository(item);
        return await savedItem.save();
    }
    async delete(id) {
        const item = await this.findOne(id);
        return item.destroy();
    }
    async update(dto, id) {
        const item = this.findOne(id);
        (await item).name = dto.name;
        (await item).description = dto.description;
        (await item).quantity = dto.quantity;
        return (await item).save();
    }
    async updateItem(item) {
        return (await item).save();
    }
};
ItemsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ITEMS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map