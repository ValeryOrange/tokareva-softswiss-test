import React from 'react';
import Title from '@components/Title';
import { NavLink } from 'react-router';

/**
 * Cart component renders a page with items in user's cart.
 *
 * @component
 * @example
 * return (
 *   <Cart />
 * )
 */
const Cart = () => (
    <div>
        <Title>Your cart</Title>
        <Title size="h2">
            Cart is empty. Explore our{' '}
            <NavLink className="link" to="/products" title="Products">
                <em className="highlight highlight_yellow">Products</em>
            </NavLink>{' '}
            to choose your{' '}
            <em className="highlight highlight_pink">new adventures</em>.
        </Title>
    </div>
);

export default Cart;
