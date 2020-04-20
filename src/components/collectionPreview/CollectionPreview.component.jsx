import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collectionItem/CollectionItem.component';
import './CollectionPreview.styles.scss';

const CollectionPreview = (props, match) => {
  const { title, items } = props;

  return (
    <div className='collectionPreview'>
      <Link to={`shop/${title.toLowerCase()}`}>
        <h1 className='title'>{title}</h1>
      </Link>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
