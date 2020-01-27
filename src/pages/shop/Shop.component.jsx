import React from 'react';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.component';
import ShopData from './shopdata';
import './Shop.styles.scss';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const {collections} = this.state
        return(
            <div className="shop">
                {collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview key={id} {...collectionProps}/>
                ))}
            </div>
        );
    }
}

export default Shop;