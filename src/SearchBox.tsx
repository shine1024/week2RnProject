import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

//검색 입력텍스트
export default SearchBox = ({ isShowSearchBox, onChangeText }) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "center"
    }}>
      {isShowSearchBox &&
        <TextInput
          style={s_styles.searchBox}
          onChangeText={(onChangeText)}
          placeholder="검색어를 입력해주세요"
        />
      }
    </View>
  );
};

const s_styles = StyleSheet.create({
  searchBox: {
    width: 350,
    height: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10
  }
});