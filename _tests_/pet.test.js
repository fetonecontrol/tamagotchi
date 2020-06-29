import { Pet, Game } from './../src/Pet.js';

describe('Pet', () => {

  beforeEach(function() {
    chuchu = new Pet ("Chuchu");
    chuchu.setHunger();
  });  

  test('should correctly create a pet object with a name and happy and health meters', () => {
    expect(chuchu.name).toEqual("Chuchu");
    expect(chuchu.happy).toEqual(20);
    expect(chuchu.health).toEqual(20);
  })
  
  test('should have 0 health after 20 seconds', function(){
    jest.advanceTimersByTime(20001);
    expect(chuchu.health).toEqual(0);
  })
});

describe('Game', () => {

  test('Game constructor function should create an empty array to store pets', () => {
    const chuchu = new Pet("Chuchu")
    const game = new Game();
    game.addPet(chuchu);
    expect(game.tamIndex).toEqual([chuchu]);
  })
});
