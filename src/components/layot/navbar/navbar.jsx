import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.scss"
import userIcon from "../../../assets/icons/user.svg"
import cartIcon from "../../../assets/icons/cart.svg"
import favouriteIcon from "../../../assets/icons/favourite.svg"
import searchIcon from "../../../assets/icons/search.svg"
import logo from "../../../assets/icons/logo.svg"

export default function NavBar () {
    const navigate = useNavigate();

    const TotalInfo = ({totalPrice, itemsCount}) => (
        <div className="wear__toolbar-wrapper">
            <Nav.Link className="wear__toolbar-link" onClick={(e) => {e.preventDefault(); navigate('/wear-page')}}>
                <img src={cartIcon} alt="Корзина" width="17" height="20" />
            </Nav.Link>
            <span className="wear__toolbar-price">{totalPrice} ₽</span>
            <Badge pill className="wear__toolbar-count" bg="#49D0FF">{itemsCount}</Badge>
        </div>
    );

    const totalPrice = 11899;
    const itemsCount = 7;

    TotalInfo(totalPrice, itemsCount);

    return (
        <Navbar className="wear__container" bg="black" expand="lg">
            <Container className="wear__group">
                <Navbar.Brand className="wear__logo" onClick={() => navigate('/wear-page')}>
                    <img src={logo} alt="Логотип XWEAR" width="84" height="34" />
                </Navbar.Brand>
                <Navbar.Toggle className="wear__menu-button" aria-controls="basic-navbar-nav" />
                <Nav className="wear__navigation-list">
                    <Nav.Link color="white" className="wear__navigation-link" onClick={() => navigate('/wear-page')}>Одежда</Nav.Link>
                    <Nav.Link className="wear__navigation-link" onClick={() => navigate('/wear-page')}>Обувь</Nav.Link>
                    <Nav.Link className="wear__navigation-link" onClick={() => navigate('/wear-page')}>Аксессуары</Nav.Link>
                    <Nav.Link className="wear__navigation-link" onClick={() => navigate('/wear-page')}>Расчет стоимости</Nav.Link>
                    <Nav.Link className="wear__navigation-link" onClick={() => navigate('/wear-page')}>Одежда</Nav.Link>
                    <NavDropdown className="wear__navigation-dropdown" title="Информация" id="basic-nav-dropdown">
                        <NavDropdown.Item className="wear__navigation-dropdown-link" onClick={() => navigate('/wear-page')}>Наш Блог</NavDropdown.Item>
                        <NavDropdown.Item className="wear__navigation-dropdown-link" onClick={() => navigate('/wear-page')}>Наши контакты</NavDropdown.Item>
                        <NavDropdown.Item className="wear__navigation-dropdown-link" onClick={() => navigate('/wear-page')}>Доставка</NavDropdown.Item>
                        <NavDropdown.Item className="wear__navigation-dropdown-link" onClick={() => navigate('/wear-page')}>Оплата</NavDropdown.Item>
                        <NavDropdown.Item className="wear__navigation-dropdown-link" onClick={() => navigate('/wear-page')}>FAQ</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="wear__user-wrapper">
                    <Nav.Link className="wear__toolbar-link" onClick={(e) => {e.preventDefault(); navigate('/wear-page')}}>
                        <img src={searchIcon} alt="Поиск" width="18" height="18" />
                    </Nav.Link>
                    <Nav.Link className="wear__toolbar-link" onClick={(e) => {e.preventDefault(); navigate('/wear-page')}}>
                        <img src={favouriteIcon} alt="Избранное" width="19" height="18" />
                    </Nav.Link>
                    <Nav.Link className="wear__toolbar-link" onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>
                        <img src={userIcon} alt="Личные кабинет" width="18" height="18" />
                    </Nav.Link>
                    <TotalInfo totalPrice={totalPrice} itemsCount={itemsCount}/>
                </Nav>
            </Container>
        </Navbar>
    );
}