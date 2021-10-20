//////-------------------------
import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
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
} from "../loginComponents/styles";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";

import { colors } from "../utils/colors";
const { lightGray, brand, primary } = colors;

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
import { createUser } from "../store/actions/userActions";

export default function NewRegisterExt({ navigation }) {
  const dispatch = useDispatch();

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
  //---------------post
  const handleSignup = (credentials, setSubmitting) => {
    //opcion 1

    dispatch(createUser(credentials));

    // opcion 2
    //Crear un usuario en nuestra db -> se crea una cuenta
    // handleMessage(null);
    // const url =
    //   "http://9203-2800-200-f190-8e7-3d26-f78b-9071-51c0.ngrok.io/user/create";
    // axios
    //   .post(url, credentials)
    //   .then((response) => {
    //     const result = response.data;
    //     const { status, message, data } = result;

    //     if (status !== "SUCCESS") {
    //       handleMessage(message, status);
    //     } else {
    //       persistLogin({ ...data }, message, status);
    //     }
    //     setSubmitting(false);
    //   })
    //   .catch((error) => {
    //     setSubmitting(false);
    //     handleMessage("An error occurred. Check your network and try again");
    //     console.log(error.toJSON());
    //   });
  };
  //----------------post
  // credentials context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const { email, name } = storedCredentials;

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Register Extended</PageTitle>

          {show && (
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
          )}

          <Formik
            initialValues={{
              nombre: name,
              apellidos: "",
              mail: email,
              nickname: "",
              direccion: "",
              dni: "",
              telefono: "",
              codigo_postal: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, foto: "" };
              if (
                // values.nombre == "" ||
                values.apellidos == "" ||
                // values.mail == "" ||
                values.nickname == "" ||
                values.direccion == "" ||
                values.dni == "" ||
                values.telefono == "" ||
                values.codigo_postal == ""
              ) {
                handleMessage("Please fill in all fields");
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
                {
                  // <MyTextInput
                  //   label="Name"
                  //   placeholder="Richard"
                  //   placeholderTextColor={lightGray}
                  //   onChangeText={handleChange("nombre")}
                  //   onBlur={handleBlur("nombre")}
                  //   value={values.nombre}
                  //   icon="person"
                  // />
                }
                <MyTextInput
                  label="Last Name"
                  placeholder="Barnes"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("apellidos")}
                  onBlur={handleBlur("apellidos")}
                  value={values.apellidos}
                  icon="person"
                />
                <MyTextInput
                  label="Nickname"
                  placeholder="Rick"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("nickname")}
                  onBlur={handleBlur("nickname")}
                  value={values.nickname}
                  icon="person"
                />
                {/* <MyTextInput
                  label="Email Address"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("mail")}
                  onBlur={handleBlur("mail")}
                  value={values.mail}
                  keyboardType="email-address"
                  icon="mail"
                /> */}
                <MyTextInput
                  label="Adress"
                  placeholder="Adress 5000"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("direccion")}
                  onBlur={handleBlur("direccion")}
                  value={values.direccion}
                  icon="person"
                />
                <MyTextInput
                  label="Dni"
                  placeholder="12.345.678"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("dni")}
                  onBlur={handleBlur("dni")}
                  value={values.dni}
                  icon="person"
                />
                <MyTextInput
                  label="Phone"
                  placeholder="012345678910"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("telefono")}
                  onBlur={handleBlur("telefono")}
                  value={values.telefono}
                  icon="person"
                />
                <MyTextInput
                  label="Postal Code"
                  placeholder="Rick"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("codigo_postal")}
                  onBlur={handleBlur("codigo_postal")}
                  value={values.codigo_postal}
                  icon="mail"
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
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}
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
            color={lightGray}
          />
        </RightIcon>
      )}
    </View>
  );
};
