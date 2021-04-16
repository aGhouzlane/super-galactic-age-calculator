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
    expect(galacticAge.findAgeExpectancy()).toEqual(40);
  });
  test('Should return an age Expectancy case age range 20 - 50  and eatGoodFood, exercise, haveFun, and getEnoughSleep', () => {
    let galacticAge = new GalacticAge(32, true, true, true, true);
    expect(galacticAge.findAgeExpectancy()).toEqual(35);
  });
  test('Should return an age Expectancy case age range 20 - 50  and not(eatGoodFood, exercise, haveFun, and getEnoughSleep)', () => {
    let galacticAge = new GalacticAge(41, false, false, false, false);
    expect(galacticAge.findAgeExpectancy()).toEqual(15);
  });
  test('Should return an age Expectancy case age range 50 - 80  and eatGoodFood, exercise, haveFun, and getEnoughSleep', () => {
    let galacticAge = new GalacticAge(67, true, true, true, true);
    expect(galacticAge.findAgeExpectancy()).toEqual(9);
  });
  test('Should return an past year lived if age > 80 (beyond average)', () => {
    let galacticAge = new GalacticAge(99);
    expect(galacticAge.findAgeExpectancy()).toEqual(99);
  });
  test('Should return number of years left to live In Mercury', () => {
    let galacticAge = new GalacticAge(41, false, false, false, false);
    expect(galacticAge.findYearsLeftToLiveInMercury()).toEqual(62.5);
  });
  test('Should return number of years left to live In Venus', () => {
    let galacticAge = new GalacticAge(8, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInVenus()).toEqual(96.7741935483871);
  });
  test('Should return number of years left to live In Mars', () => {
    let galacticAge = new GalacticAge(32, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInMars()).toEqual(18.617021276595747);
  });
  test('Should return number of years left to live In Jupiter', () => {
    let galacticAge = new GalacticAge(24, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInJupiter()).toEqual(2.9510961214165263);
  });
});

