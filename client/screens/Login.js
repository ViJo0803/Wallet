import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
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
  Colors,
} from "../loginComponents/styles";
import { View, ActivityIndicator } from "react-native";
const { darkLight, brand, primary } = Colors;
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from '../loginComponents/KeyboardAvoidingWrapper';
import axios from "axios";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from '../loginComponents/CredentialsContext';
import { getUser } from "../store/actions/userActions";
import url from '../store/actions/const'


const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  

  // credentials context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const handleLogin = (credentials, setSubmitting) => {
    console.log("credentials", credentials)
    handleMessage(null);
    const _url = "http://192.168.0.65:3001" + "/user/get/";
    console.log("url",_url)
    axios
      .post(_url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        console.log("handle loggin data", result)
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

  const userTrue = (email) =>{
    getUser(email)
    const _user = useSelector((state) => state.user.user);
    return _user
      }


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

        // let _user = userTrue(email);     
     
        if (type == "success" ) {
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
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ mail: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.mail == "" || values.password == "") {
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
                <MyTextInput
                  label="Email Address"
                  placeholder="usuario@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("mail")}
                  onBlur={handleBlur("mail")}
                  value={values.mail}
                  keyboardType="email-address"
                  icon="mail"
                />
                <MyTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
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
                    <Fontisto name="google" size={25} color={primary} />
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
                    <TextLinkContent>Signup</TextLinkContent>
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

const MyTextInput = ({
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
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
