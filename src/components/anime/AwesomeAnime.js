import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import './App.css';

function animeList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if(xhttp.readyState === 4 && xhttp.status === 200) {
      const response = JSON.parse(xhttp.response)
      this.setState({ data: response.data })
    }
  };
  xhttp.open("GET", "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0", true);
  xhttp.send();
}

function renderAnime(data) {
  let AnimeTest = []

  for (let key in data) {
    AnimeTest[key] = <Content
      image={data[key].attributes.posterImage.small}
      title={data[key].attributes.canonicalTitle}
      description={data[key].attributes.synopsis}
    />
  }
  return AnimeTest
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    };
  }
  componentDidMount() {

    animeList.call(this)
  }
  
  render() {
    return (
      
      <div className='background'>
        <Header/>
        {renderAnime(this.state.data)}
      </div>
     
    );
  }
}

export default App;
