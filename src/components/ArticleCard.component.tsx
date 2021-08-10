import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert, Linking, Platform } from 'react-native'
import Article from '../models/Article';

type Props = {
  data: Article
}

const ArticleCard: React.FC<Props> = ({ data }) => {

  const year = new Date(data.publishedAt);

  const handleOnPress = () => {
    const url = data.url
    if (Platform.OS === 'web') {
      window.open(url)
    }
    else if (Platform.OS === ('android' || 'ios')) {
      Linking.openURL(url)
    }  
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.header}>{data.title}</Text>
      <Text style={styles.text}>{year.toDateString()} ({data.author})-{data.description}</Text>
      <Image style={styles.img} source={{ uri: data.urlToImage }} />
    </TouchableOpacity>
  )
}

export default ArticleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
    maxWidth: 900
  },
  header: {
    fontSize: 20,
  },
  text: {
    marginVertical: 15,
  },
  img: {
    width: '100%',
    height: 300
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