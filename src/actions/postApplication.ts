"use server";

import prisma from "../../prisma/client";

export async function postApplication(jobId: number, data: any) {
  const application = await prisma.applicant.create({
    data: {
      ...data,
      jobId
    }
  })
  return application
}
