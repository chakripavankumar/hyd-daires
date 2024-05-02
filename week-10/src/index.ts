import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();
 
 async function insertUser( email: string, frsitName: string,  lastName: string, password:string ){
  const res=  await prisma.user.create({
     data: {
        email,
        frsitName,
        lastName,
        password
     }
 })
}