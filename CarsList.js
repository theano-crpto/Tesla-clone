import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Cars from './Cars.js';
import CarItem from './CarItem.js';

const CarsList = (props) => {
    
  return (
    <View style={styles.container}>
     <Text>
         Not just a component
     </Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
       // width:'100%',
    }
});
export default CarsList;

