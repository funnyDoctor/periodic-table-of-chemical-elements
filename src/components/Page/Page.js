import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Numbering from '../Numbering/Numbering';
import Elements from '../Elements/Elements';
import Lanthanides from '../Lanthanides/Lanthanides';
import Actinides from '../Actinides/Actinides';

class Page extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <main className={'main'}>
                    <div className={'containerElements'}>
                        <Numbering/>
                        <Elements/>
                    </div>
                    <div className={'heading'}>
                        <h3 className={'heading--heading'}>Лантанойды</h3>
                    </div>
                    <div className={'otherElements'}>
                        <Lanthanides/>
                    </div>
                    <div className={'heading'}>
                        <h3 className={'heading--heading'}>Актиноиды</h3>
                    </div>
                    <div className={'otherElements'}>
                        <Actinides/>
                    </div>
                    <Footer/>
                </main>
            </Fragment>

        )
    }
}


export default Page;