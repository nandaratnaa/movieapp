export default function MovieItem ({ movie }) {
  return (
    <div
    style={{
        width: "30%",
        padding: "10px",
        boxSizing: "border-box",
    }}
    >
<strong>{movie.Title}</strong> ({movie.imdbID})
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          display: "block",
          maxWidth: "70%",
        }}
      />
    </div>
  ); 
}