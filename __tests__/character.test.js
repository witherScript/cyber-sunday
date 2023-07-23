import Character from '../src/js/character.js';

describe('Character', () => {

  test('should correctly initialize a level 1 character', () => {

    const myChar = new Character();

    expect(myChar.level).toBe(1);
    expect(myChar.health).toBe(100);
    expect(myChar.stamina).toBe(100);
    expect(myChar.type).toBe('witcher');
  });


});