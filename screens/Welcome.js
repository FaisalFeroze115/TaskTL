import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
        <TouchableOpacity activeOpacity={.6} onPress={()=>{navigation.navigate('Explore')}}>
            <Image source={require('../assets/images/welcome.png')}/> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})