import { useState } from 'react'
import './App.css';

function App() {
  const [movie, setMovie] = useState("");
  const [movielist, setMovielist] = useState([]);

  
 function addMovie() {
     if (movie.trim() !== "") {
      setMovielist([...movielist, movie]);
      setMovie("");
     }
}

function removeMovie(index) {
  const newMovielist = [...movielist];
  newMovielist.splice(index, 1);
  setMovielist(newMovielist);
}
return (
    <div>
      <h1>Movie List</h1>
<div>
  <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} />
  <button onClick={addMovie}>Add</button>
</div>
<ul>
   {movielist.map((movie, index) => (
     <li>
       {movie}
       <button onClick={() => removeMovie(index)}>Remove</button>
     </li>
    ))}
  </ul>
  </div>
);
}
export default App;
