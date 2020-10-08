import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {
    const friends = [
        { name: 'Mahith' }, //key: '1' either set key here or set it in the FlatList
        { name: 'Bheemu' },
        { name: 'Srijith' },
        { name: 'Jithu' },
        { name: 'appi' },
        { name: 'japan' },
        { name: 'naara' },
        { name: 'minu' },
        { name: 'eruma' },
        { name: 'monkey' }
    ];

    return (              // data and renderItem are props of Flatlist
        <FlatList
            //horizontal   //horizonatally scrollable
            //showsHorizontalScrollIndicator={false}  // hides the scroll bar in the bottom
            keyExtractor={(friend) => friend.name}    //key should be UNIQUE and a STRING
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 60,
    }
});

export default ListScreen; 