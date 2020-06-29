import { Pet, Game } from './../src/Pet.js';

describe('Pet', () => {
  jest.useFakeTimers();
  let chuchu;
  let bingo;

  beforeEach(function() {
    chuchu = new Pet ("Chuchu", 20, 20);
    bingo = new Pet ("Bingo", 20, 4);
    chuchu.setHunger();
    chuchu.setDepression();
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

  test('should console log when health runs to 0', function(){
    let dead = chuchu.checkDead();
    expect(dead).toEqual(false);
  })

  test('should increment this.health by 2 when called', () => {
    chuchu.feed();
    expect(chuchu.health).toEqual(22);
  })

  test('should have 0 happy after 60 seconds', function(){
    jest.advanceTimersByTime(60001);
    expect(chuchu.happy).toEqual(0);
  })

  test('should not allow the pet to be fed if its happiness is under 5', function() {
    bingo.feed();
    expect(bingo.health).toEqual(20);
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
