import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { list } from './Datalist';
import Moviecard from './Moviecard';


const Movielist = () => {
    // const [movie, setMovie] = useState(list)
    const movie=useSelector(state=>state.ReducerToDo.list)
  return (
    <div className='mvl'>
    {/* {movie?.filter((el)=>el.title.toUpperCase().includes(input.toUpperCase())) */}
    {movie.map((film)=>(<Moviecard x={film} /> ))}
    </div>
  )
}

export default Movielist