'use server'

import prisma from '../../../prisma/client'

export async function addCompanyProfile(data: any) {
  const company = await prisma.company.create({
      data: data,
  })

  if (!company) {
    throw new Error('Company not found')
  }

  return company
}

export async function getCompanies() {
    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
        },
    })
  
    if (!companies) {
        throw new Error('Companies not found')
    }
    return companies
}


export async function getCompanyCategories() {

  const companyJobs = await prisma.company.groupBy({
      by: ['name'],
      _count: {
          name: true,
      },
  })

  let result = [
        {
            title: 'All',
            count: companyJobs.reduce(
                (acc, curr) => acc + curr._count.name,
                0
            ),
        },
  ]

  if (!companyJobs) {
      throw new Error('Categories not found')
  }
  
  return result.concat(
      companyJobs.map((company) => {
          return {
              title: company.name,
              count: company._count.name,
          }
      })
  )
}

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
  })

  if (!jobs) {
    throw new Error('Job not found')
  }

  return jobs
}

