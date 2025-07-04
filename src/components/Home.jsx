
{/* Importaciones componentes */}
import { Header } from "./Header";
import { CardPizza } from "./CardPizza";

{/* Importacion useState */}
import { useState } from "react";

{/* Importar pizzas.js */}
import { pizzas, pizzaCart } from './pizzas';

export const Home = () => {

    const [ pizza, setPizza ] = useState( pizzas );

    return (
        <>
            <Header />
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                { pizza.map( pizz => (
                    <CardPizza
                    key={ pizz.id }
                    name={ pizz.name }
                    price={ pizz.price }
                    ingredients={ pizz.ingredients  }
                    img={ pizz.img }
                />
                ))}
            </div>
        </>
    )
}