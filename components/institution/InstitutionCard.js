import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StarRating from '../starRating/StarRating'

const InstitutionCard = ({item,navigation}) => {
  const {name,rating,views,area,description,img} = item;  

  const viewInstitution = () => {
    navigation.navigate('InstitutionLanding', {institution: item})
  }

  return (
    <TouchableOpacity activeOpacity={.7} onPress={viewInstitution}>
        <View style={styles.institutionCardWrapper}>
          <View style={{flex: 2.5, marginRight: 10}}>
            <Image style={{width: '100%', height: 150}} source={img}/> 
          </View>

          <View style={{flex: 3,}}>
            <Text style={styles.institutionName}>{name}</Text>
            <StarRating ratings={rating} views={views} imgWidth={12} imgHeight={12} textFont={12}/>
            <Text style={styles.institutionArea}>{area}</Text>
            <Text style={styles.institutionDescription}>{description}</Text>
          </View>
        </View>
    </TouchableOpacity>
    
  )
}

export default InstitutionCard

const styles = StyleSheet.create({
  institutionCardWrapper:{
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15
  },
  institutionName:{
    fontSize: 20,
    color: "#364356",
    marginBottom: 4
  },
  institutionRating:{
    fontSize: 9,
    color: "#364356"
  },
  institutionArea:{
    fontSize: 13,
    marginTop: 10,
    color: "#364356",
    marginBottom: 5,
  },
  institutionDescription:{
    fontSize: 12,
    lineHeight: 18
  }
})