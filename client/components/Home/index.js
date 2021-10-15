import React, { useEffect, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../store/actions/accountActions";
import { getTransfers } from "../../store/actions/transferActions";

function Home({route}) {
  const dispatch = useDispatch();

<<<<<<< HEAD
=======
  console.log("this are the navigation props", Navigation);
  console.log("this are the Route props", Route);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  useEffect(() => {
    if (user) dispatch(getAccount(user.idusuario));
  }, [user]);
>>>>>>> main

  const balance = useSelector((state) => state.account.accounts);

  console.log("cuenta", balance);
  useEffect(() => {
    if (balance[0]) {
      dispatch(getTransfers(balance[0].idcuentas));
    } //como decirle a esta funcion que no envie nada hasta no tener un valor para poder enviar la peticion a getOperations
  }, [balance]);

  const transfers = useSelector((state) => state.transfer.history);

<<<<<<< HEAD
  

  const transfer = useSelector((state) => state.transfer.history);

  console.log("historial transferencias", transfer)
=======
  console.log("historial transferencias", transfers);
  //const totalBalance = balance?.find((el) => el.tipomoneda === "AR$");
>>>>>>> main

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleCuenta}>ARS</Text>
        <Text style={styles.titleCuenta}>{balance?.saldo}</Text>
      </View>

      <View>
        <Text style={styles.titleTransfer}>Transfers</Text>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            {transfers?.map((op) => (
              <View>
                {op?.origin == balance[0].idcuentas ? (
                  <Text style={styles.textname}> {"- " + op?.monto}</Text>
                ) : (
                  <Text style={styles.textname}> {"+ " + op?.monto}</Text>
                )}
                <Text style={styles.textdate}>{op?.fecha}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Home;
