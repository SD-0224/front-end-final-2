import { Box, FormControl } from "@mui/material";
import MenuSide from "./MenuSide";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Elements, PaymentElement, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import { OrderService } from "../../../components/orders/services/OrderService";
import { useEffect } from "react";
import { LastPage } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";



export default function PaymentMethod({ stripePromise, options, addressForm }) {
  const stripe = useStripe();
  const elements = useElements();
  var orderData = { ...addressForm, visaToken: '' };

  const { token, getUserData } = useAuthenticatedUserContext();
  const orderService = new OrderService(token);
  const authUser = getUserData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Create a Payment Method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      console.warn('[error]', error);
      toast.error('Please enter valid card details');
      return;
    } else {
    }
    orderData = {
      ...orderData, visaToken: paymentMethod.id, firstName: authUser.firstName,
      lastName: authUser.lastName, email: authUser.email
    };

    try {
      setLoading(true);
      const order = await orderService.createOrder(orderData);
      toast.success('Order created successfully');

      navigate("/");
    } catch (orderError) {
      console.error('Order creation failed:', orderError);
      toast.error('Failed to create order');
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <MenuSide title={"Payment"}>
        <Box sx={{ width: "100%", marginTop: "20px" }}>

          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <CardElement />
              <Box>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  loading={loading}
                  loadingIndicator="Proccessing Payment..."
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </LoadingButton>
              </Box>
            </FormControl>
          </form>

        </Box>
      </MenuSide>
    </>
  );
}
