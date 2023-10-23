"use server";

import prisma from "../../prisma/client";

export async function getCategories() {
    // from the jobs table, get the count of domains and group them by domain
    const categories = await prisma.job.groupBy({
        by: ["domain"],
        _count: {
            domain: true,
        },
    });

    // map the categories to the format we need
    let result = [
        {
            title: "All",
            count: categories.reduce(
                (acc, curr) => acc + curr._count.domain,
                0
            ),
        },
    ];

    return result.concat(
        categories.map((category) => {
            return {
                title: category.domain,
                count: category._count.domain,
            };
        })
    );
}
