import { filtering, sortArr } from "../../utils/functions";
import anime from '@/utils/animes.json';

export default async function handler(req, res) {

  console.log(req.query, req.body);
  const singleAnime = anime.slice(0, 1);
  res.status(200).json(singleAnime);

}