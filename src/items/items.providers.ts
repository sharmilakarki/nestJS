import {Item} from '../items/item.entity';

export const itemsProviders= [
    {
        provide: 'ITEMS_REPOSITORY',
        useValue: Item,
    },
];