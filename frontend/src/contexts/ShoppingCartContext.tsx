import {createContext, ReactNode, useContext} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number;
    quantity: number;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeItem: (id: number) => void;
    cartQuantity: number;
    cartItems: cartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("shopping-cart",[]);

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);


    function getItemQuantity(id: number) {
        const item = cartItems.find(item => item.id === id);
        return item?.quantity ?? 0;
    }

    function increaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}];
            }
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
        });
    }

    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            }
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });
        });
    }

    function removeItem(id: number) {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem,  cartItems, cartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}