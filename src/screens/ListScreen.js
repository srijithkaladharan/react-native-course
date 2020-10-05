import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {
    const friends = [
        { name: 'Mahith' },
        { name: 'Bheemu' },
        { name: 'Srijith' },
        { name: 'Jithu' }
    ];

    return (              // data and renderItem are props
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({

});

export default ListScreen; 