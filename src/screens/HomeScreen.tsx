import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {

  const navigation = useNavigation();

  const handleGetNewsPress = () => {
    navigation.navigate('Articles');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to your personal news feed</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetNewsPress}>
        <Text style={styles.text}>
          Get News
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    margin: 20
  },
  text: {
    color: 'white'
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20
  }
});