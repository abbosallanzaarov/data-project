import { Comments, Projects } from "@prisma/client";

async function findAll(): Promise<Projects[]> {
    return []
}

async function findOne(id: number): Promise<Projects> {
    return undefined
}

async function addComment(id: number, comment: Comments) {
}

async function create(project: Projects) {
}

async function remove(id: number) {
}