import { ADD, DELETE_TODO } from "../ActionsTypes";
import { list } from "../../Components/Datalist";

const initialState={list
    // !long method 
    // Task:[  {title:"The Witcher",id:Math.random()},
    //         {title:"Assassin's Creed",id:Math.random()},
    //         {title:"John Wick 2",id:Math.random()},
    //         {title:"Joker",id:Math.random()},
    //         {title:"300",id:Math.random()},
    //         {title:"Spider-Man",id:Math.random()},
    //         {title:"Uncharted",id:Math.random()},
    //         {title:"Witch",id:Math.random()},
    //         {title:"Scream",id:Math.random()}
    // ]
}

export const ReducerToDo = (state=initialState,action) => {
    let {type,payload}=action;
    switch (type) {
        case ADD:
            return {...state,list:[...state.list,payload]};
    
        case DELETE_TODO:
            return{...state,list:state.list.filter((el)=>el.id!==payload)};

        default:
            return state;
    }
}
