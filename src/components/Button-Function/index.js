import { Text, TouchableOpacity } from "react-native";
import {styles} from './styles'
import {exchangeRateApi} from '../../services/api'
export  function Button_Conv({children,onPress,variant='primary'}) {
    
    async function fetchExchangeRate() {
       try {const response = await exchangeRateApi('BRL')
       console.log(response)
       if (onPress) onPress(response)
    }
    catch (error) {
        console.log(error)
    }
    }
    return(
        
        <TouchableOpacity  
        onPress ={fetchExchangeRate}
        style={[
            styles.button,
            variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
           
        ]}>
            <Text style={styles.buttonText}>
                {children}
            </Text>
            
        </TouchableOpacity>
    )
}