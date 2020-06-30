import { Pet, Game } from './../src/Pet.js';

describe('Pet', () => {
  jest.useFakeTimers();
  let chuchu;
  let bingo;

  beforeEach(function() {
    chuchu = new Pet ("Chuchu");
    bingo = new Pet ("Bingo");
    chuchu.setTimers();
  });  

  test('should correctly create a pet object with a name and happy and health meters', () => {
    expect(chuchu.name).toEqual("Chuchu");
    expect(chuchu.happy).toEqual(50);
    expect(chuchu.health).toEqual(100);
  })

  test('should have 0 health after 20 seconds', () => {
    jest.advanceTimersByTime(20001);
    expect(chuchu.health).toEqual(80);
  })

  test('should console log when health runs to 0', () => {
    let dead = chuchu.checkDead();
    expect(dead).toEqual(false);
  })

  test('should increment this.health by 2 when called', () => {
    chuchu.feed();
    expect(chuchu.health).toEqual(100);
  })

  test('should have 0 happy after 60 seconds', () => {
    jest.advanceTimersByTime(60001);
    expect(chuchu.happy).toEqual(30);
  })

  test('should not allow the pet to be fed if its happiness is under 5', () => {
    bingo.feed();
    expect(bingo.health).toEqual(100);
  })

  test('should increase the happiness by 5 points with every belly rub', () => {
    bingo.bellyRub();
    expect(bingo.happy).toEqual(55);
  })

  test('should allow the pet to poop', () => {
    // bingo.setPoop();
    jest.advanceTimersByTime(1001)
    expect(bingo.sick).toEqual(0);
  })  

  test('should make the pet die after a certain period of time regardless of health', () => {
    // chuchu.lifeSpan();
    jest.advanceTimersByTime(1200001);
    expect(chuchu.health).toEqual(0);
  })

  test('should make the happy meter decrease if the sick meter is above 6', () => {
    // chuchu.setPoop();
    jest.advanceTimersByTime(1001);
    expect(chuchu.happy).toEqual(50);
  })

  test('should make the sickness go down by one when medicine is given to the pet', () => {
    jest.advanceTimersByTime(15001);
    chuchu.medicineGet();
    expect(chuchu.sick).toEqual(0);
  })
});

describe('Pet', () => {
  jest.useFakeTimers();
  let chuchu;

  test('if health is above 90, should not allow pet to be fed', () => {
    const chuchu = new Pet ("Chuchu");
    chuchu.feed();
    expect(chuchu.health).toEqual(100);
  })

  test('if happy is under 25, should not allow pet to be fed', () => {
    const chuchu = new Pet ("Chuchu");
    jest.advanceTimersByTime(75000);
    chuchu.feed();
    expect(chuchu.health).toEqual(100);
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
