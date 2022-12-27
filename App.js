import { StyleSheet,  View,FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/Goalitem';
import Goalinput from './components/Goalinput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  
  
  function addGoalHandler(enteredGoalText) {
    
    console.log(enteredGoalText)
    setCourseGoals((currentCourseGoals)=>[
      ...currentCourseGoals,
      {text:enteredGoalText ,id: Math.random().toString() },
    ])
  }
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=>
goal.id !== id
    )
    })
  }
 
  
  return (
    <View style={styles.appContainer}>
      <Goalinput onAddGoal={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
 
  goalsContainer: {
    flex: 5,
  },
  
});
