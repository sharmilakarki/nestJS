import { DatabaseModule } from "src/config/database.module";
import { PurchaseController } from "./purchase.controller";
import { PurchaseService } from "./purchase.service";
import { purchaseProviders } from "./purchase.providers";
import { Module } from "@nestjs/common";
import { ItemsService } from "src/items/items.service";
import { itemsProviders } from "src/items/items.providers";


@Module({
    imports: [DatabaseModule,],
    controllers: [PurchaseController],
    providers: [PurchaseService,...purchaseProviders,ItemsService,...itemsProviders],
  })
  export class PurchaseModule {}