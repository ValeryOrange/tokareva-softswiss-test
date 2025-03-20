import React from 'react';
import Title from '@components/Title';
import Lead from '@components/Lead';

/**
 * Products component renders a page with items in user's cart.
 *
 * @component
 * @example
 * return (
 *   <Products />
 * )
 */
const Products = () => (
    <div>
        <Lead>
            <Title>
                Our <em className="em em_pink">unique</em> products
            </Title>
            <Title size="h2">
                This is a boring lead without{' '}
                <em className="em em_yellow">a background image</em>
            </Title>
        </Lead>
    </div>
);

export default Products;
