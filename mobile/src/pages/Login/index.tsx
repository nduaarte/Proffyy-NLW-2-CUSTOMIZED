import React from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import Img from '../../assets/images/give-classes-background.png';
import Logo from '../../assets/images/logo.png';

export default function Login() {
  return(
    <ImageBackground style={styles.container} resizeMode='center' source={Img} >
      <Image style={styles.logo} source={Logo} />
      <Text>Sua plataforma de {'\n'} estudos online.</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.textLogin}>Login</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.buttonEnter}>
          <Text style={styles.buttonEnterText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}