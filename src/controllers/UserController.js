import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class User {
    static async getUser(req, res){
        try {
            const user = await prisma.User.findUnique({
                where: {
                    email: req.params.email
                }
            })
            res.status(200).json(user)

        } catch (error) {
            res.send(500)
            console.error(error)
        }
    }

    static async postUser(req, res){
        const {name, email, age, password} = req.body

        try {
            const user = await prisma.User.create({
                data:{
                    name: name,
                    email: email,
                    age: Number(age),
                    password: password
                }
                
            })
            console.log(user)

            return res.status(201).json(user) 

        } catch (error) {
            console.error(error)
           return res.send(500)
        }
    }
}

export default User