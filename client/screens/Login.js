import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  StyledContainer,
  PageLogo,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../loginComponents/styles";
import { View, ActivityIndicator } from "react-native";
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../loginComponents/KeyboardAvoidingWrapper";
import axios from "axios";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../loginComponents/CredentialsContext";
import { colors } from "../utils/colors";

const { lightGray, brand, primary } = colors;

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  // credentials context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://whispering-headland-00232.herokuapp.com/user/signin";
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          persistLogin({ ...data[0] }, message, status);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage("An error occurred. Check your network and try again");
        console.log(error.toJSON());
      });
  };

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `869980078790-mne22pfhasqbl812u0a3intcd7s8fcnl.apps.googleusercontent.com`,
      androidClientId: `869980078790-d1s7hh4j3i9t7a6gho3n0ehstg8n4tvj.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        const { email, name, photoUrl } = user;

        if (type == "success") {
          const { email, name, photoUrl } = user;

          persistLogin(
            { email, name, photoUrl },
            "Google signin successful",
            "SUCCESS"
          );
        } else {
          handleMessage("Google Signin was cancelled");
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        handleMessage("An error occurred. Check your network and try again");
        console.log(error);
        setGoogleSubmitting(false);
      });
  };

  // Persisting login
  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem("flowerCribCredentials", JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        handleMessage("Persisting login failed");
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("../assets/logoMintDef.png")}
          />

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                handleMessage("Please fill in all fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <StyledFormArea>
                <TextInput
                  label="Email Address"
                  placeholder="usuario@gmail.com"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  icon="mail"
                />
                <TextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <Line />

                {!googleSubmitting && (
                  <StyledButton onPress={handleGoogleSignin} google={true}>
                    <Fontisto name="google" size={25} color={brand} />
                    <ButtonText google={true}>Sign in with Google</ButtonText>
                  </StyledButton>
                )}
                {googleSubmitting && (
                  <StyledButton disabled={true} google={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <ExtraView>
                  <ExtraText>Don't have an account already? </ExtraText>
                  <TextLink onPress={() => navigation.navigate("Signup")}>
                    <TextLinkContent>Sign up</TextLinkContent>
                  </TextLink>
                </ExtraView>
                <ExtraView>
                  <TextLink onPress={() => navigation.navigate("F.A.Q.")}>
                    <TextLinkContent>F A Q</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={lightGray}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
