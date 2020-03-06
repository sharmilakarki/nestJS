import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { itemsProviders } from './items/items.providers';
import { PurchaseController } from './purchase/purchase.controller';
import { PurchaseService } from './purchase/purchase.service';
import { purchaseProviders } from './purchase/purchase.providers';
import { PurchaseModule } from './purchase/purchase.module';


@Module({
  imports: [ItemsModule, PurchaseModule],
  controllers: [AppController, ItemsController, PurchaseController],
  providers: [AppService, ItemsService, ...itemsProviders, PurchaseService, ...purchaseProviders],
})
export class AppModule { }
