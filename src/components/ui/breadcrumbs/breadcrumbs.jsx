import React from "react";
import { Breadcrumb } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./breadcrumbs.scss"
import { useNavigate, useLocation } from "react-router-dom";

const pathMappings = {
    '/': 'Главная',
    '/login-page': 'Личный кабинет',
    '/personal-account': 'Личный кабинет',
    '/products': 'Каталог товаров',
    '/products/products-info': 'Детальная информация товара',
    '/policy': 'Политика Конфиденциальности',
    '/faq': 'Часто задаваемые вопросы',
    '/cart': 'Корзина покупок',
    '/checkout': 'Оформление заказа',
    '/orders': 'История заказов'
  };


const Breadcrumbs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    return (
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumb__item" onClick={() => navigate('/')}>Главная </Breadcrumb.Item>
        {pathnames.length > 0 && pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const translateRoute = pathMappings[routeTo];
            return ( 
                <Breadcrumb.Item className="breadcrumb__item" key={index} onClick={() => navigate(routeTo)}>
                    {translateRoute}
                </Breadcrumb.Item>
            );
        })}
      </Breadcrumb>
    );
  };

  export default Breadcrumbs;