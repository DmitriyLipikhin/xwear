import React from "react";
import { Container, Row, Col, ListGroup, Form, Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.scss";
import { useNavigate } from "react-router-dom";
import logoFooter from "../../../assets/icons/logo-footer.svg"
import telegramIcon from "../../../assets/icons/tg.svg"
import whatsappIcon from "../../../assets/icons/whatsapp.svg"
import vkIcon from "../../../assets/icons/vk.svg"
import buttonArrow from "../../../assets/icons/button-submit-arrow.svg"

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <Container className="footer__container" fluid>
        <Row className="footer__row">
          <Col className="footer__column" md={3}>
            <ListGroup className="footer__list" variant="flush">
              <ListGroup.Item className="footer__list-title" active>Каталог</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Одежда</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Обувь</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Аксессуары</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Расчет стоимости</ListGroup.Item>
              <Navbar.Brand className="footer__list-logo" onClick={() => navigate('/wear-page')}>
                    <img src={logoFooter} alt="Логотип XWEAR" width="99" height="41" />
              </Navbar.Brand>
            </ListGroup>
          </Col>
          <Col className="footer__column" md={3}>
            <ListGroup className="footer__list" variant="flush">
              <ListGroup.Item className="footer__list-title" active>Информация</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Блог</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Контакты</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Доставка</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Оплата</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>FAQ</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="footer__column" md={3}>
            <ListGroup className="footer__list" variant="flush">
              <ListGroup.Item className="footer__list-title" active>Контакты</ListGroup.Item>
              <ListGroup.Item className="footer__list-link" action href="mailto:info@xwear.info">info@xwear.info</ListGroup.Item>
              <ListGroup.Item className="footer__list-link footer__list-link-tel" action href="tel:+7 993 608 38 85">+7 993 608 38 85</ListGroup.Item>
              <ListGroup.Item className="footer__list-social-title" active>Мессенджеры</ListGroup.Item>
              <Row className="footer__list-row">
                <Col className="footer__list-column" md={2}>
                  <ListGroup.Item className="footer__list-social" action href="/#">
                    <img src={telegramIcon} alt="Телеграм" width="30" height="30" />
                  </ListGroup.Item>
                </Col>
                <Col className="footer__list-column" md={2}>
                  <ListGroup.Item className="footer__list-social" action href="/#">
                    <img src={whatsappIcon} alt="WhatsApp" width="30" height="30" />
                  </ListGroup.Item>
                </Col>
              </Row>
              <ListGroup.Item className="footer__list-social-title" active>Наши соц.сети</ListGroup.Item>
              <ListGroup.Item className="footer__list-social" action href="/#">
                <img src={vkIcon} alt="Вконтакте" width="30" height="30" /> 
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="footer__column" md={3}>
            <ListGroup className="footer__list" variant="flush">
              <ListGroup.Item className="footer__list-title" active>Подписка на новости</ListGroup.Item>
              <ListGroup.Item className="footer__list-link">Будьте в курсе скидок и новостей</ListGroup.Item>
              <Form className="footer__list-form">
                <Form.Label className="visually-hidden" htmlFor="inputMail">Email</Form.Label>
                <Form.Control
                  className="footer__list-form-input"
                  type="text"
                  id="inputMail"
                  placeholder="Ваш email"
                  aria-describedby="mailPersonalData"
                />
                <Button className="footer__list-form-button" type="submit">
                  <span className="visually-hidden">Отправить</span>
                  <img src={buttonArrow} alt="Отправить" width="8" height="" /> 
                </Button>
                <Form.Text className="footer__list-form-text" id="mailPersonalData">
                  Подписываясь на рассылку вы соглашатесь с обработкой персональных данных
                </Form.Text>
              </Form>
              <Container className="footer__list-policy-group">
                <ListGroup.Item className="footer__list-policy-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Политика конфиденциальности</ListGroup.Item>
                <ListGroup.Item className="footer__list-policy-link" action onClick={(e) => {e.preventDefault(); navigate('/login-page')}}>Пользовательское соглашение</ListGroup.Item>
              </Container>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
