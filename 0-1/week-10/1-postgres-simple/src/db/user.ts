import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        const insertQuery= 
        "INSERT INTO users (username , passwoed , name) VALUES ($1 , $2, $3) RETURNING *";
        const Values=[ username, password, name];
        const result= await client.query(insertQuery,Values);
         return result.rows[0];
    } catch(err){
          console.error("Error creating user :"  , err);
          
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        const getQuery = "SELECT * FROM users WHERE id= $=1";
        const values=[userId];
        const result= await client.query( getQuery,values);
        return result.rows[0];
    }catch(err){
        console.error(" error during fetching  user :" , err);
        
    }
    
}
