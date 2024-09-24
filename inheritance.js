
class Laptop{
    constructor(ram, processor, generation){
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

   
}

class Dell extends Laptop{
    constuctor (ram, processor, generation, modelName, price){
        super(ram, processor, generation);
        this.modelName= modelName;
        this.price = price;
    }

    displayMessage(){
        console.log(
            `Laptop Spec:: Ram ${this.ran} - Processor${this.processor} - ${this.generation} Gen - ModelName ${this.modelName} - Price ${this.price}`
        );
    }
}

const dell = new Dell("8GB", "intel", "i5", "Dell Latitude", "45000");
dell.displayMessage();

