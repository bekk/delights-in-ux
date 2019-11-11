import React from 'react';
import Oppgave from '../../komponenter/Oppgave';
import Animasjon from '../../eksempler/ikon-animasjon.gif';

const Oppgave2 = () => {
    return (
        <Oppgave
            oppgaveNummer="2"
            beskrivelse="Sett opp et ikon som transisjonerer til et annet når gitte krav er satt. Trenger ikke være akkurat samme som i eksempelet, kanskje du finner et liknenende bruksområde og eksempel fra prosjekt?"
            eksempel={Animasjon}
        ></Oppgave>
    );
};

export default Oppgave2;
