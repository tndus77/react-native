import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './colors';
import { Fontisto } from '@expo/vector-icons';

const STORAGE_KEY = "@toDos"
export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [completed, setCompleted] = useState(true);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    loadToDos()
  }, [])

  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payLoad) => setText(payLoad);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }

  const saveState = async (toSave) => {
    await AsyncStorage.setItem("@current", JSON.stringify(toSave));
  }

  const loadToDos = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s));
    setWorking(JSON.parse(await AsyncStorage.getItem("@current")))
  }

  /*Todo List 추가 기능 */
  const addTodo = () => {
    if(text === ""){
      return;
    }
    const newToDos = {
      ...toDos, 
      [Date.now()]: { text, working, completed: false },
    };

    setToDos(newToDos);
    saveToDos(newToDos);
    saveState(working);
    setText("");
  }

  /*Todo List 완료 기능 */
  const completeToDo = (key) => {
    const newToDos = {...toDos};
    newToDos[key] = {...newToDos[key], completed: !newToDos[key].completed };
    setToDos(newToDos);
    saveToDos(newToDos);
    console.log(newToDos[key]);
  };
  
  /*Todo List 삭제 기능 */
  const deleteToDo = async (key) => {
    Alert.alert("삭제", "정말 지우시겠습니까?", [{text: "취소"}, {
      text: "삭제", 
      style: "destructive",
      onPress: () => {
        const newToDos = {...toDos};
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
    },
  },]
  );
  }

  /*Todo List 수정 기능 */
  // const editToDo = async (key) => {
  //   const handleChange = (e) => {
  //     setText(e.target.value);
  //   }

  //   const handleKeyDown = (e) => {
  //     if(e.key === "Enter") {
  //       setEditable(!editable);
  //     }
  //   }
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btn, color: working ? 'white': theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btn, color: !working ? 'white': theme.grey }}>Travel</Text>
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
        toDos[key].working === working ? <View style={styles.toDo} key={key}>
          <Text 
           style={
            {...styles.toDoText,
            textDecorationLine: toDos[key].completed ? "line-through" : "none",
            color: toDos[key].completed ? theme.grey : "white"}}>{toDos[key].text}</Text>
          {/* <TouchableOpacity onPress={() => editToDo(key)}>
            <Fontisto name="eraser" size={24} color="white" />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => completeToDo(key)}>
            {toDos[key].completed ? <Fontisto name="checkbox-active" size={16} color="white"/> : <Fontisto name="checkbox-passive" size={16} color="white"/>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteToDo(key)}>
            <Fontisto name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>: null
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  toDoText: {
    color: 'white',
    fontSize: 20,
    width: "70%",
    fontWeight: "600",
  }
});
