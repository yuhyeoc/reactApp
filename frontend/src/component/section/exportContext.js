import React, { createContext, Fragment } from 'react';
import { BackBtn } from '../../Home'

export const UserContext = createContext();

const KeyTxt = (props) => {
    const product = {
        name: '아이폰',
        brand: '애플',
        model: '13미니',
        year: '2022'
    };

    return (
        <Fragment>
            <UserContext.Provider value={product}>{props.children}</UserContext.Provider>
            <BackBtn />
        </Fragment>
    );
};

export default KeyTxt;