export default interface Article {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date | string,
  content: string,
}