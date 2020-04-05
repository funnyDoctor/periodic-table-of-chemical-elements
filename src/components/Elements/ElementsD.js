import React, {Fragment} from 'react';
import elementsD from '../../data/elementsD';


class ElementsD extends React.Component{
    constructor(props) {
        super(props);
        this.state = {properties: elementsD.properties}
    }
    render() {
        const properties = this.state.properties;
        // console.log(properties);
        return (
            <Fragment>
                <div className={'boxElementD boxElementD--itemSc'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[0].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[0].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[0].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[0].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemTi'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[1].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[1].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[1].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[1].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemV'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[2].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[2].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[2].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[2].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemCr'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[3].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[3].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[3].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[3].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemMn'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[4].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[4].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[4].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[4].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemFe'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[5].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[5].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[5].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[5].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemCo'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[6].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[6].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[6].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[6].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemNi'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[7].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[7].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[7].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[7].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemCu'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[8].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[8].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[8].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[8].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemZn'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[9].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[9].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[9].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[9].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemY'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[10].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[10].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[10].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[10].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemZr'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[11].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[11].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[11].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[11].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemNb'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[12].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[12].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[12].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[12].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemMo'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[13].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[13].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[13].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[13].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemTc'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[14].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[14].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[14].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[14].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemRu'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[15].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[15].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[15].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[15].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemRh'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[16].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[16].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[16].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[16].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemPd'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[17].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[17].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[17].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[17].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemAg'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[18].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[18].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[18].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[18].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemCd'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[19].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[19].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[19].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[19].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemHf'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[20].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[20].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[20].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[20].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemTa'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[21].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[21].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[21].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[21].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemW'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[22].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[22].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[22].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[22].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemRe'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[23].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[23].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[23].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[23].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemOs'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[24].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[24].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[24].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[24].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemIr'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[25].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[25].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[25].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[25].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemPt'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[26].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[26].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[26].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[26].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemAu'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[27].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[27].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[27].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[27].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemHg'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[28].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[28].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[28].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[28].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemRf'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[29].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[29].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[29].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[29].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemDb'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[30].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[30].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[30].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[30].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemSg'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[31].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[31].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[31].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[31].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemBh'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[32].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[32].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[32].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[32].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemHs'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[33].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[33].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[33].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[33].mass}</p>
                    </div>
                </div>

                <div className={'boxElementD boxElementD--itemMt'}>
                    <div className={'boxElementD__symbol'}>
                        <h2 className={'boxElementD__symbol--heading'}>{properties[34].symbol}</h2>
                    </div>
                    <div className={'boxElementD__title'}>
                        <h3 className={'boxElementD__title--heading'}>{properties[34].title}</h3>
                    </div>
                    <div className={'boxElementD__number'}>
                        <p className={'boxElementD__number--heading'}>{properties[34].number}</p>
                    </div>
                    <div className={'boxElementD__mass'}>
                        <p className={'boxElementD__mass--heading'}>{properties[34].mass}</p>
                    </div>
                </div>

            </Fragment>
        )
    }
}


export default ElementsD;