let car = {
    name : 'Maruti' ,
    topSpeeed : 200,
    run : function(){
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
console.log(car1.run());