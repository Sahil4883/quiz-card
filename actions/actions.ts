"use server"
import prisma from "@/lib/db";
import { error } from "console";
import { revalidatePath } from "next/cache";


export async function createTodo(formData:FormData){
    try {
        await prisma.todo.create({
            data:{
                todo:formData.get('todo') as string,
                user_id:formData.get('user_id') as string

            }
        }
    )
    } catch (error) {
        console.error(error)
        
    }
    revalidatePath("/exp11");

}
