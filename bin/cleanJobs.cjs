const { PrismaClient } = require('@prisma/client')
const moment = require('moment')
const prisma = new PrismaClient({
    datasources:{
        db: {
            url: process.env.DATABASE_URL,
        }
    }
})
async function cleaningJobs() {
    //construct today date in format yyyy-mm-dd
    const today=moment().format('YYYY-MM-DD')
    // delete all jobs that are older than today
    const result =await prisma.job.deleteMany({
        where:{
            deadline:{
                lt:today
            }
        }
    })
    console.log(`Deleted ${result.count} jobs`)
}
cleaningJobs();