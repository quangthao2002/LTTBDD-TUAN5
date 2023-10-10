import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function App() {
  // const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>AAAA</Text>
      <View >
            <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.sectionStyle}>
        <Image 
        style={styles.sectionStyle} 
       >
        </Image>
        <TextInput
            style={styles.inputStyle}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Name"
            keyboardType="numeric">

          </TextInput>
         <TextInput
            style={styles.inputStyle}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="numeric">
         </TextInput>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
});