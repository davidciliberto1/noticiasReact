import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';



class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'science') => {
    const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6c1c1dfcb4a943c7bf481bc628b80153`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }


  render() { 
    return ( 
      <Fragment>
        <Header 
        titulo='Noticias REACT API'
        />
        
        <div className="container white contenedor-noticias">
        <Formulario 
        consultarNoticias={this.consultarNoticias}
        />
          <ListaNoticias
          noticias={this.state.noticias}
          />
        </div>
      </Fragment>
     );
  }
}
 
export default App;
