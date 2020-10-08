import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {    // 'props' are not just passed in the elements. We can also receive props
  return <View>
    <Text style={styles.text}>
      Hello Srijith!!
    </Text>

    <Button
      title="Go to Components Demo"
      onPress={() => navigation.navigate('Components')}  //props.navigation.navigate
    />

    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('ListExer')}
    />

    {/* <TouchableOpacity onPress={() => navigation.navigate('ListExer')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
