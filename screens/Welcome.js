import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {

    const goToExplore = () => {
        navigation.navigate('Explore')
    }

  return (
    <SafeAreaView style={styles.wrapper}>
        <TouchableOpacity activeOpacity={.8} onPress={goToExplore}>
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