import { StyleSheet } from "react-native";
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
         
    container :{
        marginTop:24,
        marginBottom:16,
        backgroundColor: colors.cardBackground,
        padding: 24,
        borderRadius: 16,
    }, 
    
    label :{
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
    },

    amount :{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom:14
    },

    rate :{
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary,
        
    },
     




})