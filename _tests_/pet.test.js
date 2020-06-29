import { Pet, Game } from './../src/Pet.js';

describe('Pet', () => {

  test('should correctly create a pet object with a name and happy and health meters', () => {
    const chuchu = new Pet("Chuchu");
    expect(chuchu.name).toEqual("Chuchu");
    expect(chuchu.happy).toEqual(20);
    expect(chuchu.health).toEqual(20);
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
