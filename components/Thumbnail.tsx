import { Movie } from "../typings";
import Image from "next/image";

interface Props {
  // When using firebase
  //   movie: Movie | DocumentData;
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  console.log(movie);
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:h-36 md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="Image of poster"
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
