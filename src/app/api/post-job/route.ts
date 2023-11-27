// named imports
import { NextResponse } from "next/server";

// default imports
import prisma from "../../../../prisma/client";

type JobPost = {
    title: string;
    location: string;
    domain: string;
    salaryCompensation: string;
    yearsOfExperience: string;
    description: string;
    dayInLife: string;
    rolesResponsibilities: string;
    skillset: string;
    companyId: number;
    compensation: string;
};

const handler = async (req: Request) => {
    const data: JobPost = await req.json();

    const job = await prisma.job.create({ data });

    if (job) {
        return new NextResponse(
            JSON.stringify({
                message: "Created job post successfully",
            }),
            { status: 200 }
        );
    } else {
        return new NextResponse(
            JSON.stringify({
                message: "Error creating job post",
            }),
            { status: 500 }
        );
    }
};

export { handler as POST };
