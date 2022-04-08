import { ADD, DELETE_TODO, } from "./ActionsTypes"

export const add_todo=(item)=>{
    return {
        type:ADD , payload:item
    }
}

export const delete_todo=(id)=>{
    return{
        type:DELETE_TODO , payload:id
    }
}