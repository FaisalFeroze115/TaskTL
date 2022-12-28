import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { globalStyles } from '../../globalStyle'
import TeacherCard from './TeacherCard'
import { teacherData } from '../../data/teacherData'
import { Fontisto } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import TeacherFilter from './TeacherFilter';

const Teacher = ({navigation}) => {
  
  const [teacherInfo, setTeacherInfo] = useState(teacherData)
  const [showTeacherFilter, setShowTeacherFilter] = useState(false)

  const [fontsLoaded] = useFonts({
      'Exo-Medium': require('../../assets/fonts/Exo-Medium.ttf'),
  });

  const filterTeacherData = (area, subject) => {
    if(area === "All Area" && subject === "All Subject"){
        setTeacherInfo(teacherData)
    }else if(area === "All Area" && subject !== "All Subject"){
        let newTeacher = teacherData.filter(item => item.subject == subject)
        setTeacherInfo(newTeacher)
    }else if(area !== "All Area" && subject === "All Subject"){
        let newTeacher = teacherData.filter(item => item.area == area)
        setTeacherInfo(newTeacher)
    }else{
        let newTeacherArea = teacherData.filter(item => item.area == area && item.subject == subject)
        setTeacherInfo(newTeacherArea)
    }
  }

  useEffect(()=>{
    filterTeacherData("All Area","All Subject")
  },[showTeacherFilter])

  if (!fontsLoaded) {
      return null;
  }

  const onFilterPressed = ()=> {
    setShowTeacherFilter((prev)=> !prev)
  }

  return (
    <View>
        <View style={globalStyles.mainWrapperPadding}>
            <View style={globalStyles.flexBox}>
                <Text style={[globalStyles.heading1, {fontFamily: "Exo-Medium"}]}>Popular Teachers</Text>
                {/* <Image style={globalStyles.filterStyle} source={require('../../assets/images/filterDeactive.png')}/> */}
                <TouchableOpacity onPress={onFilterPressed} activeOpacity={.4}>
                    <Fontisto style={globalStyles.filterStyle} name="filter" size={25} color={showTeacherFilter? "#5667FD": "#636D77"} />
                </TouchableOpacity>
            </View>

            {showTeacherFilter ? 
                ( <TeacherFilter teacherInfo={teacherData} filterTeacherData={filterTeacherData}/> ) : null
            }
            
        </View>

        <View style={styles.sliderWrapper}>
            {
            teacherInfo.length > 0 ? 
                <FlatList
                    style={styles.flatListStyle}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={teacherInfo}
                    renderItem={ ({ item }) => (
                        <TeacherCard navigation={navigation} item={item}/>
                    )}
                    keyExtractor={item => item.id}
                /> : <Text style={{padding: 30, fontSize: 25, color: '#EE4B2B'}}>No Data Available</Text>
            }
            
        </View>
    </View>
  )
}

export default Teacher

const styles = StyleSheet.create({
    sliderWrapper: {
        paddingVertical: 30,
       
    },
    flatListStyle: {
        backgroundColor: '#F4F5F9', 
        paddingBottom: 25,
        marginLeft: 30, 
        borderRadius: 10,
    }
})