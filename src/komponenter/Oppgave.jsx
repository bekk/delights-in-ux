import React from 'react';

const Oppgave = ({ oppgaveNummer, beskrivelse, eksempel, children }) => {
    return (
        <div>
            <h2>Oppgave {oppgaveNummer}</h2>
            <p>{beskrivelse}</p>
            <img src={eksempel} alt={`Eksempelbilde for ${oppgaveNummer}`} />
            <div>{children}</div>
        </div>
    );
};

export default Oppgave;
