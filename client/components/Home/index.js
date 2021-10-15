import React, { useEffect, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../store/actions/accountActions";
import { getOperations } from "../../store/actions/operationsActions";


function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const balance = useSelector((state) => state.account.accounts);
  const transfer = useSelector((state) => state.operations.operations);
  const totalBalance = balance?.find((el) => el.tipomoneda === "AR$");

  useEffect(() => {
    if (user) dispatch(getAccount(user.idusuario));
  }, [dispatch, user]);

  useEffect(() => {
    if (totalBalance) dispatch(getOperations(totalBalance.idcuentas)); 
  }, [dispatch, totalBalance]);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleCuenta}>ARS</Text>
        <Text style={styles.titleCuenta}>{totalBalance?.saldo}</Text>
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
