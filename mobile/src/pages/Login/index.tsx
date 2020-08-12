import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import Img from '../../assets/images/give-classes-background.png';

export default function Login() {
  return(
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <ImageBackground style={styles.bannerContainer} resizeMode='center' source={Img}>
        <Text style={styles.logo}>
          Proffy {'\n'}
          <Text style={styles.description}>Sua plataforma de {'\n'}estudos online.</Text>
        </Text>
      </ImageBackground>

      <View style={styles.loginContainer}>
        <View style={styles.row}>
          <Text style={styles.textLogin}>Fazer Login</Text>
          <TouchableOpacity>
            <Text style={styles.buttonCreateAccText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>

        <TextInput style={styles.input} placeholder='email' />
        <TextInput style={styles.input} placeholder='senha' />

        <TouchableOpacity style={styles.buttonEnter}>
          <Text style={styles.buttonEnterText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.buttonForgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}