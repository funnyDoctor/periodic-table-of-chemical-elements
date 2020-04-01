import React, {Fragment} from 'react';


const Numbering = () => {
    return (
        <Fragment>
            {/*Horizontal*/}
            <div className={'boxHorizontal'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--heading'}>периоды</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--heading'}>ряды</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemOne'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--primary'}>I</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>1</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemTwo'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--primary'}>II</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>2</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemThree'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--primary'}>III</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>3</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemFour'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--common'}>IV</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>4</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemFive'}>
                <div className={'boxHorizontal__period boxHorizontal__period--none'}/>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>5</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemSix'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--common'}>V</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>6</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemSeven'}>
                <div className={'boxHorizontal__period boxHorizontal__period--none'}/>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>7</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemEight'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--common'}>VI</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>8</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemNine'}>
                <div className={'boxHorizontal__period boxHorizontal__period--none'}/>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>9</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemTen'}>
                <div className={'boxHorizontal__period boxHorizontal__period--border'}>
                    <h2 className={'boxHorizontal__period--primary'}>VII</h2>
                </div>
                <div className={'boxHorizontal__row boxHorizontal__row--border'}>
                    <h2 className={'boxHorizontal__row--primary'}>10</h2>
                </div>
            </div>

            <div className={'boxHorizontal boxHorizontal--itemOxide'}>
                <div className={'boxHorizontal__period boxHorizontal__period--borderOxide'}>
                    <h2 className={'boxHorizontal__period--oxide'}>Высшие оксиды</h2>
                </div>

            </div>

            <div className={'boxHorizontal boxHorizontal--itemHydrogen'}>
                <div className={'boxHorizontal__period'}>
                    <h2 className={'boxHorizontal__period--hydrogen'}>Летучие водородные соединения</h2>
                </div>
            </div>


            {/*Vertical*/}

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}>
                    <h2 className={'boxVertical__period--item'}>Группы элементов</h2>
                </div>
                <div className={'boxVertical__row boxVertical__row--none boxVertical__row--one'}>
                    <h2 className={'boxVertical__row--heading'}>I</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>II</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>III</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>V</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>IV</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>VI</h2>
                </div>
            </div>

            <div className={'boxVertical'}>
                <div className={'boxVertical__period boxVertical__period--none'}/>
                <div className={'boxVertical__row boxVertical__row--none'}>
                    <h2 className={'boxVertical__row--heading'}>VII</h2>
                </div>
            </div>

            <div className={'boxVertical--item'}>
                <div className={'boxVertical__period boxVertical__period--eight'}/>
                <div className={'boxVertical__row boxVertical__row--eight'}>
                    <h2 className={'boxVertical__row--heading'}>VIII</h2>
                </div>
            </div>
        </Fragment>
    )
};


export default Numbering;