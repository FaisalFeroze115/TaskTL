import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import InstitutionCard from './InstitutionCard'
import { globalStyles } from '../../globalStyle'
import { institutionData } from '../../data/institutionData'
import { Fontisto } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import InstitutionFilter from './InstitutionFilter'

const Institution = () => {

  const [institutionInfo, setInstitutionInfo] = useState(institutionData)
  const [showInstitutionFilter, setShowInstitutionFilter] = useState(false)

  const [fontsLoaded] = useFonts({
    'Exo-Medium': require('../../assets/fonts/Exo-Medium.ttf'),
  });

  if (!fontsLoaded) {
      return null;
  }

  const onFilterPressed = ()=> {
    setShowInstitutionFilter((prev)=> !prev)
  }

  const filterInstitutionData = (area) => {
    if(area === "All Area"){
      setInstitutionInfo(institutionData)
    }else{
      let newInstitution = institutionData.filter(item => item.area == area)
      setInstitutionInfo(newInstitution)
    }
  }

  return (
    <View style={globalStyles.mainWrapperPadding}>
      
      <View style={globalStyles.flexBox}>
          <Text style={[globalStyles.heading1, {fontFamily: "Exo-Medium"}]}>Popular Institution</Text>
          {/* <Image style={globalStyles.filterStyle} source={require('../../assets/images/filterDeactive.png')}/> */}
          <TouchableOpacity onPress={onFilterPressed} activeOpacity={.4}>
              <Fontisto style={globalStyles.filterStyle} name="filter" size={25} color={showInstitutionFilter? "#5667FD": "#636D77"} />
          </TouchableOpacity>
      </View>

      {showInstitutionFilter ? 
          ( <InstitutionFilter institutionInfo={institutionData} filterInstitutionData={filterInstitutionData}/> ) : null
      }

      <View style={{paddingVertical: 30}}>
        {/* <FlatList

            showsHorizontalScrollIndicator={false}
            data={institutionInfo}
            renderItem={ ({ item }) => (
                <InstitutionCard name={item.name} rating={item.rating} views={item.views} area={item.area} description={item.description}/>
                )}
            keyExtractor={item => item.id}
        /> */}

        {
          institutionInfo.map(item => (
            <InstitutionCard key={item.id} name={item.name} rating={item.rating} views={item.views} area={item.area} description={item.description}/>
          ))
        }

      </View>

      <View style={{height: 200}}></View>

      
    </View>
  )
}

export default Institution

const styles = StyleSheet.create({})