import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react';
import StyledButton from './StyledButton';

const CarItem = (props) => {
    const {name, tagline, taglineCTA, imageBackground} = props.Cars; 
  return (
     <View style={styles.carcontainer}>
       <ImageBackground 
       source={imageBackground}
       style={styles.imageBackground}
       />

       
       <View style={styles.title}>
       <Text style={styles.text}>{name}</Text>
       <Text style={styles.subtext}>
           {tagline}
            {' '}
       <Text style={styles.SubtitleCTA}>
           {taglineCTA}
       </Text>
       </Text>
     </View>
     <View style={styles.buttonContainer}>
     <StyledButton type="primary"
     content={"Custom Order"}
     onPress={() => {
         console.log("Custom Order was pressed");
     }}/>
     <StyledButton type="seconday"
     content={"Existing Inventory"}
     onPress={() => {
         console.log("Existing Inventory was pressed");
     }}/>
     </View>
     </View>
    
  );
};
const styles = StyleSheet.create({
    carcontainer:{
        width:'100%',
        height:'100%',
     },
      title:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
       },
      text:{
       fontSize:40,
       fontWeight:'500',
        
      },
      subtext:{
        fontSize:16,
        color:'#5c5e62',
      },
      SubtitleCTA:{
        textDecorationLine:'underline',

      },
      imageBackground:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonContainer:{
          position:'absolute',
          bottom:30,
          width:'100%',
      }
});
export default CarItem;