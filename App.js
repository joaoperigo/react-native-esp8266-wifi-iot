import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity } from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

import axios from 'axios';

export default function App() {

  // constants of RED led
  const [isEnable, setIsEnable] = useState(false);
  const isSwitch = () => {
    setIsEnable(previousState => !previousState);
  }

  const ledRed = () => {
    if(isEnable == false) {
      axios.get('endereco esp/on').then(response => {
        console.log('Led vermelha ligada');
      })
    }
    else {
      axios.get('endereco esp/off').then(response => {
        console.log('Led vermelha desligada');
      })
    }
  }


  // constants of GREEN led
  const [isEnable2, setIsEnable2] = useState(false);
  const isSwitch2 = () => {
    setIsEnable2(previousState => !previousState);
  }

  const ledGreen = () => {
    if(isEnable2 == false) {
      axios.get('endereco esp/onGreen').then(response => {
        console.log('Led verde ligada');
      })
    }
    else {
      axios.get('endereco esp/offGreen').then(response => {
        console.log('Led verde desligada');
      })
    }
  }


  // constants of Humidity led
  const [dhtHumi, setDhtHumi] = useState('--');

  const humidity = () => {
    axios.get('endereco esp/dht11/humidity').then(response => {
      setDhtTemp(dhtHumidity => response.data)
      console.log('Dado recuperado com sucesso')
    })
  }


  // constants of Temperature led
  const [dhtTemp, setDhtTemp] = useState('--');

  const temperature = () => {
    axios.get('endereco esp/dht11/temperature').then(response => {
      setDhtTemp(dhtTemperature => response.data)
      console.log('Dado recuperado com sucesso')
    })
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
        <View style={styles.status}>
          <Text style={styles.details}>Medida: <Text style={styles.value}>{dhtHumi}</Text>%</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={humidity}>
              <MaterialIcons name="sync" size={45} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.titulo}>Temperatura</Text>
        <View style={styles.status}>
          <Text style={styles.details}>Medida: <Text style={styles.value}>{dhtTemp}</Text>ºC</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={temperature}>
              <MaterialIcons name="sync" size={45} color={'#fff'} />
            </TouchableOpacity>
          </View> 
        </View>

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
  button: {
    alignSelf: 'center',
    backgroundColor: '#2ecc71',
    marginTop: 25,
    borderRadius: 4
  },
  value: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4b8b3b'
  }
});
