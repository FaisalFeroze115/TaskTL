import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Welcome from './screens/Welcome';
import Explore from './screens/Explore';
import TeacherLanding from './screens/TeacherLanding';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" component={Welcome} />

          <Stack.Screen name="Explore" component={Explore} /> 

          <Stack.Screen name="TeacherLanding" component={TeacherLanding} options={{ title: 'Teacher Profile' }} />

        </Stack.Navigator>
      </NavigationContainer>

      {/* <Explore /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 30
  },
});
