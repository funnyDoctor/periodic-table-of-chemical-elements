import React, {Fragment} from 'react';
import lanthanides from '../../data/lanthanides';

class Lanthanides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {properties: lanthanides.properties}
    }

    render() {
        const properties = this.state.properties;
        return (
            <Fragment>
                {/*<div className={'heading'}>*/}
                {/*    <h3 className={'heading--heading'}>Лантанойды</h3>*/}
                {/*</div>*/}
                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[0].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[0].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[0].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[0].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[1].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[1].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[1].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[1].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[2].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[2].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[2].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[2].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[3].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[3].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[3].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[3].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[4].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[4].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[4].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[4].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[5].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[5].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[5].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[5].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[6].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[6].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[6].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[6].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[7].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[7].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[7].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[7].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[8].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[8].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[8].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[8].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[9].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[9].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[9].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[9].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[10].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[10].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[10].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[10].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[11].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[11].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[11].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[11].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[12].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[12].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[12].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[12].mass}</p>
                        </div>
                    </div>

                    <div className={'box box--right'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[13].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[13].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[13].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[13].mass}</p>
                        </div>
                    </div>

                    <div className={'box'}>
                        <div className={'box__symbol'}>
                            <h2 className={'box__symbol--heading'}>{properties[14].symbol}</h2>
                        </div>
                        <div className={'box__title'}>
                            <h3 className={'box__title--heading'}>{properties[14].title}</h3>
                        </div>
                        <div className={'box__number'}>
                            <p className={'box__number--heading'}>{properties[14].number}</p>
                        </div>
                        <div className={'box__mass'}>
                            <p className={'box__mass--heading'}>{properties[14].mass}</p>
                        </div>
                    </div>
            </Fragment>
        )
    }
}


export default Lanthanides;