import { Container, Box, Typography, Divider } from "@mui/material";
import UserImageUploader from "../../../components/user/components/UserImageUploader/UserImageUploader";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";
import UserService from "../../../components/user/services/UserService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ChangePassword from "../../../components/user/components/ChangePassword/ChangePassword";
import UserDetailsForm from "../../../components/user/components/UserDetailsForm/UserDetailsForm";

export default function PersonalInformationTab() {
  const { token, getUserData, updateUserData } = useAuthenticatedUserContext();
  const userService = new UserService(token);

  //#region image upload states
  const [file, setFile] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  //#endregion

  //#region image upload
  useEffect(() => {
    const fetchUserDetails = async () => {
      fetchUserDetails();
      try {
        setImageLoading(true);
        const userDetails = await userService.getUserDetails();
        setImageLoading(false);

        setUserDetails(userDetails);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      } finally {
      }
    };
  }, [token]);

  const handleUpload = async () => {
    if (file) {
      try {
        setImageLoading(true);
        const response = await userService.uploadImage(file);
        const userData = getUserData();
        userData.image = response.imageURL;
        updateUserData(userData);
        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image!");
      } finally {
        setImageLoading(false);
      }
    }
  };

  const handleOnDeleteImage = async () => {
    try {
      setImageLoading(true);
      const response = await userService.deleteImage();
      const userData = getUserData();
      userData.image = null;
      setFile(null);

      updateUserData(userData);
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Error deleting image!");
    } finally {
      setImageLoading(false);
    }
  };

  //#endregion

  //#region user details form states
  const [userDetails, setUserDetails] = useState(null);

  const [userDetialsBackendErrors, setUserDetailsBackendErrors] = useState([]);
  const [submitUserDetailsLoading, setSubmitUserDetailsLoading] = useState(false);

  const onUserDetailsSubmit = async (data) => {
    setUserDetailsBackendErrors([]);
    try {
      setSubmitUserDetailsLoading(true);
      const response = await userService.updateProfile(data);
      const userData = getUserData();
      userData.firstName = response.user.firstName;
      userData.lastName = response.user.lastName;
      userData.phoneNumber = response.user.phoneNumber;
      userData.email = response.user.email;
      userData.dateOfBirth = response.user.dateOfBirth;

      updateUserData(userData);
      toast.success("User details updated successfully!");
    } catch (error) {
      console.error("Error updating user details:", error);
      setUserDetailsBackendErrors(error.response.data.errors || ["Something went wrong"]);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitUserDetailsLoading(false);
    }
  };
  //#endregion

  //#region change password states
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);
  const [changePasswordBackendErrors, setChangePasswordBackendErrors] = useState([]);
  const handleOnChangePasswordSubmit = async (data) => {
    setChangePasswordBackendErrors([]);
    try {
      setChangePasswordLoading(true);
      const response = await userService.changePassword(data);
      toast.success("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      setChangePasswordBackendErrors(["Something went wrong"]);
      // setChangePasswordBackendErrors(error.response.data.errors || ['Something went wrong']);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setChangePasswordLoading(false);
    }
  };
  //#endregion

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          marginTop: "30px",
          fontFamily: "Inter",
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: 600,
          lineHeight: "26px",
          textAlign: "left",
          marginBottom: "10px",
          color: "#13101E",
        }}
      >
        My Personal Information
      </Typography>
      <Divider width={"100%"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          margin: "1rem 0",
        }}
      >
        <UserImageUploader
          file={file}
          setFile={setFile}
          onUploadSubmit={handleUpload}
          userDetails={getUserData()}
          loading={imageLoading}
          onDeleteImage={handleOnDeleteImage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          margin: "2rem 0",
          maxWidth: "700px",
        }}
      >
        <UserDetailsForm
          onSubmit={onUserDetailsSubmit}
          loading={submitUserDetailsLoading}
          backendErrors={userDetialsBackendErrors}
          userData={getUserData()}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          margin: "2rem 0",
          maxWidth: "350px",
        }}
      >
        <ChangePassword
          backendErrors={changePasswordBackendErrors}
          loading={changePasswordLoading}
          onSubmit={handleOnChangePasswordSubmit}
        />
      </Box>
    </Container>
  );
}
