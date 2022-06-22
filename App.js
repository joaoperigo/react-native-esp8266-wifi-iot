import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native';

export default function App() {

  const [isEnable, setIsEnable] = useState(false);

  const isSwitch = () => {
    setIsEnable(previousState => !previousState);
  }

  const [isEnable2, setIsEnable2] = useState(false);

  const isSwitch2 = () => {
    setIsEnable2(previousState => !previousState);
  }

  return (
    <>

    <StatusBar />

    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Led vermelha</Text>
        
        <View styles={styles.status}>
          <Text style={isEnable ? styles.ON : styles.OFF}> {isEnable ? 'LIGADO' : 'DESLIGADO'}</Text>
          <Switch 
            onValueChange={isSwitch}
            value={isEnable}
          />
        </View>

        <Text style={styles.titulo}>Led verde</Text>
        <View styles={styles.status}>
          <Text style={isEnable2 ? styles.ON : styles.OFF}>{isEnable2 ? 'LIGADO' : 'DESLIGADO'}</Text>
          <Switch 
            onValueChange={isSwitch2}
            value={isEnable2}
          />
        </View>

        <Text style={styles.titulo}>Umidade</Text>
        <Text style={styles.details}>Medida: 10%</Text>

        <Text style={styles.titulo}>Temperatura</Text>
        <Text style={styles.details}>Medida: 25ºC</Text>

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
  details: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 25,
    color: '#696969'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ON: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 15,
    color: '#22ec22',
    fontWeight: 'bold'
  },
  OFF: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 15,
    color: '#cc4040',
    fontWeight: 'bold'
  },
});
