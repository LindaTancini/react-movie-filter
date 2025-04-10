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

function App() {
  // AGGIUNGO UNO STATO PER SELEZIONARE IL GENERE DEL FILM
  const [selectedGenre, setSelectedGenre] = useState("");
  // AGGIUNGO UNO STATO PER FILTRARE IL GENERE
  const [filteredMovie, setFilteredMovie] = useState(movies);
  //AGGIUNGO UNO STATO PER CERCARE IL TITOLO
  const [searchTitle, setSearchTitle] = useState("");
  //AGGIUNGO DUE STATI, UNO PER AGGIUNGERE UN TITOLO E UNO PER AGGIUNGERE UN GENERE
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  // AGGIUNGO STATO CON L'ARRAY INIZIALE PER AGGIUNGERE I NUOVI FILM
  const [newMovieAdd, setNewMovieAdd] = useState(movies);

  // USO USE EFFECT PER FILTRARE
  useEffect(() => {
    //SE NON SELEZIONO NESSUN GENERE, LA LISTA E' VUOTA
    if (selectedGenre === "") {
      setFilteredMovie(newMovieAdd);
      //SE INVECE VOGLIO SELEZIONARE UN GENERE, FILTRO E SALVO IN UNA NUOVA VARIABILE
    } else {
      let resultMovie = newMovieAdd.filter(
        (movie) => movie.genre === selectedGenre
      );
      //VEDO LA MODIFICA IN TEMPO REALE
      setFilteredMovie(resultMovie);
      console.log(resultMovie);
    }
  }, [selectedGenre, newMovieAdd]); // CREO UNA DIPENDENZA PER VEDERE IL RISULTATO FILTRATO

  // USO USE EFFECT PER CERCARE UN TITOLO
  useEffect(() => {
    // RESULT COMPRENDE L'ARRAY DEI FILM
    let resultSearch = newMovieAdd;
    //SE STIAMO CERCANDO UN TITOLO
    if (searchTitle) {
      //ALLORA FILTRO PER I FILM E FACCIO IN MODO CHE CON INCLUDES COMPRENDANO IL TITOLO (lowercase per cercare in minuscolo)
      resultSearch = resultSearch.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    //VEDO LE MODIFICHE IN TEMPO REALE
    setFilteredMovie(resultSearch);
    console.log(resultSearch);
  }, [searchTitle, newMovieAdd]); //CREO DIPENDENZA PER VEDERE IL TITOLO CERCATO

  // CREO UNA FUNZIONE PER AGGIUNGERE NUOVI FILM E CON PREVENT DEFAULT NON FACCIO RICARICARE LA PAGINA
  const addNewMovies = (event) => {
    event.preventDefault();
    //CREO VARIABILE PER CREARE NUOVI FILM
    const newMovie = { title: newTitle, genre: newGenre };
    //CON IL METODO SPREAD AGGIORNO LA LISTA
    setNewMovieAdd([...newMovieAdd, newMovie]);
    //PULISCO I CAMPI DEL TITOLO E DEL GENERE UNA VOLTA FINITO DI SCRIVERE
    setNewTitle("");
    setNewGenre("");
  };

  return (
    <div>
      <h1>Film</h1>
      <label>Cerca un titolo di un film:</label>
      <input
        type="text"
        value={searchTitle}
        onChange={(element) => setSearchTitle(element.target.value)}
        placeholder="Cerca un film :)"
      />
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
      <section>
        <h2>Aggiungi un Nuovo Film</h2>
        <form onSubmit={addNewMovies}>
          <div>
            <label>Titolo:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(element) => setNewTitle(element.target.value)}
              placeholder="Aggiungi un film :)"
            />
          </div>
          <div>
            <label>Genere:</label>
            <select
              value={newGenre}
              onChange={(element) => setNewGenre(element.target.value)}
            >
              <option value="">---</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
          <button type="submit">Aggiungi Film</button>
        </form>
      </section>
    </div>
  );
}

export default App;
