'use server'

import prisma from '../../../prisma/client'

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

    if (!jobs) {
        throw new Error('Jobs not found');
    }

    return jobs;
}

export async function getCategories() {
    // from the jobs table, get the count of domains and group them by domain
    const categories = await prisma.job.groupBy({
        by: ['domain'],
        _count: {
            domain: true,
        },
    });

    // map the categories to the format we need
    let result = [
        {
            title: 'All',
            count: categories.reduce(
                (acc, curr) => acc + curr._count.domain,
                0
            ),
        },
    ];

    if (!categories) {
        throw new Error('Categories not found');
    }

    return result.concat(
        categories.map((category) => {
            return {
                title: category.domain,
                count: category._count.domain,
            };
        })
    );
}

export async function getCategoryJobs(title: string) {
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
            domain: title,
        },
    });

    if (!jobs) {
        throw new Error('Job not found');
    }

    return jobs;
}

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
    if (!job) {
        throw new Error('Job not found');
    }

    return job;
}
