import React from 'react';
import styled from 'styled-components';

import Oppgave1 from './oppgaver/oppgave1';
import Oppgave2 from './oppgaver/oppgave2';
import Oppgave3 from './oppgaver/oppgave3';
import Oppgave4 from './oppgaver/oppgave4';

const AppWrapper = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;
function App() {
    return (
        <AppWrapper>
            <h1>Delights i UX</h1>
            <p>Kjør eksemplene på nytt ved å reloade siden.</p>
            <Oppgave1 />
            <Oppgave2 />
            <Oppgave3 />
            <Oppgave4 />
        </AppWrapper>
    );
}

export default App;
