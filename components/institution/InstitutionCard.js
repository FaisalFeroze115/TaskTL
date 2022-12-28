import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import StarRating from '../starRating/StarRating'

const InstitutionCard = ({name,rating,views,area,description}) => {
  return (
    <View>

        <View style={styles.institutionCardWrapper}>

          <View style={{flex: 2.5, marginRight: 10}}>
            <Image style={{width: '100%', height: 150}} source={require('../../assets/images/institution1.png')}/> 
          </View>

          <View style={{flex: 3,}}>
            <Text style={styles.institutionName}>{name}</Text>
            <StarRating ratings={rating} views={views}/>
            <Text style={styles.institutionArea}>{area}</Text>
            <Text style={styles.institutionDescription}>{description}</Text>
          </View>

        </View>

    </View>
    
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
  },
})