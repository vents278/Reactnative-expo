import { StyleSheet } from "react-native";
import {colors} from '../../styles/colors'

export const styles =StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal :24,
        paddingVertical: 18,
        borderRadius: 4,
        alignItems: 'center',
        
    },
    buttonText: {
        color: colors.text,
        fontWeight: '500',
        fontSize:20
    },

    buttonPrimary:{
        backgroundColor: colors.primary
    },

    buttonSecondary:{
        backgroundColor: colors.secondary
    },

    disabled: {
        backgroundColor: colors.disabled,
      }
   
})