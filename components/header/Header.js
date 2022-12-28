import { View } from 'react-native'
import React from 'react'
import HeaderTop from './HeaderTop'
import SearchBar from './SearchBar'
import { globalStyles } from '../../globalStyle'

const Header = () => {
  return (
    <View style={[globalStyles.mainWrapperPadding,{paddingBottom: 30}]}>
        <HeaderTop />
        <SearchBar />
    </View>
  )
}

export default Header 
