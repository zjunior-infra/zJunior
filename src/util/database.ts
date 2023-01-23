import { PrismaClient } from "@prisma/client/edge"

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: 'prisma://aws-eu-central-1.prisma-data.com/?api_key=rwDm6uidac9UoiBcC3lSnteOjV9CBOGVUfb8vmoXXvwsJ2ArMwZVwuhkBl_HaBW0'
      }
    }
})