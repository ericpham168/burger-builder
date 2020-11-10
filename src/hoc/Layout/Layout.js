import React, { Component } from 'react'
import Aux from '../Auxilary/Auxilary';
import classess from './Layout.module.css'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component{

    state = {
        ShowSideDrawer: false
    }

    ShowSideDrawerHandler = () => {
        this.setState({ShowSideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{
            return {ShowSideDrawer: !prevState.ShowSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <ToolBar drawerToogleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.ShowSideDrawer} clicked={this.ShowSideDrawerHandler}></SideDrawer>
                <main className={classess.main}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;