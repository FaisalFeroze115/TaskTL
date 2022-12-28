import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyle'
import { useFonts } from 'expo-font';

const HeaderTop = () => {

    const [fontsLoaded] = useFonts({
        'Exo-Medium': require('../../assets/fonts/Exo-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView>
            <View style={[globalStyles.flexBox, globalStyles.paddingTop20]}>
                <View>
                    <Text style={styles.headerTitle}>Good evening!</Text>
                    <Text style={styles.headerSubtitle}>Hardline Scott</Text>
                </View>
                <View style={globalStyles.shadowProperty}>
                    <Image style={styles.profilePic} source={require('../../assets/images/profilePic.png')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HeaderTop

const styles = StyleSheet.create({
    headerTitle:{
        fontSize: 32,
        color: "#364356",
        fontFamily: "Exo-Medium",
    },
    headerSubtitle:{
        fontSize: 26,
        color: "#636D77",
        fontFamily: "Exo-Medium",
    },
    profilePic: {
        width: 70,
        height: 70,
    },
})