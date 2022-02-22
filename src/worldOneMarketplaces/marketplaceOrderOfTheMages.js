class Marketplace{
    constructor(weaponsMenu, scrollsMenu, clothingMenu, potionsMenu, cart){
        this.weaponsMenu = weaponsMenu,
        this.scrollsMenu = scrollsMenu,
        this.clothingMenu = clothingMenu,
        this.potionsMenu = potionsMenu,
        this.cart = cart
    };


    renderWeaponsItems = () => {
        console.log(`
        Our Current Weapons are:
        1. ${Object.getOwnPropertyNames(this.weaponsMenu)[0]}: $${Object.values(this.weaponsMenu)[0]}
        2. ${Object.getOwnPropertyNames(this.weaponsMenu)[1]}: $${Object.values(this.weaponsMenu)[1]}
        3. ${Object.getOwnPropertyNames(this.weaponsMenu)[2]}: $${Object.values(this.weaponsMenu)[2]}
        4. ${Object.getOwnPropertyNames(this.weaponsMenu)[3]}: $${Object.values(this.weaponsMenu)[3]}
        `)
    };

    renderScollsItems = () => {
        console.log(`
        Our Current Scrolls are:
        1. ${Object.getOwnPropertyNames(this.scrollsMenu)[0]}: $${Object.values(this.scrollsMenu)[0]}
        2. ${Object.getOwnPropertyNames(this.scrollsMenu)[1]}: $${Object.values(this.scrollsMenu)[1]}
        3. ${Object.getOwnPropertyNames(this.scrollsMenu)[2]}: $${Object.values(this.scrollsMenu)[2]}
        4. ${Object.getOwnPropertyNames(this.scrollsMenu)[3]}: $${Object.values(this.scrollsMenu)[3]}
        `)
    };

    renderClothingItems = () => {
        console.log(`
        Our Current Clothing is:
        1. ${Object.getOwnPropertyNames(this.clothingMenu)[0]}: $${Object.values(this.clothingMenu)[0]}
        2. ${Object.getOwnPropertyNames(this.clothingMenu)[1]}: $${Object.values(this.clothingMenu)[1]}
        3. ${Object.getOwnPropertyNames(this.clothingMenu)[2]}: $${Object.values(this.clothingMenu)[2]}
        4. ${Object.getOwnPropertyNames(this.clothingMenu)[3]}: $${Object.values(this.clothingMenu)[3]}
        `)
    };

    renderPotionsItems = () => {
        console.log(`
        Our Current Potions are: 
        1. ${Object.getOwnPropertyNames(this.potionsMenu)[0]}: $${Object.values(this.potionsMenu)[0]} 
        2. ${Object.getOwnPropertyNames(this.potionsMenu)[1]}: $${Object.values(this.potionsMenu)[1]} 
        3. ${Object.getOwnPropertyNames(this.potionsMenu)[2]}: $${Object.values(this.potionsMenu)[2]}
        4. ${Object.getOwnPropertyNames(this.potionsMenu)[3]}: $${Object.values(this.potionsMenu)[3]}
        `)
    };

    renderMarketplaceMenu = () => {
        console.log(
            'Please Select a Menu by entering the associated Number:\n',
            '1. Weapons\n',
            '2. Scrolls\n',
            '3. Clothing\n',
            '4. Potions\n'
            )
    }
}

let weaponsMenu = {
    'Ax of the Wood Elfs': 10,
    'Dark Sword': 15,
    'Basic Staff': 20,
    'Legendary Katana': 30
}

let scrollsMenu = {
    'Ice Strike': 10,
    'Leporcy': 15,
    'Fireball': 20,
    'Summoning Cerberus': 30
}

let clothingMenu = {
    'Cloth Cap': 10,
    'Boots': 15,
    'Boots with the Fur': 20,
    'Headdress of Athena': 30
}

let potionsMenu = {
    'HP 10': 10,
    'HP 20': 15,
    'HP 30': 20,
    'HP 40': 30
}
const orderOfTheMagesMarketplace = new Marketplace(weaponsMenu,scrollsMenu,clothingMenu,potionsMenu)
orderOfTheMagesMarketplace.renderMarketplaceMenu()




