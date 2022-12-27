import {StyleSheet} from 'react-native'
import { Text,View,Pressable } from 'react-native'


function GoalItem(props) {
 return  ( 
    <Pressable onPress={props.onDeleteIteam.bind(this, props.id)}>
    <View style={styles.goalIteam}>
    <Text style={styles.goalText}>{ props.text}</Text>
    </View>
    </Pressable> 
    )
}
export default GoalItem
const styles=StyleSheet.create({
    goalIteam:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        color:'white'
          },
          goalText:{
            color:'white',
          }
})