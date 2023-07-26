import Potion from './src/js/potion.js';

describe('newPotion', () => {
  //constructor: return the properties of 'heal' and 'potion'
  test('return the properties of heal and potion', () => {
    const myPotion = new Potion('potion', 'heal');
    expect(myPotion.name).toBe('potion');
    expect(myPotion.effect).toBe('heal');
  });

});


