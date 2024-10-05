import { VercelRequest, VercelResponse } from "@vercel/node";
import { rockSongs } from "../../data/rockSongs";

const getRandomRock = () =>
  rockSongs[Math.floor(Math.random() * rockSongs.length)];

export default (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ rock: getRandomRock() });
};
