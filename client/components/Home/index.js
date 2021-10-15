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

 
  console.log("this are the Route props", route);

 
  useEffect(() => {
     dispatch(getAccount(route.params.user.idusuario));
  }, [dispatch]);
  const balance = useSelector((state) => state.account.accounts);
  console.log("cuenta", balance);
  useEffect(() => {
    if (balance[0]) {
      dispatch(getTransfers(balance[0].idcuentas));
    } 
  }, [balance]);
  const transfers = useSelector((state) => state.transfer.history);


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
