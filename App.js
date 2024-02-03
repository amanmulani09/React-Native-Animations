import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Intro from './src/Introduction/Intro';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Intro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});
