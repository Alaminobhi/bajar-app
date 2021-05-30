import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addShopList } from '../../redux/slices/productSlice';

const Product = (props) => {
   const dispatch = useDispatch();
   const {img, name, price, _id} = props.product;
   return (
      <Card style={{ width: '18rem' }}
      className="bg-light text-dark text-center g-2 p-2">
          <Card.Img variant="top" src={img} alt="" />
              <Card.Title>{name}</Card.Title>
          <Card.Body className="row border text-dark m-2">
              <Card.Text >TK {price}</Card.Text>
              <Link className="col" onClick={() => dispatch(addShopList(props.product))}> Add Shop</Link>
          </Card.Body>
      </Card>
   );
};

export default Product;