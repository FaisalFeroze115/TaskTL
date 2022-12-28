import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import InstitutionCard from './InstitutionCard'
import { globalStyles } from '../../globalStyle'
import { institutionData } from '../../data/institutionData'
import { Fontisto } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import InstitutionFilter from './InstitutionFilter'

const Institution = ({navigation}) => {

  const [institutionInfo, setInstitutionInfo] = useState(institutionData)
  const [showInstitutionFilter, setShowInstitutionFilter] = useState(false)

  const [fontsLoaded] = useFonts({
    'Exo-Medium': require('../../assets/fonts/Exo-Medium.ttf'),
  });

  const filterInstitutionData = (area) => {
    if(area === "All Area"){
      setInstitutionInfo(institutionData)
    }else{
      let newInstitution = institutionData.filter(item => item.area == area)
      setInstitutionInfo(newInstitution)
    }
  }

  useEffect(()=>{
    filterInstitutionData("All Area")
  },[showInstitutionFilter])

  if (!fontsLoaded) {
      return null;
  }

  const onFilterPressed = ()=> {
    setShowInstitutionFilter((prev)=> !prev)
  }

  return (
    <View style={globalStyles.mainWrapperPadding}>
      
      <View style={globalStyles.flexBox}>
          <Text style={[globalStyles.heading1, {fontFamily: "Exo-Medium"}]}>Popular Institution</Text>
          <TouchableOpacity onPress={onFilterPressed} activeOpacity={.4}>
              <Fontisto style={globalStyles.filterStyle} name="filter" size={25} color={showInstitutionFilter? "#5667FD": "#636D77"} />
          </TouchableOpacity>
      </View>

      {showInstitutionFilter ? 
          ( <InstitutionFilter institutionInfo={institutionData} filterInstitutionData={filterInstitutionData}/> ) : null
      }

      <View style={{paddingVertical: 30}}>
        {
          institutionInfo.map(item => (
            <InstitutionCard navigation={navigation} key={item.id} item={item} />
          ))
        }
      </View>

      <View style={{height: 200}}></View>
  
    </View>
  )
}

export default Institution

const styles = StyleSheet.create({})