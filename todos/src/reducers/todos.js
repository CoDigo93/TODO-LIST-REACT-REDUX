const INITIAL_STATE = {
   data:[]
  
};

export default function todos(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TODO':
            return {data:[...state.data, { 
                id:Math.random(), 
                text:action.text, 
                payment:action.price 
            }] 
            
        }

        default:
            return state;
    }
}