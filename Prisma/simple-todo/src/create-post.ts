import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient()

async function main(){
  await prisma.post.create({
    data: {
      title: "title of the post",
      content: "adafdajfd",
      author: {
        connect:{
          id: 1
        }
      }
    }
  })
}

main()