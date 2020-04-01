import React, {Fragment} from 'react';
import elementsP from '../../data/elementsP';


class ElementsP extends React.Component{
    constructor(props) {
        super(props);
        this.state = {properties: elementsP.properties}
    }
    render() {
        const properties = this.state.properties;
        return (
            <Fragment>
                <div className={`boxElementP boxElementP--itemB`}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[0].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[0].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[0].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[0].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemC'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[1].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[1].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[1].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[1].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemN'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[2].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[2].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[2].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[2].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemO'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[3].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[3].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[3].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[3].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemF'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[4].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[4].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[4].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[4].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemNe'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[5].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[5].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[5].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[5].mass}</p>
                    </div>
                </div>

                <div className={'boxElementP boxElementP--itemAl'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[6].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[6].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[6].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[6].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemSi'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[7].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[7].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[7].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[7].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemP'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[8].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[8].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[8].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[8].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemS'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[9].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[9].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[9].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[9].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemCl'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[10].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[10].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[10].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[10].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemAr'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[11].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[11].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[11].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[11].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemGa'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[12].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[12].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[12].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[12].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemGe'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[13].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[13].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[13].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[13].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemAs'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[14].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[14].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[14].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[14].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemSe'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[15].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[15].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[15].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[15].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemBr'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[16].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[16].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[16].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[16].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemKr'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[17].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[17].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[17].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[17].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemIn'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[18].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[18].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[18].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[18].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemSn'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[19].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[19].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[19].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[19].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemSb'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[20].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[20].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[20].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[20].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemTe'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[21].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[21].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[21].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[21].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemI'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[22].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[22].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[22].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[22].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemXe'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[23].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[23].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[23].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[23].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemTl'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[24].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[24].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[24].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[24].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemPb'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[25].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[25].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[25].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[25].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemBi'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[26].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[26].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[26].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[26].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemPo'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[27].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[27].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[27].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[27].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemAt'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[28].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[28].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[28].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[28].mass}</p>
                    </div>
                </div>
                
                <div className={'boxElementP boxElementP--itemRn'}>
                    <div className={'boxElementP__symbol'}>
                        <h2 className={'boxElementP__symbol--heading'}>{properties[29].symbol}</h2>
                    </div>
                    <div className={'boxElementP__title'}>
                        <h3 className={'boxElementP__title--heading'}>{properties[29].title}</h3>
                    </div>
                    <div className={'boxElementP__number'}>
                        <p className={'boxElementP__number--heading'}>{properties[29].number}</p>
                    </div>
                    <div className={'boxElementP__mass'}>
                        <p className={'boxElementP__mass--heading'}>{properties[29].mass}</p>
                    </div>
                </div>

            </Fragment>
        )
    }
}


export default ElementsP;