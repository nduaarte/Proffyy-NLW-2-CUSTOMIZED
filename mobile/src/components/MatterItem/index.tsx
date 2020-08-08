import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

export default function () {
  return(
    <View style={styles.container}>
      <View style={styles.matterList}>
        <View style={styles.row}>
          <FontAwesome name='circle' size={15} color='#6641ba' /> 
          <Text style={styles.matterTitle}>{' '} Matemática</Text>
        </View>

        <View style={styles.row}>
          <Progress.Bar height={15} progress={12/22} width={200} borderWidth={2} borderColor='#8256e5' color='#8256e5' />
          <Text style={styles.progressMatter}>{' '}12/22 Aulas</Text>
        </View>
      </View>

      <View style={styles.matterList}>
        <View style={styles.row}>
          <FontAwesome name='circle' size={15} color='#6641ba' /> 
          <Text style={styles.matterTitle}>{' '} Física</Text>
        </View>

        <View style={styles.row}>
          <Progress.Bar height={15} progress={8/31} width={200} borderWidth={2} borderColor='#8256e5' color='#8256e5' />
          <Text style={styles.progressMatter}>{' '}8/31 Aulas</Text>
        </View>
      </View>

      <View style={styles.matterList}>
        <View style={styles.row}>
          <FontAwesome name='circle' size={15} color='#6641ba' /> 
          <Text style={styles.matterTitle}>{' '} Química</Text>
        </View>

        <View style={styles.row}>
          <Progress.Bar height={15} progress={26/36} width={200} borderWidth={2} borderColor='#8256e5' color='#8256e5' />
          <Text style={styles.progressMatter}>{' '}26/36 Aulas</Text>
        </View>
      </View>
    </View>
  );
}