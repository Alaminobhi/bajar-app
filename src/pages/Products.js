import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../components/PageLayout/PageLayout';
import Product from '../components/Product/Product';
import { loadBookAsync } from '../redux/slices/productSlice';
const Products = () => {

    const dispatch = useDispatch()
    useEffect(() => dispatch(loadBookAsync()) , [])

    const products = useSelector((state)=> state.products.ProductsList)
    return (
        <PageLayout>
        <div className="bg-light container row m-2 row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {
                products.map((product) => (<Product key={product.id} product={product} />))
            }
        </div>
        </PageLayout>
    );
};

export default Products;