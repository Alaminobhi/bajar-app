import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";

const OrderList = () => {
  return (
    <PageLayout>
      <p>
        Hey there! This is where products will go when you've finished reading
        them. Get started by heading over to the <Link to='/'>Products</Link>{" "}
        page to add products to your list.
      </p>
    </PageLayout>
  );
};

export default OrderList;
