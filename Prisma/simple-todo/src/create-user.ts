import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      email: "mamang@gmail.com",
      name: "mamang touthang"
    }
  })
}

main()
  // .then(async () => {
  //   console.log("done with the query")
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })