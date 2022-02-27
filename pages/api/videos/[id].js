import { videos } from "../../../videos";

//id göre data çekmek
export default function handler(req, res) {
  const { id } = req.query;

  //buaradaki video.id.toString() olmazsa veriyi çekmez çünkü int gelir
  const video = videos.find((video) => video.id.toString() === id);

  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).json({ message: "Hata video bulunamadı!" });
  }
}
