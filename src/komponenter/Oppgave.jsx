import React from 'react';
import styled from 'styled-components';

const OppgaveWrapper = styled.div`
    margin: 30px 0 300px;
`;

const Oppgave = ({ oppgaveNummer, beskrivelse, eksempel, children }) => {
    return (
        <div>
            <h2>Oppgave {oppgaveNummer}</h2>
            <p>{beskrivelse}</p>
            <img src={eksempel} alt={`Eksempelvideo for ${oppgaveNummer}`} />
            <h3>Løs oppgaven her:</h3>
            <OppgaveWrapper>{children}</OppgaveWrapper>
        </div>
    );
};

export default Oppgave;
