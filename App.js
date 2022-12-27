import { StyleSheet,  View, 
  Button,
   TextInput,
  FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/Goalitem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)

  }
  function addGoalHandler() {
    console.log(enteredGoalText)
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text:enteredGoalText ,id: Math.random().toString() },
    ])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCountainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='your course goal' 
        defaultValue={enteredGoalText}
          // onChangeText={newText => setEnteredGoalText(newText)} />
          onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={iteamData=>{
          return <GoalItem text={iteamData.item.text}/>
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={false} >
        </FlatList>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputCountainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  
});
