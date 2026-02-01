import { View , Text , TextInput} from "react-native";
import {styles} from './styles'


export function Text_Input({value,onChangeText}){

    return(
        <View style={styles.container}>
           
                <TextInput 
                style={styles.input}
                placeholder="0.00"
                placeholderTextColor="#94a3b8"
                value={value}
                onChangeText={onChangeText}
                keyboardType="numeric"
                ></TextInput>
           
        </View>
    )
}