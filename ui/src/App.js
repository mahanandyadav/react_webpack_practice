import React,{useEffect, useRef, useState} from 'react';
import MyComponent from './components/myComponent';
import useBookSearch from '../src/components/useBookSearch'
const App = () => {
  const [query,setQuery]=useState('')
  const [pageNumber,setPageNumber]=useState(1)
  useBookSearch(query,pageNumber)

  const handleSearch=(e)=>{
     setQuery(e.target.value)
     setPageNumber(1)
  }
  return (
   <div>
    <input  type={'text'} onChange={handleSearch}></input>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>loading</div>
      <div>Error</div>
   </div>
  );
};

export default App;
