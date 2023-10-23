"use server";

import prisma from "../../prisma/client";

export async function getAllJobs() {
    // getting all jobs from the database
    const jobs = await prisma.job.findMany({
        select: {
            id: true,
            title: true,
            domain: true,
            location: true,
            salaryCompensation: true,
            company: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                },
            },
        },
    });

    return jobs;
}
