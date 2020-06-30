export class Game{
  constructor(){
    this.tamIndex = [];
  }
  addPet(pet){
    this.tamIndex.push(pet);
  }
};

export class Pet{
  constructor(name, health, happy){
  this.name = name;
  this.health = health;
  this.happy = happy;
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

  checkDead() {
    if (this.health > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (this.happy < 5) {
      console.log("Your Pet is depressed!");
    } else {
      this.health += 2;
    }
  }

  bellyRub() {
    this.happy += 5;
  }
}; 