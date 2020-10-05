import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Mahith";

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native..</Text>
            <Text style={styles.greetText}>My name is {name}!!</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    greetText: {
        fontSize: 20,
    }
});

export default ComponentsScreen;