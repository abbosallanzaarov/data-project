import { Authors, Projects } from "@prisma/client";
import client from './client'

// CRUD
// Create Read Update Delete
async function findAll(): Promise<Authors[]> {
    let authors = await client.authors.findMany()
    return authors
}

type AuthorsWithProjects = Authors & { projects: Projects[] }

async function findOne(id: number): Promise<AuthorsWithProjects | null> {
    let author = await client.authors.findUnique({
        where: {
            id: id
        },
        include: {
            projects: true
        }
    })

    return author
}

async function create(author: Authors) {
    let newAuthor = await client.authors.create({
        data: {
            name: author.name,
            surname: author.surname,
            avatar: author.avatar
        }
    })

    return newAuthor
}

async function remove(id: number) {
    await client.authors.delete({
        where: {
            id: id
        }
    })
}

export default {
    findAll,
    findOne,
    create,
    remove
}