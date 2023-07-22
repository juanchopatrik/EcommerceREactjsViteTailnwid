import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpe] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpe(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpe(false)


    const [productToShow, setProductToShow] = useState({})

    const [cartProducts, setCartProducts] = useState([])

    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [searchByTitle, items])

    return (
        <ShoppingCartContext.Provider value={{
            filteredItems,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            order,
            setOrder,
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 