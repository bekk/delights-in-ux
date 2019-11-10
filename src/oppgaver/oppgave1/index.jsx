import React from 'react';
import Oppgave from '../../komponenter/Oppgave';

const Oppgave1 = () => {
    return (
        <Oppgave
            oppgaveNummer="1"
            beskrivelse="Beskrivelse"
            eksempel="eksempel.png"
        >
            Her kommer oppgaven
        </Oppgave>
    );
};

export default Oppgave1;
