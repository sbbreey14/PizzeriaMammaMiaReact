import './Cart.css';
import { useState } from 'react';
import { pizzaCart } from './pizzas';

export const Cart = () => {
    
    const [pizza, setPizza] = useState(pizzaCart);

    const upperCount = (pizza) => {
        setPizza(prev =>
            prev.map(p =>
                p.id === pizza.id ? { ...p, count: p.count + 1 } : p
            )
        );
    };

    const lessCount = (pizza) => {
        setPizza(prev =>
            prev
                .map(p =>
                    p.id === pizza.id ? { ...p, count: p.count - 1 } : p
                )
                .filter(p => p.count > 0)
        );
    };

    const total = pizza.reduce((acc, p) => acc + p.price * p.count, 0);

    return (
        <div className='carrito-container'>
            <header style={{ marginLeft: '7em', marginTop: '20px' }}>
                Detalles del producto:
            </header>
            {pizza.map(pizz => (
                <div className='grid-container' key={pizz.id}>
                    <img src={pizz.img} style={{ width: '120px' }} />
                    <p className='texto'>{pizz.name}</p>
                    <p className='texto'>${pizz.price.toLocaleString('es-CL')}</p>
                    <button className='botonMenos' onClick={() => lessCount(pizz)}>-</button>
                    <p className='contador'>{pizz.count}</p>
                    <button className='botonMas' onClick={() => upperCount(pizz)}>+</button>
                </div>
            ))}
            <p>Total a pagar: ${total.toLocaleString('es-CL')}</p>
            <button className='boton'>Pagar</button>
        </div>
    );
};
