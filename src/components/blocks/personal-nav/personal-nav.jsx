import React from "react";
import "./personal-nav.scss";
import { Container, ListGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PersonalNav ({currentView, setCurrentView}) {
    const navigate = useNavigate();
    return (
        <Container className="personal__nav-container">
            <ListGroup className="personal__nav-list">
                <ListGroup.Item className={`personal__nav-button personal__nav-button--user ${currentView === "personal-categories" ? "active" : null}`} onClick={() => setCurrentView("personal-categories")} action>Мой аккаунт</ListGroup.Item>
                <ListGroup.Item className={`personal__nav-button personal__nav-button--user-edit ${currentView === "user-edit" ? "active" : null}`} onClick={() => setCurrentView("user-edit")} action>Редактировать профиль</ListGroup.Item>
                <ListGroup.Item className={`personal__nav-button personal__nav-button--order-history ${currentView === "order-history" ? "active" : null}`} onClick={() => setCurrentView("order-history")} action>История заказов</ListGroup.Item>
                <ListGroup.Item className="personal__nav-button personal__nav-button--user-order" onClick={() => navigate('/user-info')} action>Мои заказы</ListGroup.Item>
                <ListGroup.Item className="personal__nav-button personal__nav-button--address" onClick={() => navigate('/user-info')} action>Адреса</ListGroup.Item>
                <ListGroup.Item className="personal__nav-button personal__nav-button--address-edit" onClick={() => navigate('/user-info')} action>Редактировать адреса</ListGroup.Item>
                <ListGroup.Item className="personal__nav-button personal__nav-button--password" onClick={() => navigate('/user-info')} action>Пароль</ListGroup.Item>
                <ListGroup.Item className="personal__nav-button personal__nav-button--exit" onClick={() => navigate('/user-info')} action>Выход</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}
