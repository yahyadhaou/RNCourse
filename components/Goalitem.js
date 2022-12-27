import {StyleSheet} from 'react-native'
import { Text,View,Pressable } from 'react-native'


function GoalItem(props) {
 return  ( 
   <View style={styles.goalIteam}>
      <Pressable  android_ripple={{color:'#dddddd'}} onPress={props.onDeleteIteam.bind(this, props.id)}
      style={({pressed})=>pressed && styles.presseItem}>
    <Text style={styles.goalText}>{ props.text}</Text>
    </Pressable> 
    </View>
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
          presseItem:{
            opacity:0.5
          },
          goalText:{
            color:'white',
            padding:8,
          }
})