import React from 'react';
import Title from '@components/Title';
import Lead from '@components/Lead';

/**
 * Products component renders a page with company's products.
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
                Our <em className="highlight highlight_pink">unique</em>{' '}
                products
            </Title>
            <Title size="h2">
                This is a boring lead without{' '}
                <em className="highlight highlight_yellow">
                    a background image
                </em>
            </Title>
        </Lead>
    </div>
);

export default Products;
