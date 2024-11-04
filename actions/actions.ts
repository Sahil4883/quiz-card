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
    revalidatePath("/test");

}
export async function getTodos(id:string){
    try {
        const todos = await prisma.todo.findMany({
            where:{
                user_id:id
            }
        })
        return todos
    } catch (error) {
        console.error(error)
    }
}
export async function deleteTodo(id:string){
    try {
        await prisma.todo.delete({
            where:{
                id: Number(id)
            }
        })
    } catch (error) {
        console.error(error)
    }
}