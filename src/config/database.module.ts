import { Module } from '@nestjs/common';
import { databaseProviders } from '../config/database.providers';

//exporting providers to make them accessible for rest part of the application

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {

}