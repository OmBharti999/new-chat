"use server";

import prisma from "@/prisma";

export const createNewUSer = async (data: any) => {
    return await prisma.user.create({
        data,
    });
};
