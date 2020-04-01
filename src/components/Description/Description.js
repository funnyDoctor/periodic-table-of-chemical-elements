import React, {Fragment} from 'react';


const Description = () => {
    return (
        <Fragment>
            <div className={'description description--item'}>

                <div className={'description__box description__box--item'}>
                    <div className={'description__symbol'}>
                        <h2 className={'description__symbol--heading'}>Na</h2>
                    </div>
                    <div className={'description__title'}>
                        <h3 className={'description__title--heading'}>Натрий</h3>
                    </div>
                    <div className={'description__number'}>
                        <p className={'description__number--heading'}>11</p>
                    </div>
                    <div className={'description__mass'}>
                        <p className={'description__mass--heading'}>22,9898</p>
                    </div>
                    <div className={'description__config'}>
                        <p className={'description__config--heading'}>3s1</p>
                    </div>
                </div>
                <div className={'description--itemSymbol'}>
                    <p className={'description--heading'}>Символ элемента</p>
                </div>
                <div className={'description--itemSerial'}>
                    <p className={'description--heading'}>Порядковый номер</p>
                </div>
                <div className={'description--itemName'}>
                    <p className={'description--heading'}>Название элемента</p>
                </div>
                <div className={'description--itemMass'}>
                    <p className={'description--heading'}>Относительная <br/> атомная масса</p>
                </div>
                <div className={'description--itemConfig'}>
                    <p className={'description--heading'}>Электронная <br/> конфигурация  <br/> высшего слоя</p>
                </div>

                <div/>
                <div className={'description--borderSerial'}/>
                <div/>
                <div className={'description__lineNumber'}/>
                <div className={'description__lineMass'}/>
                <div className={'description__lineConfig'}/>
                <div className={'description__lineTopName'}/>
                <div className={'description__lineMiddleName'}/>
                <div className={'description__lineBottomSymbol'}/>
                <div className={'description__lineMiddleSymbol'}/>



            </div>
        </Fragment>
    )
};


export default Description;