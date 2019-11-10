import React from 'react';
import Oppgave from '../../komponenter/Oppgave';
import VippsAnimasjon from '../../eksempler/vipps-animasjon.mp4';

const Oppgave3 = () => {
    return (
        <Oppgave
            oppgaveNummer="4"
            beskrivelse="Loadingen som går over til en checkmark når man vippser noen penger i Vipps-appen"
            eksempel={VippsAnimasjon}
        >
            Her kommer oppgaven.
        </Oppgave>
    );
};

export default Oppgave3;
