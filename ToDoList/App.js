import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payLoad) => setText(payLoad);
  const addTodo = () => {
    if(text === ""){
      return;
    }
    const newToDos = {...toDos, [Date.now()]: { text, work: working }}
    setToDos(newToDos);
    setText("");
    console.log(toDos)
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btn, color: working ? 'white': theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btn, color: working ? theme.grey : 'white'}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        onSubmitEditing={addTodo}
        placeholder={working ? "Add a To Do": "Where do you want to go?"}
        keyboardAppearance={'default'}
        returnKeyType={'send'}></TextInput>
      </View>
      <ScrollView>
        {Object.keys(toDos).map(key => 
        <View style={styles.toDo}key={key}>
          <Text style={styles.toDoText}>{toDos[key].text}</Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'space-between'  
  },  
  btn: {
    fontSize: 44,
    fontWeight: "600",
  },
  input: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  toDoText: {
    color: 'white',
    fontSize: 18,
  }
});
