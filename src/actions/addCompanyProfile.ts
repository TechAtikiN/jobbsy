"use server";

import prisma from "../../prisma/client";

export async function addCompanyProfile(data: any) {
    console.log(data);
    const company = await prisma.company.create({
        data: data,
    });
    return company;
}
