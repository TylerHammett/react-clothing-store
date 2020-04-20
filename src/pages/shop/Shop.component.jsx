import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview.component';
import CollectionPage from '../collection/Collection.component';
import './Shop.styles.scss';

const Shop = ({ match }) => {
  return (
    <div className='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
