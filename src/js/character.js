export default class Character {
  constructor(type) {
    this.level = 1;
    this.health = 100;
    this.stamina = 100;
    this.type = assignType(type);
  }

  //NOTE: DEFAULT: astromorph
  assignType(type) {
    if (type === 'witcher') {
      return 'witcher';
    } else if (type === 'robot') {
      return 'robot';
    } else if (type === 'witch') {
      return 'witch';
    } else if (type === 'wizard') {
      return 'wizard';
    } else {
      return 'astromorph';
    }
  }
}