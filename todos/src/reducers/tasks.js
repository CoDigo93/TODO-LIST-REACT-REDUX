const INITIAL_STATE = {
   data:[]
  
};

export default function tasks(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TASK':
            return {data:[...state.data, { 
                id:Math.random(), 
                text:action.text, 
                payment:action.price 
            }] 
        }
        case 'DELETE_TASK':
            return {
                data:action.store,
                price:action.price    
            }

        default:
            return state;
    }
}