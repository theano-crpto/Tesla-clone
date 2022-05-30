import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const StyledButton = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    const {type, onPress, content} = props;
    const backgroundColor = type === 'primary' ? '#171A20CC':'#FFFFFFA6';
    const textColor = type ==='primary' ? '#FFFFFF':'#171A20';
  return (
    <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor }]}
            onPress={()=>{
                console.log('Hey there')
            }}
        >
            <Text style={[styles.text, {color: textColor }]}>{content}</Text>
        </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:10,
    },
    text:{
        fontSize:12,
        fontWeight:'500',
        textTransform:'uppercase',
    },
    button: {
        backgroundColor:'#fff',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,

    }
});
export default StyledButton;
