import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <Text style={styles.text} placeholder='Write your text here'></Text>
        <Button title='Add goal' ></Button>
      </View>
      <View>
        <Text>Yor lsit of your goals</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    paddingHorizontal:15,
  },

  inputcontainer: {
  flexDirection:"row",
  justifyContent:"space-around",
  marginBottom:20,
  borderBottomWidth:1,
  borderBottomColor:"#CCC", 
  paddingBottom:20, 
  },
  text: {
    borderColor:"#CCC",
    borderWidth:1,
    width:'60%',
    padding:10,
  },
});


