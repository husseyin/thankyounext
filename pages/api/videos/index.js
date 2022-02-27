import { videos } from "../../../videos";

export default function handler(req, res) {
  res.status(200).json(videos);
}
