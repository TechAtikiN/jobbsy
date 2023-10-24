"use server";

import prisma from "../../prisma/client";

export async function getCompanyCategoryJobs(companyName: string) {
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
    where: {
      company: {
        name: companyName,
      }
    },
  });

  return jobs;
}
