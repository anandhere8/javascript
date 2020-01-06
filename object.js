let car = {
    name : 'Maruti' ,
    topSpeeed : 200,
    run : ()=>{
        console.log(`Car is running`);
    }
}

// This is a constructor.

function generalCar(givenName,givenSpeed){
this.name = givenName;
this.topSpeeed = givenSpeed;
this.run = function(){
    console.log(` ${this.name} is running and its speed is ${this.topSpeeed}`);
    }
}

car1 = new generalCar('Anand',190);
car1 = new generalCar('Amit',150);
car2 = new generalCar('Gajju',199);
console.log(car2.run());