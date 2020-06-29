export class Game{
  constructor(){
    this.tamIndex = [];
  }
  addPet(pet){
    this.tamIndex.push(pet);
  }
};

export class Pet{
  constructor(name){
  this.name = name;
  this.health = 20;
  this.happy = 20;
  }

  setHunger() {
    setInterval(() => {
      this.health--;
    }, 1000);
  }
  feed() {
    this.health += 2;
  }
}; 