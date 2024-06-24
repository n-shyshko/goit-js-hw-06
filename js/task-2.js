class Storage {
    #items;
    constructor(items) {
      this.#items = items;
    }
    getItems() {
      return this.#items;
    }
    addItem(item) {
      this.#items.push(item);
    }
    removeItem(itemToRemove) {

    const indexToDelete = this.#items.indexOf(itemToRemove);

    if (indexToDelete !== -1) {
      this.#items.splice(indexToDelete, 1);
    }
  }
}
    


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]