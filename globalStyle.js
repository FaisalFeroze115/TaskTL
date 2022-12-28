import { StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    flexBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    shadowProperty: {
        elevation: 20,
        shadowColor: '#888888',
    },
    paddingTop40:{
        paddingTop: 40,
    },
    paddingTop30:{
        paddingTop: 30,
    },
    paddingTop20:{
        paddingTop: 20,
    },
    heading1: {
        fontSize: 25,
        color: "#364356",
        fontWeight: 'bold'
    },
    filterStyle: {
        width: 30,
        height: 25,
        marginRight: 13,
        marginTop: 5
    },
    mainWrapperPadding:{
        paddingHorizontal: 30
    },
})