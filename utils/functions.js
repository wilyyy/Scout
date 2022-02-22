export function filtering(
  arr = [],
  config = {
    title: null, 
    genre: [], //don't work, ask Chris
    score: [],
    episodes: []
  }

) {

  const {
    title, 
    genre, 
    score,
    episodes,
  } = config;

  if(title || genre || score || episodes ) {
    
    const filtered_arr = arr.filter((o) => {
      
      var cond = true;
      
      if(title){
        cond = cond && o.title.includes(title);
      }
      
      if(genre) {
        cond = cond && o.genre.includes(genre);
      }
      
      if(score) {
        cond = cond && Number(score[0]) <= Number(o.score) && Number(o.score) <= Number(score[1]);
      }

      if(episodes) {
        cond = cond && Number(episodes[0]) <= Number(o.episodes) && Number(o.episodes) <= Number(episodes[1]);
      }

      return cond;
    })
    
    return filtered_arr;
  } else {
    return [];
  }
}


// use to test, add console.log(filtered_arr) to function
// const animes = require('./animes.json');
// filtering(animes, {
//   genre: ['Action', 'Comedy']
// })

function splitDate (
  string = null
) {

  const Months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }

  const splitString = string.split(" ");
  const noComma = splitString.map(function (e) {
    return e.replace(',', '');
});


  let monthNumber = Months[noComma[0]];

  const newArray = [];
  newArray.push(noComma[2], monthNumber, noComma[1]);
  console.log(newArray.join(''));
  return newArray.join('');
}

export function sortArr(
  arr=[],
  config={key:null, type:null}
) {
  
  const {key, type} = config;

  if(key) {
    arr.sort((cur, next) => {

      let num1 = Number(cur[key])
      let num2 = Number(next[key])

      if(cur[key] === 'aired') {
        num1 = splitDate(cur[key])
        num2 = splitDate(next[key])
      }

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

    return arr;

  }
}

// sortArr(animes, {
//   key: 'aired',
//   type: 'desc'
// })
