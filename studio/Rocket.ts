import{ Cargo } from "./Cargo";
import{ Astronaut } from "./Astronaut";
import{ Payload } from "./Payload";

export class Rocket {
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] = [];
    astronauts : Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum : number = 0;
        for(let i : number = 0; i<items.length; i++) {
            sum += items[i].massKg;            
        }
        return sum;    
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true;
        }
        else {
            return false;
        }
    }
}