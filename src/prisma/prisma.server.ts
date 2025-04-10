import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class PrismaServer extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super()
    }

    onModuleInit() {
        return this.$connect
    }

    onModuleDestroy() {
        return this.$disconnect
    }
} 
