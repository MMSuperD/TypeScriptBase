/*
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符

    4.4 静态属性 静态方法
    4.5 抽象类 多态


*/


// 静态属性 静态方法

/*

    function Person(){
        this.run1=function(){

        }
    }
    Person.name='哈哈哈';

    Person.run2=function(){  静态方法


    }
    var p=new Person();

    Person.run2(); 静态方法的调用
*/



/*


        function $(element){

            return new Base(element)
        }

        $.get=function(){

        }

        function Base(element){

            this.element=获取dom节点;


            this.css=function(arr,value){

                this.element.style.arr=value;
            }
        }



        $('#box').css('color','red')


        $.get('url',function(){

        })
*/














    // class Per{
    //     public name:string;
    //     public age:number=20;
    //     //静态属性

    //     static sex="男";
    //     constructor(name:string) {
    //             this.name=name;
    //     }
    //     run(){  /*实例方法*/

    //         alert(`${this.name}在运动`)
    //     }
    //     work(){

    //         alert(`${this.name}在工作`)
    //     }
    //     static print(){  /*静态方法  里面没法直接调用类里面的属性*/

    //         alert('print方法'+Per.sex);
    //     }
    // }

    // // var p=new Per('张三');

    // // p.run();

    // Per.print();

    // alert(Per.sex);






//多态:父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现

//多态属于继承
        /*


                class Animal {

                    name:string;
                    constructor(name:string) {
                        this.name=name;
                    }
                    eat(){   //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
                        console.log('吃的方法')
                    }
                }

                class Dog extends Animal{
                    constructor(name:string){
                        super(name)
                    }
                    eat(){

                        return this.name+'吃粮食'
                    }
                }


                class Cat extends Animal{

                    constructor(name:string){
                        super(name)
                    }

                    eat(){

                        return this.name+'吃老鼠'
                    }
                }

        */



//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。


//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。


// abstract抽象方法只能放在抽象类里面


// 抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法


//标准:

abstract class Animal{

    public name:string;
    constructor(name:string){

        this.name=name;

    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。

    run(){

        console.log('其他方法可以不实现')
    }
}


// var a=new Animal() /*错误的写法*/



class Dog extends Animal{

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    eat(){

        console.log(this.name+'吃粮食')
    }
}

var d=new Dog('小花花');
d.eat();




class Cat extends Animal{

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    run(){


    }
    eat(){

        console.log(this.name+'吃老鼠')
    }

}

var c=new Cat('小花猫');
c.eat();
