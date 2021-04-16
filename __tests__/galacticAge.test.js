import { TestScheduler } from 'jest';
import GalacticAge from '../src/js/galacticAge.js';

describe('GlacticAge', () => {
  test('Should create a new object of Type GalacticAge with parameter age', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.age).toEqual(40);
  });
  test('Should return a conversion from Earth year to Mercury year', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.toMercuryYear()).toEqual(166.66666666666669);
  });
  test('Should return a conversion from Earth year to Mars year', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.toMarsYear()).toEqual(21.27659574468085);
  });
  test('Should return a conversion from Earth year to Jupiter year', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.toJupiterYear()).toEqual(3.3726812816188874);
  });
  test('Should add parameters to GalacticAge class: eatGoodFood, exercise, haveFun, getEnoughSleep', () => {
    let galacticAge = new GalacticAge(40, true, true, true, true);
    expect(galacticAge.eatGoodFood).toBe(true);
    expect(galacticAge.exercise).toBe(true);
    expect(galacticAge.haveFun).toBe(true);
    expect(galacticAge.getEnoughSleep).toBe(true);
  });
  test('Should return an age Expectancy case age range 0 - 20  and eatGoodFood, exercise, haveFun, and getEnoughSleep', () => {
    let galacticAge = new GalacticAge(9, true, true, true, true);
    expect(galacticAge.findAgeExpectancy()).toEqual(60);
  });
  test('Should return an age Expectancy case age range 0 - 20  and not(eatGoodFood, exercise, haveFun, and getEnoughSleep)', () => {
    let galacticAge = new GalacticAge(19, false, false, false, false);
    expect(galacticAge.findAgeExpectancy()).toEqual(30);
  });

});

