import React, { useContext, useEffect, useState } from 'react';

import { GuildsContext } from '../../../contexts/GuildsContext';
import Citadel from '../../../components/Citadel/Citadel';
import { guildContentStyles } from '../styles';

export default function ClientRealm() {

    const { guildRealm, setRealmView } = useContext(GuildsContext);
    const [ initialize, setInitialize ] = useState(false);
    const classes = guildContentStyles();


    useEffect( () => {
        setRealmView('map');
        setInitialize(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Citadel className={classes.guildCitadel} initialize={initialize} ownerParcels={guildRealm} />
    );
}