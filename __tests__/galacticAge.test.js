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
  test('Should return the life expectancy in Mercury', () => {
    let galacticAge = new GalacticAge(41, false, false, false, false);
    expect(galacticAge.findLifeExpectancyInMercury()).toEqual(62.5);
  });
  test('Should return the life expectancy in Venus', () => {
    let galacticAge = new GalacticAge(8, true, true, true, true);
    expect(galacticAge.findLifeExpectancyInVenus()).toEqual(96.7741935483871);
  });
  test('Should return the life expectancy in Mars', () => {
    let galacticAge = new GalacticAge(32, true, true, true, true);
    expect(galacticAge.findLifeExpectancyInMars()).toEqual(18.617021276595747);
  });
  test('Should return the life expectancy in Jupiter', () => {
    let galacticAge = new GalacticAge(24, true, true, true, true);
    expect(galacticAge.findLifeExpectancyInJupiter()).toEqual(2.9510961214165263);
  });
  test('Should return number of years left to live in Mercury', () => {
    let galacticAge = new GalacticAge(24, true, true, true, true);
    expect(galacticAge.findYearsLeftToliveInMercury()).toEqual(45.83333333333334);
  });
  test('Should return number of years left to live in Venus', () => {
    let galacticAge = new GalacticAge(8, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInVenus()).toEqual(83.87096774193549);
  });
  test('Should return number of years left to live in Mars', () => {
    let galacticAge = new GalacticAge(32, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInMars()).toEqual(1.595744680851066);
  });
  test('Should return number of years left to live in Jupiter', () => {
    let galacticAge = new GalacticAge(24, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInJupiter()).toEqual(0.9274873524451941);
  });
  test('Should return age passed expectancy life in Mercury if expectancy life > average', () => {
    let galacticAge = new GalacticAge(100, true, true, true, true);
    expect(galacticAge.findYearsLeftToliveInMercury()).toEqual(41.666666666666686);
  });
  test('Should return age passed expectancy life in Venus if expectancy life > average', () => {
    let galacticAge = new GalacticAge(81, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInVenus()).toEqual(14.51612903225805);
  });
  test('Should return age passed expectancy life in Mars if expectancy life > average', () => {
    let galacticAge = new GalacticAge(121, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInMars()).toEqual(16.489361702127667);
  });
  test('Should return age passed expectancy life in Jupiter if expectancy life > average', () => {
    let galacticAge = new GalacticAge(110, true, true, true, true);
    expect(galacticAge.findYearsLeftToLiveInJupiter()).toEqual(1.6863406408094432);
  });
});

