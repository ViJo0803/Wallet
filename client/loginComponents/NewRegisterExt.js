import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
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
import { Octicons, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingWrapper from "../loginComponents/KeyboardAvoidingWrapper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../loginComponents/CredentialsContext";
import { createUser } from "../store/actions/userActions";

export default function NewRegisterExt({ navigation }) {
  const dispatch = useDispatch();

  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
 const [dob, setDob] = useState();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };
  //---------------post
  const handleSignup = (credentials, setSubmitting) => {
    dispatch(createUser(credentials));
  };
  //----------------post
  // credentials context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const { email, name, photoUrl } = storedCredentials;

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle> Extended Register </PageTitle>

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
              //apellidos: "",
              mail: email,
              nickname: "",
              direccion: "",
              dni: "",
              telefono: "",
              codigo_postal: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, foto: photoUrl };
              if (
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
                <MyTextInput
                  label="Nickname"
                  placeholder="Rick"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("nickname")}
                  onBlur={handleBlur("nickname")}
                  value={values.nickname}
                  icon="person"
                />
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
                  keyboardType="numeric"
                />
                <MyTextInput
                  label="Phone"
                  placeholder="012345678910"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("telefono")}
                  onBlur={handleBlur("telefono")}
                  value={values.telefono}
                  icon="person"
                  keyboardType="numeric"
                />
                <MyTextInput
                  label="Postal Code"
                  placeholder="5000"
                  placeholderTextColor={lightGray}
                  onChangeText={handleChange("codigo_postal")}
                  onBlur={handleBlur("codigo_postal")}
                  value={values.codigo_postal}
                  icon="mail"
                  keyboardType="numeric"
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
