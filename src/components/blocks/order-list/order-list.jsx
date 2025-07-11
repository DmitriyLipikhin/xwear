import React from "react";
import { Table, Container } from "react-bootstrap";
import "./order-list.scss"

export default function OrderList ({children, pagination}) {
    const orders = [
        {
            id: '#5653',
            date: '27/06/2023',
            status: 'В обработке',
            result: '4 699 ₽'
        },
        {
            id: '#5653',
            date: '27/06/2023',
            status: 'Отправлен',
            result: '4 699 ₽'
        },
        {
            id: '#5653',
            date: '27/06/2023',
            status: 'В обработке',
            result: '4 699 ₽'
        },
        {
            id: '#5653',
            date: '27/06/2023',
            status: 'Отправлен',
            result: '4 699 ₽'
        },
    ]
    return (
        <Container className="personal__order-container">
            <h3 className="personal__order-title">{children}</h3>
            <Table className="personal__order-table" striped>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Дата</th>
                        <th>Статус</th>
                        <th>Итог</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return (
                            <tr>
                                <td className="col-md-3">{order.id}</td>
                                <td className="col-md-3">{order.date}</td>
                                <td className="col-md-3">{order.status}</td>
                                <td className="col-md-2">{order.result}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {pagination && <button type="button">123</button>}
        </Container>
    );
}