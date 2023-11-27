import { companies } from '../db'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('start seeding...')

  for (const c of companies) {
    const company = await prisma.company.create({
      data: c
    })
    console.log(`created company: ${company.name}`)
  }
  console.log('seeding finished.')
}

main()
  .then(async () => {
  await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect() 
    process.exit(1)
  })
