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

// Define a red color for error messages.
const red = chalk.red.bold

// Get the command from the command-line arguments.
const command = process.argv[2];

// Switch statement to handle different commands.
switch (command) {
    // 'add' command: Add a new soul.
    case 'add':
        const newSoul = addSoul();
        console.log('Added new soul:', newSoul);
        break;

    // 'list' command: List all available souls.    
    case 'list':
        const allSouls = getAllSouls();
        console.log('All souls:', allSouls);
        break;

    // 'details' command: Get details of a specific soul.    
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

    // 'delete' command: Delete a specific soul.    
    case 'delete':
        const soulIdToDelete = process.argv[3];
        if (!soulIdToDelete) {
            console.log(red('Please provide a soul ID to delete.'));
        } else {
            removeSoul(soulIdToDelete);
            console.log(red('Soul deleted.'));
        }
        break;

    // 'update' command: Update the details of a specific soul.    
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

    // 'addToCart' command: Add a soul to the shopping cart.    
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

    // 'viewCart' command: View the contents of the shopping cart.   
    case 'viewCart':
        const cartContents = viewCart();
        console.log('Cart:', cartContents);
        console.log('Total Price:', calculateCartTotal());
        break;

    // 'cancelCart' command: Empty the shopping cart.    
    case 'cancelCart':
        cancelCart();
        console.log(red('Cart emptied.'));
        break;

    // Default case: Handle invalid commands.    
    default:
        console.log(red('Invalid command. Please use one of the following commands: add, list, details, delete, update, addToCart, viewCart, cancelCart'));
        break;
}