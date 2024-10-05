import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  res.status(404).json({
    message: "Route not found",
    ohNoes:
      "You're on the road, but you've got no destination\nYou're in the mud, in the maze of her imagination",
    artist: "U2",
    album: "All That You Can’t Leave Behind",
  });
};
