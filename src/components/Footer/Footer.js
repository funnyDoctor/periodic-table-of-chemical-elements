import React from 'react';

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__left'}>
                <div className={'footer__box colorS'}/>
                <div className={'footer__boxHeading'}>
                    <h3 className={'footer__heading'}>s-элементы</h3>
                </div>
                <div className={'footer__box colorP'}/>
                <div className={'footer__boxHeading'}>
                    <h3 className={'footer__heading'}>p-элементы</h3>
                </div>
                <div className={'footer__box colorD'}/>
                <div className={'footer__boxHeading'}>
                    <h3 className={'footer__heading'}>d-элементы</h3>
                </div>
                <div className={'footer__box footer__wrapper'}>
                    <div className={'footer__wrapper--l'}/>
                    <div className={'footer__wrapper--a'}/>
                </div>
                <div className={'footer__boxHeading'}>
                    <h3 className={'footer__heading'}>f-элементы</h3>
                </div>

                <div className={'footer__copy'}>
                    <p className={'footer__copy--heading'}><span className={'footer__copy--span'}>&copy;</span> Copyright 2020</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;