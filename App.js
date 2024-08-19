import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState({
    first: '',
    second: '',
  });
  const [result, setResult] = useState('');

  const handleTotal = () => {
    setResult(Number(numbers.first) + Number(numbers.second));
  }

  const handleDifference = () => {
    setResult(parseFloat(numbers.first) - parseFloat(numbers.second));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        value={numbers.first}
        inputMode='numeric'
        returnKeyType='done'
        clearTextOnFocus={true}
        onFocus={() => setResult('')}
        onChangeText={text => setNumbers({ ...numbers, first: text })}
      />
      <TextInput
        style={styles.input}
        value={numbers.second}
        inputMode='numeric'
        returnKeyType='done'
        clearTextOnFocus={true}
        onFocus={() => setResult('')}
        onChangeText={text => setNumbers({ ...numbers, second: text })}
      />
      <View style={styles.buttonContainer}>
        <Button size="lg" title='+' onPress={handleTotal} />
        <Button title='-' onPress={handleDifference}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    width: 150,
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
