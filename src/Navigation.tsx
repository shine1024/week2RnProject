import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';


type Button = {
    id: string,
    title: string,
    selected: false
};

// 네비게이션바
export default Navigation = ({ buttonInfos, onPress }) => {
    return (
        <View style={n_styles.navigation}>
            {buttonInfos.map((buttonInfo) => {
                return (
                    <Button key={buttonInfo.id} buttonInfo={buttonInfo} onPress={onPress} />
                );
            })}
        </View>
    );
};

const n_styles = StyleSheet.create({
    navigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});