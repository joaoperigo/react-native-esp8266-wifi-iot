import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Led vermelha</Text>
        <Text style={styles.detalhes}>Ligado</Text>


        <Text style={styles.titulo}>Led verde</Text>
        <Text style={styles.detalhes}>Ligado</Text>

        <Text style={styles.titulo}>Umidade</Text>
        <Text style={styles.detalhes}>Medida: 10%</Text>

        <Text style={styles.titulo}>Temperatura</Text>
        <Text style={styles.detalhes}>Medida: 25ºC</Text>

      </View>
    </ScrollView>
    <Text style={{alignSelf: 'center'}}>Versão alfa 0.1</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 25
  },
  detalhes: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 25,
    color: '#696969'
  }
});
