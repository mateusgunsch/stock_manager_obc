import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { StockContext } from "../../contexts/ConstStockContext"
import DeleteButton from "../../components/DeleteButton"

export default function ShowItem() {
    const { getItem } = useContext(StockContext)
    const { id } = useParams()

    const item = getItem(id)

    return(
        <div className="item">
            <h2>{item.name}</h2>
            <Link to={`/items/${item.id}/update`} className="button is-small">Atualizar</Link>
            <DeleteButton itemId={item.id} itemName={item.name} />
            <div className="row">
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: R$ {item.price}</span>
            </div>
            <p>{item.description}</p>
            <div className="row">
                <p>Cadastrado em: {item.createdAt.toLocaleDateString()}</p>
                <p>Atualizado em: {item.updatedAt.toLocaleDateString()}</p>
            </div>
        </div>
    )
}