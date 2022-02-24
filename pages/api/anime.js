import { filtering, sortArr, GetAllAnime } from "../../utils/functions";

import anime from '@/utils/animes.json';

export default async function handler(req, res) {
  const {
    a_id,
    origin,
    txt,
    genreFilter,
    scoreFilter,
    episodeFilter,
    sortKeyFilter,
    sortTypeFilter
  } = req.query;

  let genre = genreFilter;
  const score = scoreFilter;
  const episodes = episodeFilter;
  const sortKey = sortKeyFilter;
  const sortType = sortTypeFilter;


  if(typeof genre === 'string') {
    const names = (v) => [].concat(v).map(name => name)
    genre = names(genre);
  }

  console.log(genre);

  var lists = [];

  if(req.query){
    lists = GetAllAnime(anime);
  }

  //Only triggers if there's at least one letter in the search bar
  if(txt) {
    lists = filtering(anime, {
      title: txt,
      genre: genre,
      score: score,
      episodes: episodes
    })
  }

  if(sortKey && sortType) {
    lists = sortArr(lists, {
      key: sortKey,
      type: sortType
    })
  }
  

  if(req.query.a_id){
    lists = anime.filter(o => o.uid === Number(req.query.a_id));
  }

  lists = lists.slice(0,20);

  res.status(200).json(lists);
}

