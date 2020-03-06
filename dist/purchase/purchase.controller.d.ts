import { Purchase } from "./purchase.entity";
import { PurchaseService } from "./purchase.service";
import { PurchaseDto } from "./dto/purchase.dto";
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    findAll(): Promise<Purchase[]>;
    create(dto: PurchaseDto): Promise<Purchase>;
}
