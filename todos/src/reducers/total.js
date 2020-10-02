const INITIAL_STATE = 0;
   


export default function total(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TASK':
            return parseFloat(state) + parseFloat(action.price)

        case 'DELETE_TASK':
            return parseFloat(state) - parseFloat(action.price) 
        
        default:
            return parseFloat(state);

        
    }
}