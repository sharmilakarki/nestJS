import { Purchase } from "./purchase.entity";
import { PurchaseDto } from "./dto/purchase.dto";
import { Item } from "src/items/item.entity";
export declare class PurchaseService {
    private readonly purchaseRepository;
    private readonly itemService;
    constructor(purchaseRepository: typeof Purchase, itemService: any);
    findAll(): Promise<Purchase[]>;
    readItem(id: number): Promise<Item>;
    create(purchaseDto: PurchaseDto): Promise<Purchase>;
}
