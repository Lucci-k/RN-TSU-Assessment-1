import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import * as DATA from '../../techcrunch.json'
import ArticleCard from '../components/ArticleCard.component';
import Article from '../models/Article';

type Props = {

}

const ArticlesScreen: React.FC<unknown> = () => {

  const renderArticle = () => (
    DATA.articles.map((article: Article) => (
      <ArticleCard data={article} />
    ))
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA.articles}
        renderItem={renderArticle}
        keyExtractor={item => item.url}
      />
    </View>
    
  )
}

export default ArticlesScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

