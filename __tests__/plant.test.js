//rename thisfile to match [jsfilename].test.js
import { hydrate } from '../src/js/plant.js';
import { feed } from '../src/js/plant.js';

//Describe tests here:
describe('hydrate', () => {

  test('should increment the plants hydrate property by 1 ', () => {
    const plant = { water: 0 };
    const result = hydrate(plant);
    expect(result.water).toEqual(1);
  });

  test('should not mutate state of plant ', () => {
    const plant = { water: 0 };
    expect(plant.water).toBe(0);
  });

  test('should increment the plants soil property by 1 ', () => {
    const plant = { soil: 0 };
    const result = feed(plant);
    expect(result.soil).toEqual(1);
  });

  test('should not mutate state of plant ', () => {
    const plant = { soil: 0 };
    expect(plant.soil).toBe(0);
  });

});