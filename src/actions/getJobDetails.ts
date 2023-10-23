"use server";

import prisma from "../../prisma/client";

export async function getJobDetails(jobId: number) {
    const job = await prisma.job.findUnique({
        where: {
            id: jobId,
        },
        select: {
            id: true,
            title: true,
            domain: true,
            location: true,
            salaryCompensation: true,
            yearsOfExperience: true,
            description: true,
            dayInLife: true,
            compensation: true,
            rolesResponsibilities: true,
            skillset: true,
            companyId: true,
            company: true,
        },
    });

    return job;
}
