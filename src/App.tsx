import React, { JSX } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import MovieInfo from './components/MovieInfo';

function App(): JSX.Element {
const portalName: string = "Kerala Theatre Portal";
return (
<div>
<h1>Kerala Theatre Potal</h1>
<Welcome name="Bharath" />
<MovieInfo title="Inception" language="English" rating={8.8} />
<MovieInfo title="Parasite" language="Korean" rating={9.2} />
<MovieInfo title="Interstellar" language="English" rating={8.6} />

</div>
);
}
export default App;


