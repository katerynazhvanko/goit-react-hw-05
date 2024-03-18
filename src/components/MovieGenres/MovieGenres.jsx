export default function MovieGenres({ genres }) {
  return (
    <ul style={{ listStyle: "square", marginLeft: "40px" }}>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
