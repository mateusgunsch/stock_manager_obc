import PropTypes from "prop-types"
import { useContext } from "react"
import { StockContext } from "../contexts/ConstStockContext"

DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({ itemId, itemName }) {
    const { deleteItem } = useContext(StockContext)

    const handleDelete = () => {
        if (confirm(`Deseja excluir ${itemName}?`)) {
            deleteItem(itemId)
        }
    }

    return (
        <button className="button is-danger is-small" onClick={handleDelete}>
            <img src="trash.svg" alt="Excluir" />
        </button>
    )
}