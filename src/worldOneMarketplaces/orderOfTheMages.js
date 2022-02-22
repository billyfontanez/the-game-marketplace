import Marketplace from "../klass/marketplaceClass"
import renderMarketplaceMenu from "../klass/marketplaceClass"

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
