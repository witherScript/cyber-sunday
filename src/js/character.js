export default class Character {
  constructor(type) {
    this.level = 1;
    this.type = this.assignType(type);

  }

  //**NOTE** DEFAULT: astromorph
  assignType(type) {
    if (type === 'warrior') {
      this.health = 150;
      this.stamina = 100;
      this.attack = 15;
      return 'warrior';
    } else if (type === 'robot') {
      this.health = 175;
      this.stamina = 150;
      this.attack = 10;
      return 'robot';
    } else if (type === 'witch' || type === 'wizard') {
      this.health = 100;
      this.stamina = 100;
      this.mana = 100;
      if (type === 'wizard') {
        return 'wizard';
      } else {
        return 'witch';
      }
    } else {
      this.health = 75;
      this.stamina = 60;
      this.mana = 200;
      return 'astromorph';
    }
  }

  attack() {
    return Math.random() * 20 + 1;
  }

}