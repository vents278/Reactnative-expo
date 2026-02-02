import { Text, TouchableOpacity } from "react-native";
import {styles} from './styles'

export  function Button({currency ,onPress,variant='primary',isSelected}) {
    return(
        
        <TouchableOpacity 
        
        onPress ={onPress}
        style={[
            styles.button,
            isSelected && (variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary)
            
        ]}>
            <Text style={styles.buttonText}>
                {currency.code}
            </Text>
            
        </TouchableOpacity>
    )
}