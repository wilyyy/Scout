export function filtering(
  arr = [],
  config = {
    title: null, 
    genre: null,
    episodes: null,
    popularity: null,
    score: null,
  }

) {
  //console.log(arr);

  const {
    title, 
    genre, 
    episodes, 
  } = config;

  if(title || genre || episodes || popularity || score) {
    
    const filtered_arr = arr.filter((o) => {
      
      var cond = true;
      
      if(title){
        cond = cond && o.title.includes(title);
      }
      
      if(genre) {
        cond = cond && o.genre.includes(genre);
      }
      
      if(episodes) {
        cond = cond && Number(o.average_rating) >= Number(rating);
        //have episodes be an array of lower and higher value of range, set lower range as
        //episodes[0] and upper range as episodes[1] and return all anime with episodes in that value
      }

      return cond;
    })
    
    // console.log(filtered_arr);
    return filtered_arr;
  } else {
    return [];
  }

  //const filtered_arr = arr.filter(o => o.bookID === req.query.bookID);
}

// const books = require('./books.json')

/*
bag 1 is empty
bag 2 has books
filtering is saying if the book matches this condition, clone it and put it into bag 1
*/
// filtering(books, {
//   page: 700,
//   rating: 4.5,
//   title: "The"
// });

/*
filtering(books, {
  title: "Harry"
  pages: 123,
  rating: 5.5
})
//FOR THE EXERCISE, also filter language_code, authors, ratings_count, and text_reviews_count
*/

export function sortArr(
  arr=[],
  config={key:null}
) {
  
  const {key, type} = config;

  if(key) {
    arr.sort((cur, next) => {

      var num1 = Number(cur[key])
      var num2 = Number(next[key])

      //Change this if statement to account for popularity, score, airing date
      if(isNaN(cur[key])){
        num1 = cur[key]
        num2 = next[key]
      }

      if(num1 > num2) {
        if(type && type === "asc"){
          return 1;
        } else {
          return -1;
        }
      }
      
      if(num1 < num2) {
        if(type && type === "asc"){
          return -1;
        } else {
          return 1;
        }
      }
  
      return 0;
    })

    // console.log(arr.slice(0, 10))
    return arr;

  }
}
