
export function addTask(text, price){
    return {
        type:'ADD_TASK',
                text,
                price,
          
            }
    }



export function deleteTask(store,price){
    return {
        type:'DELETE_TASK',
        store,
        price
    }
}