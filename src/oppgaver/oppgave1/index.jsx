import React from 'react';
import Oppgave from '../../komponenter/Oppgave';

const Oppgave1 = () => {
    return (
        <Oppgave
            oppgaveNummer="1"
            beskrivelse="Teksten dukker opp når man trykker i feltet"
            eksempel="eksempel.png"
        >
            <input type="text"></input>
            <p>Her er det en hjelpetekst</p>
        </Oppgave>
    );
};

export default Oppgave1;
