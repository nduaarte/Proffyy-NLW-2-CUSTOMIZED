import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 6
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 5
  },

  day: {
    alignItems: 'center'
  },

  todayDate: {
    fontFamily: 'Poppins_600SemiBold'
  },

  green: {
    color: '#2b7a23'
  },

  weekDescription: {
    fontFamily: 'Archivo_400Regular',
    color: '#3f3a4d',
    padding: 20
  },

  maxDayContainer: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Poppins_600SemiBold'
  },

  textDay: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    alignSelf: 'center'
  }
})

export default styles;