
// 定义接口
interface DBI<T>{
    add(info: T):boolean;
    update(info: T,id: number):boolean;
    delete(id: number):boolean;
    get(id: number):any[];
}


// 定义操作MySql数据库的类
class MySqlDB<T>{

    constructor(){
        console.log('建立数据库的链接');
    }

    add(info: T):boolean {
        console.log(info);
        console.log('数据添加成功');
        return true;
    }

    update(info: T,id: number):boolean {
        console.log('更新数据成功');
        return true;
    }

    delete(id: number):boolean {
        console.log('删除数据成功');
        return true;
    }

    get(id: number):any[] {
        return [
            {
                'title':'I am a handsome boy',
                'name': 'My name is fan'
            },
            {
                'title':'I am a handsome boy',
                'name': 'My name is fan'
            }
        ];
    }

}

// 定义操作Sqlite数据库的类
class SqliteDB<T>{

    constructor(){
        console.log('建立数据库的链接');
    }

    add(info: T):boolean {
        console.log(info);
        console.log('数据添加成功');
        return true;
    }

    update(info: T,id: number):boolean {
        console.log('更新数据成功');
        return true;
    }

    delete(id: number):boolean {
        console.log('删除数据成功');
        return true;
    }

    get(id: number):any[] {
        return [
            {
                'title':'I am a handsome boy',
                'name': 'My name is fan'
            },
            {
                'title':'I am a handsome boy',
                'name': 'My name is fan'
            }
        ];
    }
}

export {MySqlDB,SqliteDB}



