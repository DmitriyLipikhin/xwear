import React, { useState, useEffect } from "react";
import { ListGroup, Container, ListGroupItem } from "react-bootstrap";
import OrderList from "../order-list/order-list";
import "./personal-categories.scss";

export default function PersonalCategories ({currentView , name}) {
    const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (currentView === 'personal-categories') {
      setTimeout(() => setIsShown(true), 50);
      setIsShown(false);
    }
  }, [currentView]);
    
    return (
        <Container className={`personal__categories-container ${isShown ? "show" : null}`}>
            <h2 className="personal__categories-title">{name && name !== '' ? `Приветствуем, ${name}!` : 'Заполните профиль'}</h2>
            <ListGroup className="personal__categories-list" horizontal="sm">
                <ListGroupItem className="personal__categories-button personal__categories-button-user" action>Мой профиль</ListGroupItem>
                <ListGroupItem className="personal__categories-button personal__categories-button-order-list" action>Заказы</ListGroupItem>
                <ListGroupItem className="personal__categories-button personal__categories-button-user-address" action>Мои адреса</ListGroupItem>
            </ListGroup>
            <OrderList>Текущие заказы</OrderList>
        </Container>
    );
}