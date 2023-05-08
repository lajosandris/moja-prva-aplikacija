import React from 'react';
import KorisnikKomponenta  from './KorisnikKomponenta';

export default class App extends React.Component {
  state = {
    korisnici: [
      { id: 1, ime: 'Ivan', godine: 30 },
      { id: 2, ime: 'Marko', godine: 35 },
      { id: 3, ime: 'Ana', godine: 25 }
    ],
  };

  handleButtonPress = () => {
    const { korisnici } = this.state;

    const noviKorisnici = korisnici.map(korisnik => {
      return { ...korisnik, godine: korisnik.godine + 1 };
    });

    this.setState({ korisnici: noviKorisnici });
  };

  handleNameChange = (event, index) => {
    const { korisnici } = this.state;
    const noviKorisnici = [...korisnici];

    noviKorisnici[index].ime = event.target.value;
    this.setState({ korisnici: noviKorisnici });
  };

  render() {
    const { korisnici } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>5.13 - Liste</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>

        {korisnici.map((korisnik, index) => (
          <KorisnikKomponenta
            key={korisnik.id}
            ime={korisnik.ime}
            godine={korisnik.godine}
            onNameChange={event => this.handleNameChange(event, index)}
          />
        ))}
      </div>
    );
  }
}