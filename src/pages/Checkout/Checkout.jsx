import UserAddress from "../../components/shared/Checkout/UserAddress";
import OrderSummary from "../../components/shared/OrderSummary/OrderSummary";
import Invoice from "../../components/shared/Invoice/Invoice";
import CardVertical from "../../components/shared/CardVertical/CardVertical";
import CartCardVertical from "../../components/shared/CardVertical/CartCardVertical";
import { Typography, Stack, Box, Container } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import PaymentComp from "../../components/shared/Checkout/PaymentComp";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import CheckoutButtons from "../../components/shared/Checkout/CheckoutButtons";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useEffect, useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51PB0qOExyylvHUrWpZQtSZKFnnUxlSianPwSwYyeEnFyUn1pb1nDWbSLVnTpDimHcXwNELk1MBzJgJSwH53Hb5wq00jFpTa1Ri"
);
export default function Checkout() {
  const { cart, getInvoice } = useCartContext();
  const [addressFormData, setAddressFormData] = useState({});

  const handleFormChange = (formData) => {
    setAddressFormData(formData);

  };







  const options = {
    mode: "payment",
    amount: 300,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      labels: "floating",
      variables: {
        colorBackground: "#f1f1f1",
        colorText: "#30313d",
        borderWidth: "0px",
      },
    },
  };

  const breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Checkout",
    },
  ];

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Breadcrumb list={breadcrumbList} />
      <Typography
        component="h1"
        sx={{
          color: "primary.main",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Checkout
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", marginRight: "8%" }}>
          <UserAddress onFormChange={handleFormChange} />
          <Elements stripe={stripePromise} options={options}>
            <PaymentComp stripePromise={stripePromise} options={options} addressForm={addressFormData} />
          </Elements>

          <CheckoutButtons />
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            marginLeft: "20px",
          }}
        >
          <OrderSummary title={"Order Summary"}>
            <Box>
              {cart.map((item, index) => (
                <CartCardVertical key={index} cart={cart} item={item}>
                  <Typography sx={{ color: "#626262" }}>
                    Qty- {item.productQuantity}
                  </Typography>
                </CartCardVertical>
              ))}
            </Box>
          </OrderSummary>

          <OrderSummary title={"Order Details"}>
            <Stack sx={{ display: "flex", minWidth: "321px;" }}>
              <Invoice invoiceData={getInvoice()}></Invoice>
            </Stack>
          </OrderSummary>
        </Box>
      </Box>
    </Container>
  );
}
