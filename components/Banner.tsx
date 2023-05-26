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
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[98.5vw]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={"Image of poster"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        {movie?.overview}
      </p>
    </div>
  );
};

export default Banner;
