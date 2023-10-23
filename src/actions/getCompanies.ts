"use server";

import prisma from "../../prisma/client";

export async function getCompanies() {
    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
        },
    });
    return companies;
}
