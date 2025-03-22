import React from 'react';
import './title.scss';

const DEFAULT_TAG = 'h1';
const ALLOWED_TAGS = ['h1', 'h2', 'h3'];

/**
 * Title component that renders a heading element with a specified size.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed within the title.
 * @param {'h1' | 'h2' | 'h3'} [props.size='h1'] - The size of the title, which determines the HTML tag to be used.
 * @returns {JSX.Element} The rendered title component.
 */
const Title = ({ children, size = 'h1' }) => {
    const Tag = ALLOWED_TAGS.includes(size) ? size : DEFAULT_TAG;
    return <Tag className={`title title_${size}`}>{children}</Tag>;
};

export default React.memo(Title);
