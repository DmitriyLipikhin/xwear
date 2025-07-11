import React from "react";
import OrderList from "../order-list/order-list";
import "./order-history.scss"

export default function OrderHistory () {
    return (
        <OrderList pagination>История заказов</OrderList>
    );
}