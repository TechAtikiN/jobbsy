"use server";

import prisma from "../../prisma/client";

export async function getCompanyCategories() {

    // from the jobs table, get the count of comapnies and and the number of jobs they have
    const companyJobs = await prisma.company.groupBy({
        by: ["name"],
        _count: {
            name: true,
        },
    });

    // map the categories to the format we need
    let result = [
        {
            title: "All",
            count: companyJobs.reduce(
                (acc, curr) => acc + curr._count.name,
                0
            ),
        },
    ];

    console.log(companyJobs);

    return result.concat(
        companyJobs.map((company) => {
            return {
                title: company.name,
                count: company._count.name,
            };
        })
    );

}
