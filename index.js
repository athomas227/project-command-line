const chalk = require("chalk");
const {
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
    cancelCart
} = require('./src/souls');

const red = chalk.red.bold
const command = process.argv[2];

switch (command) {
    case 'add':
        const newSoul = addSoul();
        console.log('Added new soul:', newSoul);
        break;

    case 'list':
        const allSouls = getAllSouls();
        console.log('All souls:', allSouls);
        break;

    case 'details':
        const soulId = process.argv[3];
        if (!soulId) {
            console.log(red('Please provide a soul ID.'));
        } else {
            const soulDetails = getSoulByID(soulId);
            if (soulDetails) {
                console.log('Soul details:', soulDetails);
            } else {
                console.log(red('Soul not found.'));
            }
        }
        break;

    case 'delete':
        const soulIdToDelete = process.argv[3];
        if (!soulIdToDelete) {
            console.log(red('Please provide a soul ID to delete.'));
        } else {
            removeSoul(soulIdToDelete);
            console.log(red('Soul deleted.'));
        }
        break;

    case 'update':
        const soulIdToUpdate = process.argv[3];
        const updatedSoul = JSON.parse(process.argv[4]);
        if (!soulIdToUpdate) {
            console.log(red('Please provide a soul ID to update.'));
        } else {
            const updatedSoulResult = updateSoul(soulIdToUpdate, updatedSoul);
            if (updatedSoulResult) {
                console.log('Soul updated:', updatedSoulResult);
            } else {
                console.log(red('Soul not found.'));
            }
        }
        break;

    case 'addToCart':
        const soulIdToAddToCart = process.argv[3];
        const quantityToAddToCart = parseInt(process.argv[4] || 1);
        if (!soulIdToAddToCart) {
            console.log(red('Please provide a soul ID to add to the cart.'));
        } else {
            addToCart(soulIdToAddToCart, quantityToAddToCart);
            console.log(red('Soul added to cart.'));
        }
        break;

    case 'viewCart':
        const cartContents = viewCart();
        console.log('Cart:', cartContents);
        console.log('Total Price:', calculateCartTotal());
        break;

    case 'cancelCart':
        cancelCart();
        console.log(red('Cart emptied.'));
        break;

    default:
        console.log(red('Invalid command. Please use one of the following commands: add, list, details, delete, update, addToCart, viewCart, cancelCart'));
        break;
}