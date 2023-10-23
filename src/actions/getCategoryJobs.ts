"use server";

import prisma from "../../prisma/client";

export async function getCategoryJobs(title: string) {
    const jobs = await prisma.job.findMany({
        where: {
            domain: title,
        },
    });

    return jobs;
}
