import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSearch = (id) => {
      props.onSearch(id);
      setId('');
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => {handleSearch(id)}}>Agregar</button>
      </div>
   );
}
