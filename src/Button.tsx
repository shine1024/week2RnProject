import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default Button = ({ buttonInfo , onPress }) => {
    return (
        <TouchableOpacity onPress={() => {
            onPress(buttonInfo);
        }} >
            <View style={buttonInfo.selected ? b_styles.buttonActive : b_styles.buttonInActive}>
                <Text style={b_styles.text}>{buttonInfo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const b_styles = StyleSheet.create({
    buttonActive: {
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#C3ACD0"
    },
    buttonInActive: {
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#FFFFFF"
    },
    text: {
        fontWeight: "bold"
    }
});