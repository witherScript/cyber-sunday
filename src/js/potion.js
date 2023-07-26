//item -> {name: 'potion', effect: 'heal', amount: 10}


// [health, str, mana]
export default class Potion {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect; //effect -> health += 20;
  }

  // applyEffect(target) {

  // }

  // const myPotion = new Potion('potion', 'heal');
  // myPotion.name = 'potion'; 
  // myPotion.effect = 'heal';

  //
  ////It should return name and effect with 


  // applyEffect(target) { //target ->
  //   character.health
  //   if (this.effect === "Restores 50 health points") {
  //     if (target.hasOwnProperty("health") && typeOf target.health === "number") {
  //       const healthToRestore = 50;
  //       target.health += healthToRestore;
  //     }
  //   } else if (this.effect === "Increases attack damage by 10") {
  //     if (target.hasOwnProperty("attackPower") && typeOf target.attackPower === "number") {
  //       const powerIncrease = 10;
  //       target.attackPower += powerIncrease;
  //     }
  //   } else if (this.effect === "Restores 25 mana points") {
  //     if (target.hasOwnProperty("mana") && typeOf target.mana === "number") {
  //       const manaRestored = 25;
  //       target.mana += manaRestored;
  //     }
  //   }
  // }

  // addItem(itemObject) { // method to add item to the items class
  //   const { name, effect } = itemObject;
  //   const newItem = new Items(name, effect);
  //   Items.allItems.push(newItem);
  // }
}

// Items.addItem({ name: }) // maybe a different js fil