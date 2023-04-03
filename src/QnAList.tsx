import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Question from './Question'
import Answer from './Answer'

// 문의
export default QnAList = ({ qnaInfos, onToggle }) => {
  return (
    <FlatList
      data={qnaInfos}
      renderItem={({ item }) => {
        return (
          <View>
            {!item.hidden && 
              <View>
                <TouchableOpacity onPress={() => {
                  onToggle(item.id);
                }} >
                  <Question question={item.question} />
                </TouchableOpacity>
                {item.selected && <Answer answer={item.answer} />}
              </View>
            }
          </View>
        );
      }}
    />
  );
}