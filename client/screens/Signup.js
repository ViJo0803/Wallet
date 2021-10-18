import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";

// formik
import { Formik } from "formik";

import {
  StyledContainer,
  PageTitle,
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
  SubTitle,
  Colors,
} from "../loginComponents/styles";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Ionicons } from "@expo/vector-icons";

// Datetimepicker
import DateTimePicker from "@react-native-community/datetimepicker";

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../loginComponents/KeyboardAvoidingWrapper";

// api client
import axios from "axios";

// Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// credentials context
import { CredentialsContext } from "../loginComponents/CredentialsContext";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Actual value to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow("date");
  };

  // credentials context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  // Form handling
  const handleSignup = (credentials, setSubmitting) => {
    handleMessage(null);
    console.log("credentials",credentials)
    const url = "http://192.168.0.65:3001" + "/user/create/";
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        console.log("data Signup", data);
        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          persistLogin({ ...data }, message, status);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage("An error occurred. Check your network and try again");
        console.log(error.toJSON());
      });
  };

  /* data Signup Object {
    "__v": 0,
    "_id": "6169f9f6aed3c7000438b341",
    "dateOfBirth": "1974-01-12T03:00:00.000Z",
    "email": "marcolucianomazzetti@gmail.com",
    "name": "Juan Carlos",
    "password": "$2b$10$pae30HLhH1T0Ztx1DVj54eLGeUGvpjbeuGkQtKR2I0v965YYJAX5K",
  } */

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  // Persisting login after signup
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

  // const {
  //   nombre,
  //   apellidos,
  //   mail,
  //   direccion,
  //   nickname,
  //   dni,
  //   telefono,
  //   foto,
  //   codigo_postal,
  // }

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>MINT</PageTitle>
          <SubTitle>Account Signup</SubTitle>
          {/* {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{
                backgroundColor: "yellow",
              }}
            />
          )} */}

          <Formik
            initialValues={{
              nombre: "",
              apellidos: "",
              mail: "",
              nickname: "",
              direccion: "",
              dni: "",
              telefono: "",
              codigo_postal: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, foto: "" };
              if (
                values.nombre == "" ||
                values.apellidos == "" ||
                values.mail == "" ||
                values.nickname == "" ||
                values.direccion == "" ||
                values.dni == "" ||
                values.telefono == "" ||
                values.codigo_postal == "" ||
                values.password == "" ||
                values.confirmPassword == ""
              ) {
                handleMessage("Please fill in all fields");
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                handleMessage("Passwords do not match");
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
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
                  label="Name"
                  placeholder="Richard"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("nombre")}
                  onBlur={handleBlur("nombre")}
                  value={values.nombre}
                  icon="person"
                />
                <MyTextInput
                  label="Last Name"
                  placeholder="Barnes"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("apellidos")}
                  onBlur={handleBlur("apellidos")}
                  value={values.apellidos}
                  icon="person"
                />
                 <MyTextInput
                  label="Email Address"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("mail")}
                  onBlur={handleBlur("mail")}
                  value={values.mail}
                  keyboardType="email-address"
                  icon="mail"
                />
                <MyTextInput
                  label="Nickname"
                  placeholder="Rick"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("nickname")}
                  onBlur={handleBlur("nickname")}
                  value={values.nickname}
                  icon="person"
                />
                <MyTextInput
                  label="Adress"
                  placeholder="Adress 5000"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("direccion")}
                  onBlur={handleBlur("direccion")}
                  value={values.direccion}
                  icon="person"
                />
                <MyTextInput
                  label="Dni"
                  placeholder="12.345.678"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("dni")}
                  onBlur={handleBlur("dni")}
                  value={values.dni}
                  icon="person"
                />
                <MyTextInput
                  label="Phone"
                  placeholder="012345678910"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("telefono")}
                  onBlur={handleBlur("telefono")}
                  value={values.telefono}
                  icon="person"
                />
                <MyTextInput
                  label="Postal Code"
                  placeholder="Rick"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("codigo_postal")}
                  onBlur={handleBlur("codigo_postal")}
                  value={values.codigo_postal}
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
                <MyTextInput
                  label="Confirm Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Signup</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <Line />
                <ExtraView>
                  <ExtraText>Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate("Login")}>
                    <TextLinkContent>Login</TextLinkContent>
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

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

export default Signup;
