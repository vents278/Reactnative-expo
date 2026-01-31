
import { StyleSheet } from "react-native";
import {colors} from '../../styles/colors'

export const styles =StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal :16,
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        
    },
    buttonText: {
        color: colors.text,
        fontWeight: '500',
    },

    buttonPrimary:{
        backgroundColor: colors.primary
    },

    buttonSecondary:{
        backgroundColor: colors.secondary
    }
})