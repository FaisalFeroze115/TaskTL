import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyle'

const TeacherCard = ({img, name, subject }) => {
  return (
    <View style={[styles.cardWrapper]}>
      <View>
            <Image style={styles.cardImage} source={{uri:img}}/>
            
      </View>

      <View>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardSubject}>{subject}</Text>
      </View>
    </View>
  )
}

export default TeacherCard

const styles = StyleSheet.create({
    cardWrapper: {
        width: 120,
        height: 170,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 8,
        marginRight: 15,
        shadowColor: '#888888',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardImage: {
        width: "100%",
        height: 110,
    },
    cardName: {
        fontSize: 15,
        marginTop: 5,
        color: "#364356",
        fontWeight: 'bold'
    },
    cardSubject: {
        fontSize: 13,
        color: "#364356",
    }
})