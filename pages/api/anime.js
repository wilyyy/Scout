import { filtering, sortArr } from "../../utils/functions";
import anime from '@/utils/animes.json';

export default async function handler(req, res) {

  console.log(req.query, req.body);



  var lists = null;
  if(req.query.a_id){
    lists = anime.filter(o => o.uid === Number(req.query.a_id));
  }
  res.status(200).json(lists);

}