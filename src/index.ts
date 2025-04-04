

type VehicleStatus = "started" | "stopped";

class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: VehicleStatus = "stopped";

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}


const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase()); 

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1; 
console.log(myBuick.wheels);
console.log(myBuick.model); 




class NCycle<T> {
  make: T | T[];
  model: T | T[];
  wheels: number;
  status: VehicleStatus = "stopped";

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  print(index: number = 0): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (
      Array.isArray(this.make) &&
      Array.isArray(this.model) &&
      this.make[index] !== undefined &&
      this.model[index] !== undefined
    ) {
      console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      const minLength = Math.min(this.make.length, this.model.length);
      for (let i = 0; i < minLength; i++) {
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
      }
    } else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      this.print();
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}



const singleNCycle = new NCycle("Yamaha", "MT-07", 2);
singleNCycle.print(); 
singleNCycle.printAll(); 

const multiNCycle = new NCycle(["Kawasaki", "Suzuki"], ["Ninja", "GSX-R"], 2);
multiNCycle.print(1); 
multiNCycle.printAll(); 

const badNCycle = new NCycle(["Honda"], "CBR", 2);
badNCycle.print();



// class Vehicle {
//     status = "stopped";
  
//     constructor(make, model, wheels) {
//       this.make = make;
//       this.model = model;
//       this.wheels = wheels;
//     }
//     start() {
//       this.status = "started";
//     }
//     stop() {
//       this.status = "stopped";
//     }
//   }
  
//   class Car extends Vehicle {
//     constructor(make, model) {
//       super(make, model, "four");
//     }
//   }
  
//   class MotorCycle extends Vehicle {
//     constructor(make, model) {
//       super(make, model, 2);
//     }
//   }
  
//   function printStatus(vehicle) {
//     if (vehicle.status === "running") {
//       console.log("The vehicle is running.");
//     } else {
//       console.log("The vehicle is stopped.");
//     }
//   }
  
//   const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
//   myHarley.start();
//   printStatus(myHarley);
//   console.log(myHarley.make.toUppercase());
  
//   const myBuick = new Car("Buick", "Regal");
//   myBuick.wheels = myBuick.wheels - 1;
//   console.log(myBuick.wheels);
//   console.log(myBuick.mdl);
  