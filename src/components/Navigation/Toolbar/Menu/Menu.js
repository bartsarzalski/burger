import React from 'react';
import Aux from '../../../../hoc/Aux';

const menu = (props) => (

    <Aux>
        <button onClick={props.openSidebar}>Menu</button>
    </Aux>

);

export default menu;