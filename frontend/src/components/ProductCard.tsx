import { useEffect } from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ProductCardProps {
    id : number,
    image: string,
    name: string,
    description: string,
    price: number
}

const Product: ProductCardProps[] = [
    {
        id: 1,
        image: "Cheeseburger.png",
        name: "Cheeseburger",
        description: "Enjoy the cheesy deliciousness of a McDonald's Cheeseburger! Our simple, classic cheeseburger begins with a 100% pure beef burger patty seasoned with just a pinch of salt and pepper.",
        price: 40000
    },
    {
        id : 2,
        image: "BigMac.jfif",
        name: "Big Mac",
        description: "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun.",
        price: 50000
    },
    {
        id : 3,
        image: "ChickenMcNuggets.jfif",
        name: "Chicken McNuggets",
        description: "Enjoy tender, juicy Chicken McNuggets® with your favorite dipping sauces. Chicken McNuggets® are made with all white meat chicken and no artificial colors, flavors, or preservatives. ",
        price: 20000
    },
    {
        id : 4,
        image: "EggMcMuffin.jfif",
        name: "Egg McMuffin",
        description: "Satisfy your McDonald's breakfast cravings with our Egg McMuffin® breakfast sandwich—it’s an excellent source of protein and oh so delicious.",
        price: 30000
    },
    {
        id : 5,
        image: "FilletOFish.jfif",
        name: "Fillet-O-Fish",
        description: "Dive into our wild-caught Filet-O-Fish, a classic McDonald's fish sandwich! Our fish sandwich recipe features a crispy fish filet patty on melty American cheese and is topped with creamy McDonald’s tartar sauce, all served on a soft, steamed bun.",
        price: 30000
    },
    {
        id : 6,
        image: "McCrispy.jfif",
        name: "McCripsy",
        description: "The McDonald’s McCrispy™ is a southern-style fried chicken sandwich that's crispy, juicy and tender perfection. It’s topped with crinkle-cut pickles and served on a toasted, buttered potato roll. The McCrispy™ has 470 calories.",
        price: 40000
    }
];

export default function ProductCard() {
    const productlist = Product.map(({id, image, name, description, price}) => {
        const { getItemQuantity, increaseItemQuantity, removeItem } = useShoppingCart();
        
        const [isAdded, setIsAdded] = useLocalStorage<boolean>(`product-${id}`, false);

        useEffect(() => {
            const quantity = getItemQuantity(id);
            setIsAdded(quantity > 0);
        }, [getItemQuantity]);

        const handleClick = () => {
            if (isAdded) {
                removeItem(id);
            } else {
                increaseItemQuantity(id);
            }
            setIsAdded(!isAdded);
        };

        const priceidr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        return (
            <div className="flex bg-white justify-center items-center border-t border-gray-300 py-10 md:flex-row mx-16">
                <div className="flex flex-row w-full leading-normal">
                    <div className="flex flex-col w-full">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 w-5/6">{name}</h5>
                        <p className="my-4 font-normal text-lg text-gray-700 w-5/6">{description}</p>
                        <p className="mt-4 font-normal text-lg text-gray-500 w-5/6">Rp {priceidr},00</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/4 full">
                        <div className="flex flex-row items-center h-36 w-36 rounded-3xl md:h-36 md:w-36 md:rounded-3xl mb-4">
                            <img src={`../../public/images/${image}`} alt="Cheeseburger" className='object-cover h-full w-full rounded-3xl'>
                            </img>
                        </div>
                        <div className="flex flex-row items-center">
                        <button
                            type="button"
                            className={`${isAdded ? 'text-mealshub-red hover:text-white border-2 border-mealshub-red hover:bg-mealshub-red' : 'text-white bg-mealshub-red hover:text-mealshub-red border-2 border-mealshub-red hover:bg-white'} font-bold text-lg rounded-full text-sm px-5 py-2.5 text-center`}
                            onClick={handleClick}
                        >
                            {isAdded ? "Added" : "Add to Cart"}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    )});

    return productlist;
}