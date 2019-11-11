import React from 'react';
import Oppgave from '../../komponenter/Oppgave';
import MailChimpAnimasjon from '../../eksempler/mailchimp-animasjon.gif';

const Oppgave1 = () => {
    return (
        <Oppgave
            oppgaveNummer="1"
            beskrivelse="Teksten dukker opp når man trykker i feltet"
            eksempel={MailChimpAnimasjon}
        >
            <input type="text"></input>
            <p>Her er det en hjelpetekst</p>
        </Oppgave>
    );
};

export default Oppgave1;
