import { VercelRequest, VercelResponse } from "@vercel/node";
import { popSongs } from "../../data/popSongs";

const getRandomPop = () =>
  popSongs[Math.floor(Math.random() * popSongs.length)];

export default (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ rock: getRandomPop() });
};
