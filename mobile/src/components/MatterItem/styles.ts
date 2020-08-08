import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 7,
    padding: 5,
    alignItems: 'flex-start',
  },

  matterTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#6a6180',
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center'
  },

  progressMatter: {
    fontFamily: 'Archivo_400Regular',
    color: '#6a6180',
    fontSize: 16
  },

  matterList: {
    marginVertical: 10
  }
})

export default styles;