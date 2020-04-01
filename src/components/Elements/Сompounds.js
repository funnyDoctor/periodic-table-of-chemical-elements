import React, {Fragment} from 'react';

const HydrogenCompounds = () => {
    return (
        <Fragment>
            <div className={'compounds compounds--one'}>
                <h3 className={'compounds__heading compounds__oneShift'}>RH<span className={'compounds__span'}>4</span></h3>
            </div>

            <div className={'compounds compounds--two'}>
                <h3 className={'compounds__heading compounds__oneShift'}>RH<span className={'compounds__span'}>3</span></h3>
            </div>

            <div className={'compounds compounds--three'}>
                <h3 className={'compounds__heading compounds__threeShift'}>H<span className={'compounds__span'}>2</span>R</h3>
            </div>

            <div className={'compounds compounds--four'}>
                <h3 className={'compounds__heading compounds__fourShift'}>HR</h3>
            </div>
        </Fragment>
    )
};

export default HydrogenCompounds;