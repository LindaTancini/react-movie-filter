import { useState } from "react";

// METTO QUI L'ARRAY DI OGGETTI

const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];
console.log(movies);

function App() {
  // AGGIUNGO UNO STATO PER FILTRARE IL GENERE DEL FILM
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div>
      <h1>Film</h1>
      <label>Scegli il tuo genere:</label>
      <select>
        <option value="">---</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <section>
        <h2>Elenco dei Film</h2>
        {/*AGGIUNGO MAP PER ITINERARE NELL'ARAY E TROVARE TITOLO E GENERE*/}
        {movies.map((movie, index) => (
          <article key={index}>
            <h3>{movie.title}</h3>
            <p>Genere: {movie.genre}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
