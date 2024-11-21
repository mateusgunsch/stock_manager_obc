import { useContext } from "react"
import ItemForm from "../../components/ItemForm"
import { StockContext } from "../../contexts/ConstStockContext"
import { useParams } from "react-router-dom"

export default function UpdateItem() {
    const { getItem } = useContext(StockContext)
    const { id } = useParams()

    const item = getItem(id)

    return(
        <>
            <h2>Atualizar item</h2>
            <ItemForm itemToUpdate={item} />
        </>
    )
}