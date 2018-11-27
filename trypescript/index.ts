//hello
//this is practicer

class vehicle {
name: string;
price: number;

constructor(name: string, price: number){
    this.name = name;
    this.price = price;
}
   
}

class car extends vehicle {
    color:string;
    wheels:number;
   
    constructor(name:string,price:number,color:string, wheels:number){
        super (name, price);
        this.color = color;
        this.wheels = wheels;
    };

}

let mycar = new car ("Opeal" , 50000 ,"red" , 4);

let main = document.getElementById("main");
main.innerHTML = JSON.stringify(mycar);

