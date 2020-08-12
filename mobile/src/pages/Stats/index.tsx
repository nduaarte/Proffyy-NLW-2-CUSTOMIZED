import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import MatterItem from '../../components/MatterItem';
import DaysWeek from '../../components/DaysWeek';

import styles from './styles';

export default function Stats() {
  return(
    <ScrollView style={styles.container}>
      <PageHeader tittle='Meu Progresso'/>

      <View style={styles.mattersContainer}>
        <View style={styles.titleContainer}>
          <AntDesign name='book' size={43} color='#8256e5' />
          <Text style={styles.title}>Matérias Atuais</Text>
        </View>
        <MatterItem />
      </View>

      <DaysWeek />
    </ScrollView>
  );
}