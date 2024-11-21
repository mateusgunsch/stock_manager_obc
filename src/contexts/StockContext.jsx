import { useState } from "react";
import PropTypes from "prop-types";
import { StockContext } from "./ConstStockContext";

StockContextProvider.propTypes = {
    children: PropTypes.node
}

// item = { name, descriptions, quantity, price, category, createdAt, updatedAt }
export function StockContextProvider({ children }) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItem = (item) => {
        setItems(state => {
            const updatedItems = [item, ...state]
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const deleteItem = (itemId) => {
        setItems(state => {
            const updatedItems = state.filter(item => item.id !== itemId)
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}