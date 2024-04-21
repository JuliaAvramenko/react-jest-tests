import React, { useEffect, useState } from 'react';

import './App.css';
import List from '../List/List';
import Search from '../Search/Search';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'Vue',
  'Angular',
  'NodeJs'
]

function App() {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(data)

  function onChange(e: any) {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [search])
  return (
    <div className="App">
      <header className="App-header">
        <Search value={search} onChange={onChange} />
        <List items={items} />
      </header>
    </div>
  )
}

export default App;

