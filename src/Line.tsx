import React from 'react';
import { View, StyleSheet, } from 'react-native';

// 구분선
export default Line = () => {
  return (
    <View style={l_styles.line}></View>
  );
};

const l_styles = StyleSheet.create({
  line: {
    backgroundColor: "#F7EFE5",
    height: 20
  }
});