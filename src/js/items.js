//item -> {name: 'potion', effect: 'heal', amount: 10}

export default class Items {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect; //effect -> health += 20;
  }

  // const healthPotion = Items.createNewItem("Health Potion", "Restores 50 health points");
  // const strengthElixir = Items.createNewItem("Strength Elixir", "Increases attack damage by 10");
  // const manaElixir = Items.createNewItem("ManaElixir", "Restores 25 mana points");

  static addItem(healthPotion) {
    const { }
  }

  applyEffect(target) { //target -> character.health
    if (this.effect === "Restores 50 health points") {
      if (target.hasOwnProperty("health") && typeOf target.health === "number") {
        const healthToRestore = 50;
        target.health += healthToRestore;
      }
    } else if (this.effect === "Increases attack damage by 10") {
      if (target.hasOwnProperty("attackPower") && typeOf target.attackPower === "number") {
        const powerIncrease = 10;
        target.attackPower += powerIncrease;
      }
    } else if (this.effect === "Restores 25 mana points") {
      if (target.hasOwnProperty("mana") && typeOf target.mana === "number") {
        const manaRestored = 25;
        target.mana += manaRestored;
      }
    }
  }


  // increasAmount(quantity) {
  //   this.amount += quantity;
  // }

  // decreaseAmount(quantity) {
  //   if (this.amount - quantity >= 0) {
  //     this.amount -= quantity;
  //   } else {
  //     this.amount = 0;
  //   }
  // }

  // useItem(itemName) {
  //   const item = this.inventory.find(item => item.name === itemName); //use -> findContact; -> 
  //   if (item) {
  //     this[item.effect](); // apply item effect
  //     item.amount--;
  //     if (item.amount === 0) {
  //       this.dropItem(itemName); //** */
  //     }
  //   }
}