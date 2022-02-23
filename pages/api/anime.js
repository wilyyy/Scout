import { filtering, sortArr, GetAllAnime } from "../../utils/functions";
import anime from '@/utils/animes.json';

//Danny API
/*
import { filtering, sortArr } from "../../utils/functions";
import animes from '@/utils/animes.json';

export default async function handler(req, res) {
  const {
    txt,
    genreFilter,
    scoreFilter,
    episodeFilter,
    sortKey,
    sortType
  } = req.query;

  const genre = genreFilter;
  const score = scoreFilter;
  const episodes = episodeFilter;

  let lists = [];

  if(txt) {
    lists = filtering(animes, {
      title: txt,
      genre: [genre],
      score = [score],
      episodes = [episodes]
    })
  }

  if(sortKey && sortType) {
    lists = sortArr(lists, {
      key: sortKey,
      type: sortType
    })
  }

  res.status(200).json(lists);
}
*/

export default async function handler(req, res) {

  console.log(req.query, req.body);

  var lists = null;

  if(req.query){
    lists = GetAllAnime(anime);
  }

  if(req.query.a_id){
    lists = anime.filter(o => o.uid === Number(req.query.a_id));
  }
  res.status(200).json(lists);

}

