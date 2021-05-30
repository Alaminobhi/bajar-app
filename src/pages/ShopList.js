import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
import Product from '../components/Product/Product';

const ShopList = () => {
    const products = useSelector(state => state.products.ShopList)
    return (
        <PageLayout>
        <div className="bg-light container row m-2 row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {
                products.length ?
                products.map((product) => <Product product={product} />)
                :
                <p>Looks like you've finished all your products! Check them out in your <Link to="finish">finished products</Link> or <Link to="/">Products more</Link>.</p>
            }
             </div>
        </PageLayout>
    );
};

export default ShopList;