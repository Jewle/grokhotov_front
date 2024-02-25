interface IBook {
  title:string,
  isbn:string,
  pageCount:number,
  publishedDate : {$date:string},
  thumbnailUrl:string,
  shortDescription?:string,
  longDescription?:string,
  status:string,
  authors:string[],
  categories:string[]

}

export default IBook;
