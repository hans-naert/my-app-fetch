import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';



function App() {
  const [fetchInfo, setFetchInfo] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setFetchInfo(data);
      });
  });
  function HelloWorld() {
    console.log('Hello World');
    setFetchInfo('Hello World');
  }
  return (
    <div>
      <Button variant="contained" onClick={HelloWorld}>
        Hello World
      </Button>
      <div>
        {JSON.stringify(fetchInfo)}
      </div>
    </div>
  );
}

export default App;
