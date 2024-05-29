import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try{
        const insertQuery= 
        "INSERT INTO todos (user_id , title, desciption) VALUES( $1, $2,$3) RETUNING *";
        const values=[ userId, title, description];
        const result= await client.query( insertQuery,values);
        return result.rows[0];
    }catch(err){
        console.error("error in insering  into todo" , err);
        
    }
    
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try{
        const updateQuery= 
        "UPDATE todos SET done = true  WHERE  id=$1 RETURNING *";
        const values= [todoId];
        const result= await client.query(updateQuery, values)
    } catch(err){
        console.error("error in updaing the todos" , err);
        
    }

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        const getQuery= 
        "SELECT * FROM todos WHERE user_id=$1";
        const values=[userId];
        const result= await client.query(getQuery,values);
        return result.rows[0];
    }catch(err){
        console.error(" error while getting todos" , err);
        
    }

}