import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddressDetails from "./AddressDetails";
import OrderSummary from "../shared/OrderSummary/OrderSummary";
import UserService from "../user/services/UserService";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUserContext";
import { useState } from "react";

export default function MyAddressBookSection() {
  // const addresses = [
  //   {
  //     addressID: 1,
  //     userID: 21,
  //     street: "123 Main St",
  //     state: "California",
  //     city: "Los Angeles",
  //     postalCode: "90001",
  //   },
  //   {
  //     addressID: 2,
  //     userID: 21,
  //     street: "123 Main St",
  //     state: "California",
  //     city: "Los Angeles",
  //     postalCode: "90001",
  //   },
  //   {
  //     addressID: 3,
  //     userID: 21,
  //     street: "123 Main St",
  //     state: "California",
  //     city: "Los Angeles",
  //     postalCode: "90001",
  //   },
  //   {
  //     addressID: 4,
  //     userID: 21,
  //     street: "123 Main St",
  //     state: "California",
  //     city: "Los Angeles",
  //     postalCode: "90001",
  //   },
  // ];
  const [addresses, setAddresses] = useState([]);
  const { token } = useAuthenticatedUserContext();
  const userService = new UserService(token);
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await userService.getUserAddresses();
        setAddresses(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAddresses();
  }, []);

  return (
    <Container>
      <OrderSummary title={"My Address"}>
        {addresses.length === 0 ? (
          <Typography sx={{ padding: "20px", fontSize: "20px" }}>
            You haven't selected an address yet
          </Typography>
        ) : (
          <Grid container spacing={3} paddingTop={3}>
            {addresses.map((address, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    padding: "20px 20px 40px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 0px 5px 3px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <AddressDetails address={address} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </OrderSummary>
    </Container>
  );
}
