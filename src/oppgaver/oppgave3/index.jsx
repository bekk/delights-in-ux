import React from 'react';
import Oppgave from '../../komponenter/Oppgave';
import Animasjon from '../../eksempler/bilde-lazyloading.gif';

const Oppgave3 = () => {
    return (
        <Oppgave
            oppgaveNummer="3"
            beskrivelse="Lag en placeholder for innlasting av data - enten fra eksempelet,
            eller fra noe mer prosjektnært. Alternativt: lazyloading av et stort
            bilde eller noe annet som gjør innlastingsopplevelse litt diggere?"
            eksempel={Animasjon}
        ></Oppgave>
    );
};

export default Oppgave3;
