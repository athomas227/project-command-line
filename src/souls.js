const fs = require("fs");
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const souls = require("../data/souls.json");
const shoppingCart = require("../data/shoppingCart.json")

function generateSouls() {
    const bossSouls = [
      "Soul of Boreal Valley Vordt",
      "Soul of the Rotted Greatwood",
      "Soul of a Crystal Sage",
      "Soul of the Blood of the Wolf",
      "Soul of Rosaria",
      "Soul of the Deacons of the Deep",
      "Soul of High Lord Wolnir",
      "Soul of the Old Demon King",
      "Soul of a Demon",
      "Soul of Pontiff Sulyvahn",
      "Soul of Yhorm the Giant",
      "Soul of Aldrich",
      "Soul of the Dancer",
      "Soul of Dragonslayer Armour",
      "Soul of Consumed Oceiros",
      "Soul of Champion Gundyr",
      "Soul of the Twin Princes",
      "Soul of the Nameless King",
      "Soul of a Stray Demon",
      "Soul of the Lords",
      "Soul of Sister Friede",
      "Soul of the Demon Prince",
      "Soul of Darkeater Midir",
      "Soul of Slave Knight Gael"
    ];
  
    return bossSouls[
      Math.floor(Math.random() * bossSouls.length)
    ]
  }

// Function to generate a random number within a range.
function getRandomNum(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

// Function to add a new soul to the list of souls.
function addSoul() {
    const newSoul = {
        soul: generateSouls(),
        priceInSouls: getRandomNum(100000, 900000),
        soulsGainedIfConsumed: getRandomNum(2000, 20000),
        id: nanoid(2),
        inStock: getRandomNum(1, 10),
    }
    souls.push(newSoul);
    fs.writeFileSync("./data/souls.json", JSON.stringify(souls, null, 2));
    return newSoul;
}

// Function to get all available souls.
function getAllSouls() {
    return souls;
}

// Function to get soul details by ID.
function getSoulByID(id) {
    return souls.find(soul => soul.id === id) || null;
}

// Function to update the details of a soul by ID.
function updateSoul(id, updatedSoul) {
    const existingSoul = getSoulByID(id);
    if (existingSoul) {
        const index = souls.findIndex(soul => soul.id === id);
        souls[index] = {
            ...existingSoul,
            ...updatedSoul
        };
        fs.writeFileSync("./data/souls.json", JSON.stringify(souls, null, 2));
        return souls[index];
    }
    return null;
}

// Function to remove a soul by ID.
function removeSoul(id) {
    const index = souls.findIndex(soul => soul.id === id);
    if (index !== -1) {
        souls.splice(index, 1);
        fs.writeFileSync("./data/souls.json", JSON.stringify(souls, null, 2));
    }
}
  
// Function to add a soul to the shopping cart.
function addToCart(soulId, quantity) {
    const soul = getSoulByID(soulId);
    if (soul) {
        const cartItem = shoppingCart.find(item => item.id === soulId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            shoppingCart.push({
                id: soulId,
                soul: soul.soul,
                priceInSouls: soul.priceInSouls,
                quantity: quantity
            });
            fs.writeFileSync("./data/shoppingCart.json", JSON.stringify(shoppingCart, null, 2));
        }
    }
}

// Function to view the contents of the shopping cart.
function viewCart() {
    return shoppingCart;
}

// Function to calculate the total price of items in the shopping cart.
function calculateCartTotal() {
    let total = 0;

    for (const item of shoppingCart) {
        total += item.priceInSouls * item.quantity;
    }

    return total;
}

// Function to calculate the total price of a specific item in the cart.
function calculateCartItemTotal(soulId) {
    const cartItem = shoppingCart.find(item => item.id === soulId);

    if (cartItem) {
        return cartItem.priceInSouls * cartItem.quantity;
    }
    return 0;
}

// Function to cancel the shopping cart.
function cancelCart() {
    shoppingCart.splice(0, shoppingCart.length);
    fs.writeFileSync("./data/shoppingCart.json", JSON.stringify(shoppingCart, null, 2));
    return shoppingCart;
    
}

  module.exports = {
    addSoul,
    getAllSouls,
    getSoulByID,
    updateSoul,
    removeSoul,
    generateSouls,
    getRandomNum,
    addToCart,
    viewCart,
    calculateCartTotal,
    calculateCartItemTotal,
    cancelCart,
  }