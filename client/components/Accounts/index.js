
import React, { useEffect, useMemo, useContext } from "react";

import { styles } from './styles'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity
  } from "react-native";
  import { getTransfers } from "../../store/actions/transferActions";
  import { useSelector, useDispatch } from "react-redux";

function Accounts() {

//para navegar al detalle --> navigation.navigate('TransactionDetail')



     const dispatch = useDispatch()
  
    const balance = useSelector((state) => state.account.accounts);
    console.log(balance)

    const history = useSelector((state) => state.transfer.history);
    console.log("Historial de transferencia",history)

    useEffect(() => {
        dispatch(getTransfers(balance[0].idcuentas))
    },[])


    return (

        <View style={styles.container}>
        <View>

        <Text>{balance[0].idcuentas}</Text>

        <Text>{balance[0].alias}</Text>

        </View>
      

      <ScrollView style={styles.scrollTransfer}>
        <View style={styles.userCardRight}>
          {history?.map((op, i) => (
            <TouchableOpacity style={styles.userCard}
              key={i}>
              <View>
                {op?.origin == balance[0].idcuentas ? (
                  <Text style={styles.textname}> {"- " + op?.monto}</Text>
                ) : (
                  <Text style={styles.textname}> {"+ " + op?.monto}</Text>
                )}
                <Text style={styles.textdate}>{op?.fecha}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      </View>
    )



export default Accounts;
