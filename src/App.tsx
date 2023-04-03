import React, { useState, type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons'
import SearchBox from './SearchBox'
import Navigation from './Navigation'
import Line from './Line'
import QnAList from './QnAList';

type QnA = {
  id: string,
  question: string,
  answer: string,
  selected: boolean,
  hidden: boolean
};

type Button = {
  id: string,
  title: string,
  selected: boolean
};

// 앱
const App = () => {
  // qna 정보
  const [qnaInfos, setQnAInfos] = useState([
    {
      id: 'qna1',
      question: '코멘토는 어떤 서비스인가요?',
      answer: '서비스 어쩌구',
      selected: false,
      hidden: false
    },
    {
      id: 'qna2',
      question: '코멘토 어플은 어떻게 다운받나요?',
      answer: '서비스 어쩌구',
      selected: false,
      hidden: false
    },
    {
      id: 'qna3',
      question: '코멘토의 이용방법은 어떻게 되나요?',
      answer: '서비스 어쩌구',
      selected: false,
      hidden: false
    },
    {
      id: 'qna4',
      question: '코멘토 고객센터는 어디인가요?',
      answer: '서비스 어쩌구',
      selected: false,
      hidden: false
    },
  ]);

  // 검색창 활성/비활성
  const [isShowSearchBox, setHideSearchBox] = useState(true);

  // 버튼 정보
  const [buttonInfos, setButtonInfos] = useState([
    {
      id: 'button1',
      title: '전체보기',
      selected: true
    },
    {
      id: 'button2',
      title: '서비스',
      selected: false
    },
    {
      id: 'button3',
      title: '어플',
      selected: false
    },
    {
      id: 'button4',
      title: '이용방법',
      selected: false
    },
    {
      id: 'button5',
      title: '고객센터',
      selected: false
    },
  ]);

  // 검색어 정보
  const [searchText, setSearchText] = useState('');

  // Q&A 내용 필터
  const handleFilteredQnA = (searchText, qnaInfos) => {
    const updateQnA = qnaInfos.map((qnaInfo) => {
      qnaInfo.hidden = searchText === '전체보기' ? false : !qnaInfo.question.includes(searchText);
      return qnaInfo;
    });
    console.log(updateQnA);
  };

  // Q&A 토글
  const onToggle = (id: string) => {
    const updateQnAInfos = qnaInfos.map((qna) => {
      return qna.id === id ? { ...qna, selected: !qna.selected } : qna;
    });
    setQnAInfos(updateQnAInfos);
  };

  // 버튼 클릭
  const onPress = (clickedButtonInfo) => {
    clickedButtonInfo.title === '전체보기' ? setHideSearchBox(true) : setHideSearchBox(false);
    const updateButtonInfos = buttonInfos.map((buttonInfo) => {
      const clickedButtonId = clickedButtonInfo.id;
      if (buttonInfo.id === clickedButtonId && buttonInfo.selected) return buttonInfo;
      return buttonInfo.id === clickedButtonId ? { ...buttonInfo, selected: !buttonInfo.selected } :
        { ...buttonInfo, selected: false };
    });
    setButtonInfos(updateButtonInfos);
    handleFilteredQnA(clickedButtonInfo.title, qnaInfos);
  };

  // 검색어 입력
  const onChangeText = (searchText) => {
    setSearchText(searchText);
    handleFilteredQnA(searchText, qnaInfos);
  };

  return (
    <SafeAreaView style={a_styles.container}>
      <Navigation buttonInfos={buttonInfos} onPress={onPress} />
      <SearchBox isShowSearchBox={isShowSearchBox} onChangeText={onChangeText} />
      <Line />
      <QnAList qnaInfos={qnaInfos} onToggle={onToggle} />
    </SafeAreaView>
  );
};


const a_styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
