import { TextInput,View,Button,StyleSheet } from "react-native";
import { useState } from "react";
function Goalinput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    
      }
      function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
      }
    return (
<View style={styles.inputCountainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='your course goal..' 
        defaultValue={enteredGoalText}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
    );
}
export default Goalinput;
const styles=StyleSheet.create({
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
});