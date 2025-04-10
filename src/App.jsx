import { useEffect, useState } from "react";

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
  // AGGIUNGO UNO STATO PER SELEZIONARE IL GENERE DEL FILM
  const [selectedGenre, setSelectedGenre] = useState("");
  // AGGIUNGO UNO STATO PER FILTRARE IL GENERE
  const [filteredMovie, setFilteredMovie] = useState(movies);
  // USO USE EFFECT PER FILTRARE
  useEffect(() => {
    //SE NON SELEZIONO NESSUN GENERE, LA LISTA E' VUOTA
    if (selectedGenre === "") {
      setFilteredMovie(movies);
      //SE INVECE VOGLIO SELEZIONARE UN GENERE, FILTRO E SALVO IN UNA NUOVA VARIABILE
    } else {
      let result = movies.filter((movie) => movie.genre === selectedGenre);
      //VEDO LA MODIFICA IN TEMPO REALE
      setFilteredMovie(result);
      console.log(result);
    }
  }, [selectedGenre]); // CREO UNA DIPENDENZA PER VEDERE IL RISULTATO FILTRATO
  return (
    <div>
      <h1>Film</h1>
      <label>Scegli il tuo genere:</label>
      {/*CONTROLLO LO STATO PER MOSTRARE IL VALORE CORRENTE*/}
      <select
        value={selectedGenre}
        onChange={(element) => setSelectedGenre(element.target.value)}
      >
        <option value="">---</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <section>
        <h2>Elenco dei Film</h2>
        {/*AGGIUNGO MAP PER ITINERARE NELL'ARAY E TROVARE TITOLO E GENERE*/}
        {filteredMovie.map((movie, index) => (
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
