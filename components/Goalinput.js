import { TextInput,View,Button,StyleSheet,Modal,Image } from "react-native";
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
      <Modal visible={props.visible} animationType="slide">
<View style={styles.inputCountainer}>
        <Image style={styles.image} source={require('../assets/image/goal.png')}/>
        <TextInput 
        style={styles.textInput} 
        placeholder='your course goal..' 
        defaultValue={enteredGoalText}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title='Add goal' onPress={addGoalHandler} /></View>
        <View style={styles.button}><Button title='cancel' onPress={props.onCancel} /></View>
          </View>
      </View>
      </Modal>
    );
}
export default Goalinput;
const styles=StyleSheet.create({
    inputCountainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#311b6b'
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '100%',
        padding: 8,
      },
      image:{
        width:100,
        height:100,
        margin:20,
      },
      button:{
        width:100,
        marginHorizontal:8
      }
});