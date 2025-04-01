import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config"
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ScheduleModule.forRoot(),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }