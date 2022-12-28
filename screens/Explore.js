import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'
import Teacher from '../components/teacher/Teacher'
import Institution from '../components/institution/Institution'

const Explore = () => {
  return (
    <View>
      <Header />
      <ScrollView>
          <Teacher />
          <Institution />
      </ScrollView>
    </View>
  )
}

export default Explore
