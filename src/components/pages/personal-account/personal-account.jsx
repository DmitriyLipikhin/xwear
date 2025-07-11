import React from "react";
import "./personal-account.scss";
import { Container } from "react-bootstrap";
import PersonalNav from "../../blocks/personal-nav/personal-nav";
import PersonalCategories from "../../blocks/personal-categories/personal-categories";
import OrderHistory from "../../blocks/order-history/order-history";
import UserEdit from "../../blocks/user-edit/user-edit";
import { useState } from "react";

export default function PersonalAccount() {
    const [currentView, setCurrentView] = useState("personal-categories");
  return (
    <section className="personal">
      <h1 className="personal__title">Личный Кабинет</h1>
      <Container className="personal__container">
        <PersonalNav currentView={currentView} setCurrentView={setCurrentView} />
        {currentView === "personal-categories" ? <PersonalCategories currentView={currentView} /> : ''}
        {currentView === "user-edit" ? <UserEdit /> : ''}
        {currentView === "order-history" ? <OrderHistory /> : ''}
      </Container>
    </section>
  );
}
