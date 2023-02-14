// @ts-ignore
import prisma from 'src/utils/database'

export default async function cleaningJobs() {
    const today=new Date()
    const result =await prisma.job.deleteMany({
        where: {
            deadline:{
                lt: today
            }
        },
    })
}