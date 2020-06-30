export class Game{
  constructor(){
    this.tamIndex = [];
  }
  addPet(pet){
    this.tamIndex.push(pet);
  }
};

export class Pet{
  constructor(name, health, happy, sick){
  this.name = name;
  this.health = 100;
  this.happy = 50;
  this.sick = 0;
  }
  
  
  checkDead() {
    if (this.health > 0) {
      return false;
    } else {
      return true;
    }
  }
  
  feed() {
    if (this.happy < 25 || this.health > 90) {
      if (this.happy < 25) {
      console.log("Your Pet is depressed!");
      } else if (this.health > 90) {
        console.log("Your pet is too full to eat!")
      }  
    } else {
      this.health += 10;
    }
  }
  
  bellyRub() {
    this.happy += 5;
  }

  medicineGet() {
    this.sick -= 1;
  }

// Begin interval logic

  setTimers() {
    setInterval(() => {
      this.health--;
      this.checkDead();
    }, 1000);
    setInterval(() => {
      this.happy--;
    }, 3000);
    setInterval(() => {
      if (this.sick > 3){
        this.happy--;
      }
      this.sick += 1;
    }, 15000);
    setTimeout(() => {
      this.health = 0;
    }, 1200000);
  }
};
//   setHunger() {
//     setInterval(() => {
//       this.health--;
//     }, 1000);
//   }

//   setDepression() {
//     setInterval(() => {
//       this.happy--;
//     }, 3000);
//   }

//   setPoop() {
//     setInterval(() => {
//     if (this.sick > 6){
//       this.happy--;
//     }
//     this.sick += 2;
//   }, 1000);
// }

  // lifeSpan() {
  //   setTimeout(() => {
  //     this.health = 0;
  //   }, 1200000);
  // }

// Begin pet methods
