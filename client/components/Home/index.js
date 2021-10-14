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


  const balance = useSelector((state) => state.account.accounts);

  console.log("cuenta",balance)
  useEffect(() => {
    if (balance[0]) {dispatch(getTransfers(balance[0].idcuentas))}; //como decirle a esta funcion que no envie nada hasta no tener un valor para poder enviar la peticion a getOperations
  }, [balance]);


  

  const transfer = useSelector((state) => state.transfer.history);

  console.log("historial transferencias", transfer)

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
            {transfer?.map((op) => (
              <View>
                <Text style={styles.textname}>{op?.monto}</Text>,
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
