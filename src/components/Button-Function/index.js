import { Text, TouchableOpacity } from "react-native";
import {styles} from './styles'

export  function Button_Conv({children,onPress,variant='primary'}) {
    return(
        
        <TouchableOpacity style={[
            onPress ={onPress},
            styles.button,
            variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
           
        ]}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
            
        </TouchableOpacity>
    )
}