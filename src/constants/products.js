import ElderWand from 'assets/images/products/elder-wand.png'
import Cloak from 'assets/images/products/cloak.png'
import ResurrectionStone from 'assets/images/products/resurrection-stone.png'

const products = [
    {
        id: 'wand',
        name: 'Elder Wand',
        image: ElderWand,
    },
    {
        id: 'cloak',
        name: 'Invisible Cloak',
        image: Cloak,
    },
    {
        id: 'stone',
        name: 'Resurrection Stone',
        image: ResurrectionStone,
    },
]

const productImages = {
    wand: ElderWand,
    cloak: Cloak,
    stone: ResurrectionStone,
}

export { products, productImages }
