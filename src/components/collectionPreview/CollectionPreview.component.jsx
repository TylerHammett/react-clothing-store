import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem.component';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collectionPreview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;