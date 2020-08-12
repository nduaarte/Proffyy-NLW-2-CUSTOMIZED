import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center'
  },

  bannerContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 45
  },

  loginContainer: {
    backgroundColor: '#F0F0F7',
    padding: 30,
    width: '100%',
    flex: 2
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },

  logo: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 45,
    color: '#fff'
  },

  description: {
    fontSize: 16,
    fontFamily: 'Archivo_400Regular'
  },

  textLogin: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 10,
    color: '#32264C',
  },

  buttonCreateAccText: {
    fontFamily: 'Poppins_400Regular',
    color: '#8257E5',
    fontSize: 12
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 14,
    borderRadius: 8
  },

  buttonEnter: {
    backgroundColor: '#04D361',
    width: '100%',
    padding: 13,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center'
  },

  buttonEnterText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonForgotPasswordText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginTop: 15,
    color: '#9C98A6'
  }
})

export default styles;