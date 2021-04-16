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
  test('Should return a conversion from Earth year to Venus year', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.toVenusYear()).toEqual(64);
  });
});