import React, {Fragment} from 'react';
import elementsS from '../../data/elementS';


class ElementsS extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            properties: elementsS.properties,
        }
    }
    render() {
        const properties = this.state;
        return (
            <Fragment>
                <div className={'boxElementS boxElementS--common'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[0].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[0].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[0].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[0].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemHe'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[1].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[1].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[1].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[1].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemLi'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[2].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[2].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[2].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[2].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemBe'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[3].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[3].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[3].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[3].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemNa'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[4].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[4].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[4].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[4].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemMg'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[5].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[5].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[5].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[5].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemK'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[6].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[6].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[6].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[6].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemCa'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[7].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[7].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[7].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[7].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemRb'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[8].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[8].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[8].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[8].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemSr'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[9].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[9].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[9].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[9].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemCs'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[10].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[10].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[10].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[10].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemBa'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[11].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[11].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[11].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[11].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemFr'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[12].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[12].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[12].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[12].mass}</p>
                    </div>
                </div>

                <div className={'boxElementS boxElementS--itemRa'}>
                    <div className={'boxElementS__symbol'}>
                        <h2 className={'boxElementS__symbol--heading'}>{properties.properties[13].symbol}</h2>
                    </div>
                    <div className={'boxElementS__title'}>
                        <h3 className={'boxElementS__title--heading'}>{properties.properties[13].title}</h3>
                    </div>
                    <div className={'boxElementS__number'}>
                        <p className={'boxElementS__number--heading'}>{properties.properties[13].number}</p>
                    </div>
                    <div className={'boxElementS__mass'}>
                        <p className={'boxElementS__mass--heading'}>{properties.properties[13].mass}</p>
                    </div>
                </div>

            </Fragment>
        )
    }
}


export default ElementsS;