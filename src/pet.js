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

  setDepression() {
    setInterval(() => {
      this.happy--;
    }, 3000);
  }

  checkDead(){
    if (this.health > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.health += 2;
  }
}; 