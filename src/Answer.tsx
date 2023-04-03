import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// 답변
export default Answer = ({ answer }) => {
  return (
    <View style={a_styles.answerV}>
      <View style={a_styles.answerSubV}>
        <Text style={a_styles.answerSubT}>A</Text>
      </View>
      <Text style={a_styles.answerT}>{answer}</Text>
    </View>
  );
};


const a_styles = StyleSheet.create({
  answerV: {
    flexDirection: "row",
    backgroundColor: "#F7EFE5",
    height: 70,
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 16,
  },
  answerSubV: {
    backgroundColor: "red", width: 20, height: 20, borderRadius: 15
  },
  answerSubT: {
    fontWeight: "bold", paddingLeft: 5, paddingTop: 2
  },
  answerT: {
    paddingLeft: 5,
    fontSize: 16
  }
});