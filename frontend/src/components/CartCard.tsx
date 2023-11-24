import { useShoppingCart } from '../contexts/ShoppingCartContext';

type cartItem = {
    id: number;
    quantity: number;
}

interface CartCardProps {
    image: string,
    name: string,
    description: string,
    price: number,
    id: number
}

const Product: CartCardProps[] = [
    {
        image: "../../public/images/Cheeseburger.png",
        name: "Cheeseburger",
        description: "Enjoy the cheesy deliciousness of a McDonald's Cheeseburger! Our simple, classic cheeseburger begins with a 100% pure beef burger patty seasoned with just a pinch of salt and pepper.",
        price: 40000,
        id: 1
    },
    {
        id : 2,
        image: "../../public/images/BigMac.jfif",
        name: "Big Mac",
        description: "The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun.",
        price: 50000
    },
    {
        id : 3,
        image: "../../public/images/ChickenMcNuggets.jfif",
        name: "Chicken McNuggets",
        description: "Enjoy tender, juicy Chicken McNuggets® with your favorite dipping sauces. Chicken McNuggets® are made with all white meat chicken and no artificial colors, flavors, or preservatives. ",
        price: 20000
    },
    {
        id : 4,
        image: "../../public/images/EggMcMuffin.jfif",
        name: "Egg McMuffin",
        description: "Satisfy your McDonald's breakfast cravings with our Egg McMuffin® breakfast sandwich—it’s an excellent source of protein and oh so delicious.",
        price: 30000
    },
    {
        id : 5,
        image: "../../public/images/FilletOFish.jfif",
        name: "Fillet-O-Fish",
        description: "Dive into our wild-caught Filet-O-Fish, a classic McDonald's fish sandwich! Our fish sandwich recipe features a crispy fish filet patty on melty American cheese and is topped with creamy McDonald’s tartar sauce, all served on a soft, steamed bun.",
        price: 30000
    },
    {
        id : 6,
        image: "../../public/images/McCrispy.jfif",
        name: "McCripsy",
        description: "The McDonald’s McCrispy™ is a southern-style fried chicken sandwich that's crispy, juicy and tender perfection. It’s topped with crinkle-cut pickles and served on a toasted, buttered potato roll. The McCrispy™ has 470 calories.",
        price: 40000
    }];

export default function CartCard({ id, quantity }: cartItem) {
    const { increaseItemQuantity, decreaseItemQuantity } = useShoppingCart();
    const item = Product.find((item) => item.id === id);
    if (item == null) {
        throw new Error(`Item with id ${id} not found`);
    }

    const price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return (
        <div className="flex flex-col bg-white justify-center items-center py-10 md:flex-row mx-16">
            <div className="flex flex-col w-full leading-normal">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 w-5/6">{item.name}</h5>
                <p className="my-4 font-normal text-lg text-gray-700 w-5/6">{item.description}</p>
                <p className="mt-4 font-normal text-lg text-gray-500 w-5/6">Rp {price},00</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/6">
                <div className="flex flex-row items-center h-36 w-36 rounded-3xl md:h-36 md:w-36 md:rounded-3xl mb-4">
                    <img src={item.image} alt="Cheeseburger" className='object-cover h-full w-full rounded-3xl'>
                    </img>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-row justify-center items-center">
                      <button type="button" className="text-white bg-mealshub-red hover:text-mealshub-red border-2 border-mealshub-red hover:bg-white font-bold text-lg rounded-full text-sm px-2 py-2 text-center shadow-xl" onClick={() => decreaseItemQuantity(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                              <path d="M15.5003 11.4551H5.50033C5.27931 11.4551 5.06735 11.3673 4.91107 11.2111C4.75479 11.0548 4.66699 10.8428 4.66699 10.6218C4.66699 10.4008 4.75479 10.1888 4.91107 10.0325C5.06735 9.87626 5.27931 9.78847 5.50033 9.78847H15.5003C15.7213 9.78847 15.9333 9.87626 16.0896 10.0325C16.2459 10.1888 16.3337 10.4008 16.3337 10.6218C16.3337 10.8428 16.2459 11.0548 16.0896 11.2111C15.9333 11.3673 15.7213 11.4551 15.5003 11.4551Z" fill="currentColor"/>
                          </svg>
                      </button>
                      <p className="mx-6 font-normal text-lg text-gray-700">{quantity}</p>
                      <button type="button" className="text-white bg-mealshub-red hover:text-mealshub-red border-2 border-mealshub-red hover:bg-white font-bold text-lg rounded-full text-sm px-2 py-2 text-center shadow-xl" onClick={() => increaseItemQuantity(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                              <path d="M10.5003 4.79013V16.4568M4.66699 10.6235H16.3337" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>  
                      </button>
                  </div>
                </div>
            </div>
        </div>
    )
}
