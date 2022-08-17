import React, { useEffect, useRef, useState, useCallback } from 'react';
import useBookSearch from '../src/components/useBookSearch'
const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber)
  const observer = useRef()

  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('visible')
        setPageNumber((prevPage) => ++prevPage)
      }
    })
    if (node) observer.current.observe(node)
    console.log(node)
  }, [loading, hasMore])


  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  return (
    <div>
      <input type={'text'} value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div key={book} ref={lastBookElementRef}>{book}</div>

        }
        return <div key={book}>{book}</div>
      })
      }
      <div>{loading && 'Loading...'}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default App;
