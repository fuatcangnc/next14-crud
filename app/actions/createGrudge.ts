'use server'

import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"


export async function addGrunge(formData: any) {
    const name = formData.get('grudge')

    try {
        if (!name) throw new Error('Grudge need')
        await sql`INSERT INTO grundes (NAME) VALUES (${name})`
        revalidatePath('/')
    } catch (error) {
        console.log(error)
    }
    return {
        status: 200
    }
}