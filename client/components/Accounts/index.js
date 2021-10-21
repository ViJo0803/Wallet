import React, { useEffect, useMemo, useContext } from "react";

import { styles } from "./styles";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getTransfers } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";

function Accounts() {
  //para navegar al detalle --> navigation.navigate('TransactionDetail')

  const dispatch = useDispatch();

  const balance = useSelector((state) => state.account.accounts);
  console.log(balance);

  const history = useSelector((state) => state.transfer.history);
  console.log("Historial de transferencia", history);

  useEffect(() => {
    dispatch(getTransfers(balance[0].idcuentas));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cuentas}>
        <Text style={styles.titleCuenta}>Saldo AR$</Text>
        <Text style={styles.saldo}>{balance[0]?.saldo} </Text>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <View style={styles.userCardRight}>
          {history?.map((op, i) => (
            <View style={styles.userCard} key={i}>
              <View >
                {op?.origin == balance[0].idcuentas ? (
                  <Text style={styles.textname}> {"- " + op?.monto}</Text>
                ) : (
                  <Text style={styles.textname}> {"+ " + op?.monto}</Text>
                )}

              </View>
              <Text style={styles.textdate}>{op.createdAt.slice(0,10)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Accounts;
