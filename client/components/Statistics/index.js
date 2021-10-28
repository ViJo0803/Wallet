import React from "react";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

function Statistics({ navigation }) {
  const transfers = useSelector((state) => state.transfer.history);

  const MyBezierLineChart = () => {
    return (
      <>
        <Text style={styles.header}>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: transfers.map((t) => t.fecha),
            datasets: [
              {
                data: transfers.map((t) => t.monto),
              },
            ],
          }}
          width={Dimensions.get("window").width - 16} // from react-native
          height={220}
          yAxisLabel={"AR$"}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };

  const MyContributionGraph = () => {
    return (
      <>
        <Text style={styles.header}>Contribution Graph</Text>
        <ContributionGraph
          values={transfers.map((t) => ({ count: t.monto, date: t.fecha }))}
          // endDate={new Date('2019-04-01')}
          numDays={105}
          width={Dimensions.get("window").width - 16}
          // height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <MyBezierLineChart />
      <MyContributionGraph />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Statistics;
