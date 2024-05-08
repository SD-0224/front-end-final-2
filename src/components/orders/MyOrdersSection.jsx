import React, { useEffect } from "react";
import BasicTabs from "../shared/CustomTabPanel/CustomTabPanel";
import OrderList from "./OrderList";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUserContext";
import { OrderService } from "./services/OrderService";
import { useState } from "react";


export default function MyOrdersSection() {
  const { token } = useAuthenticatedUserContext();
  const orderService = new OrderService(token);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const orders = await orderService.getOrders();
      setOrders(orders);

    };

    getOrders();
  }, []);

  // const orders = [
  //   {
  //     orderID: 874522648,
  //     userID: 21,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "john.doe@example.com",
  //     phoneNumber: "1234567890",
  //     addressID: 1,
  //     grandTotal: 26.98,
  //     isPaid: false,
  //     createdAt: "2024-04-28T08:17:25.000Z",
  //     updatedAt: "2024-04-28T08:17:25.000Z",
  //     paymentID: null,
  //   },
  //   {
  //     orderID: 874522648,
  //     userID: 21,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "john.doe@example.com",
  //     phoneNumber: "1234567890",
  //     addressID: 1,
  //     grandTotal: 26.98,
  //     isPaid: false,
  //     createdAt: "2024-04-28T08:17:25.000Z",
  //     updatedAt: "2024-04-28T08:17:25.000Z",
  //     paymentID: null,
  //   },
  //   {
  //     orderID: 874522648,
  //     userID: 21,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "john.doe@example.com",
  //     phoneNumber: "1234567890",
  //     addressID: 1,
  //     grandTotal: 26.98,
  //     isPaid: false,
  //     createdAt: "2024-04-28T08:17:25.000Z",
  //     updatedAt: "2024-04-28T08:17:25.000Z",
  //     paymentID: null,
  //   },
  // ];

  const tabsData = [
    {
      label: "Completed",
      content: <OrderList orders={orders.filter((order) => order.status === 'completed')} />,
    },
    {
      label: "Pending",
      content: <OrderList orders={orders.filter((order) => order.status === 'pending')} />,
    },
    {
      label: "Cancelled",
      content: <OrderList orders={orders.filter((order) => order.status === 'cancelled')} />,
    },
  ];

  return <BasicTabs tabs={tabsData} />;
}
