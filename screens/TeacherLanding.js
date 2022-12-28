import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const TeacherLanding = ({route, navigation}) => {
    const {teacher} = route.params
    const {img, name, subject, area} = teacher

  return (
    <View style={styles.wrapper}>
        <Image style={{width: 300, height: 300}} source={{uri:img}}/>
        <View style={styles.content}>
            <Text style={styles.textStyle}>Name: {name}</Text>
            <Text style={styles.textStyle}>Subject: {subject}</Text>
            <Text style={styles.textStyle}>Area: {area}</Text>
        </View>
        <Button title='Go Back' onPress={()=>{navigation.goBack()}} />
    </View>
  )
}

export default TeacherLanding

const styles = StyleSheet.create({
    wrapper:{
        padding: 30
    },
    content:{
        marginTop: 20,
    },
    textStyle:{
        fontSize: 25,
        marginBottom: 10
    }
})