import React from "react";
import BasicTabs from "../shared/CustomTabPanel/CustomTabPanel";
import AddressDetails from "./AddressDetails";
import ItemsOrdered from "./ItemsOrdered";
import ComingSoon from "../products/ProductPageTap/ComingSoon";

export default function OrderDetailsSection() {
  const orderDetails = {
    orderID: 874522648,
    userID: 21,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "1234567890",
    addressID: 1,
    grandTotal: 26.98,
    isPaid: false,
    createdAt: "2024-04-28T08:17:25.000Z",
    updatedAt: "2024-04-28T08:17:25.000Z",
    paymentID: null,
    products: [
      {
        productID: 13,
        title: "Shoulder Bag-1",
        subTitle: "Versatile shoulder bag",
        price: 19.5,
        discount: 0.16,
        slug: "shoulder-bag-1",
        brandName: "Gucci",
        "brand-slug": "gucci",
        category: "Skin Care",
        "category-slug": "skin-care",
        avgReview: 0,
        reviewCount: 0,
        imgPath:
          "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      },
      {
        productID: 14,
        title: "Shoulder Bag-2",
        subTitle: "Versatile shoulder bag",
        price: 19.5,
        discount: 0.1,
        slug: "shoulder-bag-2",
        brandName: "Gucci",
        "brand-slug": "gucci",
        category: "Skin Care",
        "category-slug": "skin-care",
        avgReview: 0,
        reviewCount: 0,
        imgPath:
          "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      },
      {
        productID: 15,
        title: "Shoulder Bag-3",
        subTitle: "Versatile shoulder bag",
        price: 19.5,
        discount: 0.1,
        slug: "shoulder-bag-3",
        brandName: "Gucci",
        "brand-slug": "gucci",
        category: "Skin Care",
        "category-slug": "skin-care",
        avgReview: 0,
        reviewCount: 0,
        imgPath:
          "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      },
    ],
  };

  const address = {
    addressID: 1,
    userID: 21,
    street: "123 Main St",
    state: "California",
    city: "Los Angeles",
    postalCode: "90001",
  };

  const tabsData = [
    {
      label: "Items Ordered",
      content: <ItemsOrdered />,
    },
    {
      label: "Invoices",
      content: <ComingSoon />,
    },
    {
      label: "Order Shipment",
      content: <ComingSoon />,
    },
  ];

  return <BasicTabs tabs={tabsData} />;
}
