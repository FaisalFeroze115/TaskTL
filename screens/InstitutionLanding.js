import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import StarRating from '../components/starRating/StarRating'

const InstitutionLanding = ({route, navigation}) => {
  const {institution} = route.params
  const {img, name, rating, area, views, description } = institution  

  return (
    <View style={styles.wrapper}>
        <Image style={{width: "100%", height: 200}} source={img}/>
        <View style={styles.content}>
            <Text style={styles.textStyle}>Name: {name}</Text>
            <StarRating ratings={rating} views={views} imgWidth={25} imgHeight={25} textFont={22}/>
            <Text style={[styles.textStyle,{marginTop: 10}]}>Area: {area}</Text>
            <Text style={styles.textStyle}>Description:</Text>
            <Text style={styles.textStyle}>{description}</Text>
        </View>
        <Button title='Go Back' onPress={()=>{navigation.goBack()}} />
    </View>
  )
}

export default InstitutionLanding

const styles = StyleSheet.create({
    wrapper:{
        padding: 30
    },
    content:{
        marginTop: 20,
    },
    textStyle:{
        fontSize: 22,
        marginBottom: 5
    }
})