import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  label: {
    padding: 4,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginBottom: 15
  },
  normal: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 5
  },
  title: {
    color: 'blue',
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 12
  },
  center: {
    textAlign: 'center'
  }
})

export default Styles