export interface IArticles {
  id: Number;
  title: String;
  url: String;
  imageUrl: String;
  newsSite: String;
  summary: String;
  publishedAt: String;
  updatedAt: String;
  featured: Boolean;
  launches: Array<string>;
  events: Array<string>;
}

// export interface IcardArticles {
//   articles: Array<IArticles>;
//   cardType: Array<string>;
// }

// export interface IEligibilityRequest {
//   name: string;
//   email: string;
//   address: string;
// }
