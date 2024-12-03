const prisma = require("../../../config/prisma");
const boom = require('@hapi/boom');

class UserService {
    async create(data) {
        const { email, password } = data;

        const existUser = await prisma.users.findFirst({
            where: {
                email: data.email,
            }
        });
        if(existUser) throw new boom.conflict('Email ya registrado');

        const createUser = await prisma.users.create({
            data: {
                email,
                password,
            }
        });
        
        return {...data}
    }

    async update(data) {

    }

    async erase(id) {

    }
}

module.exports = UserService;