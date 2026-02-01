import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "./src/components/Button";
import { styles } from "./App-styles";
import { KeyboardAvoidingView, Platform,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { currencies } from "./src/constants/currencies";
import { Button_Conv } from './src/components/Button-Function';
import { Text_Input } from "./src/components/Text_Input";

export default function App() {
  return (
    
<KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>De :</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button key={currency.code} currency={currency}></Button>
              ))}
            </View>

            <View style={styles.viewInput}>
              <Text style={styles.label}>Valor:</Text>
              <Text_Input></Text_Input>
              <TouchableOpacity style={styles.swapButton}>
                <Text style={styles.swapButtonText}>↑↓</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.label}>Para :</Text>
              <View style={styles.currencyGrid}>
                {currencies.map((currency) => (
                  <Button
                    variant="secondary"
                    key={currency.code}
                    currency={currency}
                  ></Button>
                ))}
              </View>
            </View>
          </View>
                <Button_Conv>Converter</Button_Conv>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
