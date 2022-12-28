import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './components/header/Header';
import Teacher from './components/teacher/Teacher';
import Institution from './components/institution/Institution';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>

          <Teacher />
          <Institution />

      </ScrollView>
      
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
