import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./pages/RootLayout"
import ListItems from "./pages/items/ListItems"
import CreateItem from "./pages/items/CreateItem"
import ShowItem from "./pages/items/ShowItem"
import UpdateItem from "./pages/items/UpdateItem"
import ItemsLayout from "./pages/items/ItemsLayout"

const router = createBrowserRouter(
    [{
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },                     //localhost:3000/
            { path: "items", element: <ItemsLayout />,              
                children: [
                    { index: true, element: <ListItems /> },        //localhost:3000/items/
                    { path: "new", element: <CreateItem /> },       //localhost:3000/items/new
                    { path: ":id", element: <ShowItem /> },         //localhost:3000/items/#id
                    { path: ":id/update", element: <UpdateItem /> } //localhost:3000/items/#id/update
                ]
            }
        ]
    }]

)

export default router