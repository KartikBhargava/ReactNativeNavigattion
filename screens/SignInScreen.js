import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const SignInScreen =() =>{

    return (
        <View style= {styles.container} >
            <Text>SignInScreen</Text>
        </View>
    )
}
export default SignInScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });
  