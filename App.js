import { StyleSheet,  View,FlatList ,Button} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/Goalitem';
import Goalinput from './components/Goalinput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modIsVisible,setmodIsVisible]=useState(false)
  function startAddGoalHandler(){
    setmodIsVisible(true)
  }
  
  
  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText)
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text:enteredGoalText ,id: Math.random().toString() },
    ])
  }
  function endGoalHandelr(){
    setmodIsVisible(false)
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=>
goal.id !== id
    )
    })
    endGoalHandelr
  }
 
  
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='add new goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      <Goalinput visible={modIsVisible} 
      onAddGoal={addGoalHandler} onCancel={endGoalHandelr} />
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={itemData=>{
          return <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteIteam={deleteGoalHandler} />
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={false} >
        </FlatList>
      </View>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
 
  goalsContainer: {
    flex: 5,
  },
  
});
