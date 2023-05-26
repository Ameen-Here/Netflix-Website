import Image from "next/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";

interface Props {
  netflixOriginals: Movie[];
}
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    console.log(netflixOriginals);
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);
  console.log(movie);
  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[98.5vw]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={"Image of poster"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Banner;
