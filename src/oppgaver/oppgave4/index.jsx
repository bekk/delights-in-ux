import React from 'react';
import Oppgave from '../../komponenter/Oppgave';
import VippsAnimasjon from '../../eksempler/vipps-animasjon.gif';

const Oppgave3 = () => {
    return (
        <Oppgave
            oppgaveNummer="4"
            beskrivelse="Få til spinneropplevelsen fra når man har vippset noe"
            eksempel={VippsAnimasjon}
        ></Oppgave>
    );
};

export default Oppgave3;
