import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';


const ListScreenExercise = () => {

    const people = [
        { name: 'Mahith', age: 2 },
        { name: 'Bheemu', age: 4 },
        { name: 'Srijith', age: 24 },
        { name: 'Jithu', age: 16 },
        { name: 'appi', age: 6 },
        { name: 'japan', age: 8 },
        { name: 'naara', age: 3 },
        { name: 'minu', age: 40 },
        { name: 'eruma', age: 85 },
        { name: 'monkey', age: 30 }
    ];

    return (
        <FlatList
            keyExtractor={(person) => person.name}
            data={people}
            renderItem={({ item }) => {
                return <Text style={styles.textElement}>
                    {item.name} - Age is {item.age}
                </Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textElement: {
        marginVertical: 30,
        marginLeft: 20,
        fontSize: 20
    }
});

export default ListScreenExercise;