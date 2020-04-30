import {MySqlDB,SqliteDB} from "../modules/db";


class Article{
    title:string | undefined;
    content:string | undefined;
    time:string | undefined;
}

var articleModel = new MySqlDB<Article>();


export {Article,articleModel}