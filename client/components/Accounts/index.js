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
import { getPaymentHistory } from "../../store/actions/accountActions";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Accounts() {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.account.accounts);

  const history = useSelector((state) => state.transfer.history);

  const payments = useSelector((state) => state.account.payments);
  useEffect(() => {
    if (balance !== undefined && balance !== null)
      dispatch(getTransfers(balance[0]?.idcuentas));
    if (balance !== undefined && balance !== null)
      dispatch(getPaymentHistory(balance[0]?.idcuentas));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cuentas}>
        <Text style={styles.titleCuenta}>Balance AR$</Text>
        <Text style={styles.saldo}>{balance[0]?.saldo} </Text>
      </View>

      <View style={styles.titles}>
        <Title style={styles.titleCuenta}>Recent transfers</Title>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <View style={styles.userCardRight}>
          {history?.map((op, i) => (
            <View style={styles.userCard} key={i}>
              <View>
                {op?.origin == balance[0].idcuentas ? (
                  <Text style={styles.textname}> {"- " + op?.monto}</Text>
                ) : (
                  <Text style={styles.textname}> {"+ " + op?.monto}</Text>
                )}
              </View>
              <Text style={styles.textdate}>{op.createdAt.slice(0, 10)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.titles}>
        <Title style={styles.titleCuenta}>Payment History</Title>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <View style={styles.userCardRight}>
          {payments?.map((op, i) => (
            <View style={styles.userCard} key={i}>
              <View style={styles.box}>
                <Text style={styles.textname}> {"- " + op?.monto}</Text>
                <Text style={styles.textname}> {op?.destino}</Text>
              </View>
              <Caption style={styles.textdate}>
                {op.createdAt.slice(0, 10)}
              </Caption>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Accounts;
