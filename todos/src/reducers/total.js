const INITIAL_STATE = 0;
   


export default function total(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TODO':
            return parseFloat(state) + parseFloat(action.price)
        
        default:
            return parseFloat(state);

        
    }
}