import './index.css';
import React, {useState, useEffect} from 'react';
import CountryCard from './components/Card';
import SearchBar from './components/Search';
import FilterBox from './components/Filter';
import NavBar from './components/Nav';
import { ThemeProvider } from './ThemeContext';
import DetailPage from './components/DetailsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path="/details/:alpha3Code" component = {DetailPage}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const Home = () => {

  const [country, setCountry] = useState([]);
  const [term, setTerm] = useState('');

  const [filterValue, setValue] = useState('');

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then( res => res.json())
    .then(data => {
      setCountry(data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="mx-auto bg-secondary">
      <div className = "flex flex-row justify-between items-center container mx-auto">
        <div>
          <SearchBar 
            handleChange = {e => setTerm(e.target.value)}
          />
        </div>
        <div className= "order-last">
          <FilterBox selectValue = {e => setValue(e.target.value)}/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
      {country.filter(item => item.region.includes(filterValue))
      .filter(item => (item.name.toLowerCase().includes(term)))
      .map(item => (
          <Link to={`/details/${item.alpha3Code}`} >
            <CountryCard key = {item.numericCode} {...item}/>
          </Link>
      ))}
      </div>
    </div>
  )
}

export default App;
