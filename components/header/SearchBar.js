import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyle'
import { Fontisto } from '@expo/vector-icons'; 

const SearchBar = () => {
  return (
    <View style={[globalStyles.flexBox, globalStyles.paddingTop20]}>

        <View style={[globalStyles.shadowProperty,{width: '80%'}]}>
            <View style={[styles.searchBox, globalStyles.flexBox]}>
                <TextInput placeholder='Search your teacher' type="text" />
                <TouchableOpacity activeOpacity={.7} style={[styles.searchButton, globalStyles.shadowProperty]}>
                    <Fontisto  name="search" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <TouchableOpacity activeOpacity={.7}>
                <Fontisto style={{width: 28, height: 28, marginRight: 15}} name="equalizer" size={25} color="#333" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBox:{
        // width: 240,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 20
    },
    searchButton:{
        backgroundColor: "#5667FD",
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    
})