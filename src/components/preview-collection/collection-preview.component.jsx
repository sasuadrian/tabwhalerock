import React from 'react';

import CollectionItem from '../collection-items/collection-items.component';
import './collection-preview.style.scss';


const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((items, idx ) => idx < 4)
                    .map(({id, ...otheritemProps}) => (
                        <CollectionItem key={id} {...otheritemProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview