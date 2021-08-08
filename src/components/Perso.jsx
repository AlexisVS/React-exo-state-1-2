import React, { Component } from 'react';

class Perso extends Component {
    render () {
        return (
            <>
                <p>{`Je m'appelle ${this.props.fullName}, j'ai ${this.props.age} ans et j'habite seule, je suis appelé du composant Perso.jsx !`}</p>
                <button onClick={this.props.misAJourPerso()}>je prend une fonction en onClick</button>
            </>
        );
    }
}

export default Perso;