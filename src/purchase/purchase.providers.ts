import { Purchase } from '../purchase/purchase.entity';

export const purchaseProviders=[
    {
        provide:'PURCHASE_REPOSITORY',
        useValue: Purchase,
    },
]