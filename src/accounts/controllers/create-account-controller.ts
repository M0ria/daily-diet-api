import { Controller, Post } from "@nestjs/common";
import { PrismaServer } from "src/prisma/prisma.server";


@Controller('/accounts')
export class CreateAccountController {
    constructor(private prisma: PrismaServer) { }

    @Post()
    async handle() {
        const name = 'Maria teste';
        const email = 'mariateste@gmail.com';
        const role = 'user';
        const isActive = true;

        if (!this.prisma?.user) {
            throw new Error("Prisma user client is not initialized.");
        }

        await this.prisma.user.create({
            data: {
                name,
                email,
                role,
                isActive,
                lastVisit: new Date()
            }
        });
    }
}