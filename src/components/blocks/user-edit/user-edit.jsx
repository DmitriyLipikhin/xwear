import { useState } from "react";
import React from "react";
import Input from "../../ui/input/input";
import { Container, Row, Form,  } from "react-bootstrap";
import Button from "../../ui/button/button";
import "./user-edit.scss"

export default function UserEdit() {
  const [values, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const fieldChanges = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container className="personal__user-edit">
      <h2 className="personal__user-edit-title">Редактирование профиля</h2>
      <Form className="personal__user-edit-form">
        <Row className="personal__user-edit-row input">
            <Input
              placeholder="Введите ваше имя"
              type="text"
              id="firstname"
              name="firstname"
              value={values.firstname}
              error={null}
              onChange={fieldChanges}
            >
              Ваше имя:
            </Input>
            <Input
              placeholder="Введите вашу фамилию"
              type="text"
              id="lastname"
              name="lastname"
              value={values.lastname}
              error={null}
              onChange={fieldChanges}
            >
              Фамилия:
            </Input>
            <Input
              placeholder="Введите ваш email"
              type="email"
              id="email"
              name="email"
              value={values.email}
              error={null}
              onChange={fieldChanges}
            >
              Email адрес:
            </Input>
            <Input
              placeholder="+7 (000) 000 - 00 - 00"
              type="tel"
              id="phone-number"
              name="phone"
              value={values.phone}
              error={null}
              onChange={fieldChanges}
            >
              Номер телефона:
            </Input>
        </Row>
        <Button className="input__button" type="submit">Сохранить</Button>
      </Form>
    </Container>
  );
}
