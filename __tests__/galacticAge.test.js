import { TestScheduler } from 'jest';
import GalacticAge from '../src/js/galacticAge.js';

describe('GlacticAge', () => {
  test('Should create a new object of Type GalacticAge with parameter age', () => {
    let galacticAge = new GalacticAge(40);
    expect(galacticAge.age).toEqual(30);
  });
});