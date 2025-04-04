import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config"
import { ScheduleModule } from "@nestjs/schedule";
import { PrismaServer } from "src/prisma/prisma.server";
import { CreateAccountController } from "../controllers/create-account-controller";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ScheduleModule.forRoot(),
    ],
    controllers: [CreateAccountController],
    providers: [PrismaServer],
})
export class AppModule { }