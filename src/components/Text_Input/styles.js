
import { StyleSheet } from "react-native";
import {colors} from '../../styles/colors'

export const styles =StyleSheet.create({
    container :{
        marginBottom:16,

    },

    label :{
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 16,
       

    },

    input :{
        backgroundColor: colors.inputBackground,
        paddingHorizontal :24,
        paddingVertical: 18,
        borderRadius: 4,
        color: colors.text,
        

    }
})