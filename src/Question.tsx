import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons'

// 문의
export default Question = ({ question }) => {
  return (
    <View style={q_styles.questionV}>
      <View style={{ flex: 9, flexDirection: "row" }}>
        <View style={q_styles.questionSubV}>
          <Text style={q_styles.questionSubT}>Q</Text>
        </View>
        <Text style={q_styles.questionT}>{question}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <IconM
          style={q_styles.iconM}
          name="keyboard-arrow-down"
          size={34}
          color="red"
        ></IconM>
      </View>
    </View>
  );
};

const q_styles = StyleSheet.create({
  questionV: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBF5",
    height: 50,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  questionT: {
    paddingLeft: 5,
    fontSize: 16,
  },
  questionSubV: {
    backgroundColor: "red", width: 20, height: 20, borderRadius: 15
  },
  questionSubT: {
    fontWeight: "bold", paddingLeft: 5, paddingTop: 2
  },
  iconF: {
    paddingLeft: 5
  },
});