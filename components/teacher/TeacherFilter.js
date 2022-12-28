import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

const TeacherFilter = ({teacherInfo, filterTeacherData}) => {
  
  const [areaFilterVal, setAreaFilterVal] = useState("All Area")
  const [subjectFilterVal, setSubjectFilterVal] = useState("All Subject")

  const uniqueArea = [...new Set(teacherInfo.map(item => item.area))];
  const uniqueSubject = [...new Set(teacherInfo.map(item => item.subject))];

  useEffect(()=>{
    filterTeacherData(areaFilterVal,subjectFilterVal)
  },[areaFilterVal, subjectFilterVal])

  const ButtonGroup = ({filterVal, setFilterVal, uniqueVal, title}) => {
    return(
        <View style={{marginTop: 20}}>
            <Text style={{marginBottom: 12, color: "#636D77"}}>{title}</Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={()=>{setFilterVal(`All ${title}`)}} activeOpacity={.4} style={[styles.buttonStyle, filterVal===`All ${title}` ? styles.activeButtonStyle : null]}>
                    <Text style={filterVal===`All ${title}` ? styles.activeText : null}>All {title}</Text>
                </TouchableOpacity>
                    {
                        uniqueVal.map((item, index)=>(
                            <TouchableOpacity key={index} onPress={()=>{setFilterVal(item)}} activeOpacity={.4} style={[styles.buttonStyle, filterVal===item ? styles.activeButtonStyle : null]}>
                                <Text style={filterVal===item ? styles.activeText : null}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    }
            </View>
        </View>
    )
  }

  return (
    <View>
        <ButtonGroup filterVal={areaFilterVal} setFilterVal={setAreaFilterVal} uniqueVal={uniqueArea} title="Area"/>
        <ButtonGroup filterVal={subjectFilterVal} setFilterVal={setSubjectFilterVal} uniqueVal={uniqueSubject} title="Subject"/>
    </View>
    
  )
}

export default TeacherFilter

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap'
    },
    buttonStyle: {
        padding: 5,
        backgroundColor: "#fff",
        maxWidth: 80,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 12,
        marginTop: 10
    },
    activeButtonStyle: {
        backgroundColor: "#5667FD",
    },
    activeText: {
        color: "#fff"
    }
})