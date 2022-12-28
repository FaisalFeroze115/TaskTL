import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

const InstitutionFilter = ({institutionInfo, filterInstitutionData}) => {

  const [areaFilterVal, setAreaFilterVal] = useState("All Area")
  const uniqueArea = [...new Set(institutionInfo.map(item => item.area))];

  useEffect(()=>{
    filterInstitutionData(areaFilterVal)
  },[areaFilterVal])

  return (
    <View>
      <View style={{marginTop: 20}}>
            <Text style={{marginBottom: 12, color: "#636D77"}}>Area</Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={()=>{setAreaFilterVal("All Area")}} activeOpacity={.4} style={[styles.buttonStyle, areaFilterVal==="All Area" ? styles.activeButtonStyle : null]}>
                    <Text style={areaFilterVal==="All Area" ? styles.activeText : null}>All Area</Text>
                </TouchableOpacity>
                    {
                        uniqueArea.map((item, index)=>(
                            <TouchableOpacity key={index} onPress={()=>{setAreaFilterVal(item)}} activeOpacity={.4} style={[styles.buttonStyle, areaFilterVal===item ? styles.activeButtonStyle : null]}>
                                <Text style={areaFilterVal===item ? styles.activeText : null}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    }
            </View>
        </View>
    </View>
  )
}

export default InstitutionFilter

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