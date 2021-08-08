import React, { Component } from 'react';
import Perso from './components/Perso'

class App extends Component {
  state = {
    personnage1: {
      nom: 'Michel',
      prenom: 'Jean',
      age: '65',
    },
    personnage2: {
      nom: 'Van San',
      prenom: 'Alexis',
      age: '24',
    },
    personnage3: {
      nom: 'Le roi',
      prenom: 'dumatelas',
      age: '153',
    },
  }

  majPerso = () => {
    this.setState({
      personnage1: {
        nom: 'Micqsdsqdhel',
        prenom: 'Jeaqsdn',
        age: '64565',
      },
      personnage2: {
        nom: 'Van Sqsdan',
        prenom: 'Aleqsdqsxis',
        age: '24564',
      },
      personnage3: {
        nom: 'Le rqsdqsoi',
        prenom: 'dumatqsdelas',
        age: '154563',
      },
    })
  }

  render () {
    return (
      <div>
        <p>{`Bonjour je m'appel ${this.state.personnage1.nom} ${this.state.personnage1.prenom} et j'ai ${this.state.personnage1.age} ans`}</p>
        <p>{`Bonjour je m'appel ${this.state.personnage2.nom} ${this.state.personnage2.prenom} et j'ai ${this.state.personnage2.age} ans`}</p>
        <p>{`Bonjour je m'appel ${this.state.personnage3.nom} ${this.state.personnage3.prenom} et j'ai ${this.state.personnage3.age} ans`}</p>
        <Perso misAJourPerso={() => this.majPerso}  fullName={this.state.personnage1.prenom + " " + this.state.personnage1.nom} age={this.state.personnage1.age} />
      </div>
    );
  }
}

export default App;