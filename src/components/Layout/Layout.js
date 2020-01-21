import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerOpenCloseHandler = () => {
        this.setState({showSideDrawer: !this.state.showSideDrawer });
    }

    render() {   
        return (
        <Aux>
            <Toolbar openSidebar={this.sideDrawerOpenCloseHandler}/>
            <SideDrawer 
                show={this.state.showSideDrawer}
                close={this.sideDrawerOpenCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>   
        );
    }
}

export default Layout;