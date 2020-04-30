import {MySqlDB,SqliteDB} from "../modules/db";


class User{
    username:string | undefined;
    password:string | undefined;
    age:number | undefined;
}

var userModel = new MySqlDB<User>();


export {User,userModel}