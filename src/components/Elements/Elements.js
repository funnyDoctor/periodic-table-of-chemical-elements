import React, {Fragment} from 'react';
import ElementsS from './ElementsS';
import ElementsD from './ElementsD';
import ElementsP from './ElementsP';
import Description from '../Description/Description';
import Other from '../Other/Other';
import Oxides from './Oxides';
import HydrogenCompounds from './Сompounds';


const Elements = () =>  {
    return (
        <Fragment>
            <ElementsS/>
            <ElementsD/>
            <ElementsP/>
            <Description/>
            <Other/>
            <Oxides/>
            <HydrogenCompounds/>
        </Fragment>

    )
};

export default Elements;