 interface User{
     id: number;
     name: string;
     email: string;
     createdAt:Date;

 }

 type UserProfile= Pick<User, 'name' | 'email'>

 const displayUserProfile= ( user:UserProfile)=>{
    console.log(`name: ${user.name} , email : ${user.email}`);
    
 }
 console.log(displayUserProfile);
 