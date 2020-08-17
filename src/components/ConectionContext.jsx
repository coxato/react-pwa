import React, { Component } from 'react';
import ConnectionContext from "./context";


class ConnectionHOC extends Component{

    state = {
        isOnline: true
    }

    componentDidMount(){
        window.addEventListener('online', this.checkConnection);
        window.addEventListener('offline', this.checkConnection);
        this.setState({ isOnline: window.navigator.onLine });
    }

    checkConnection = () => {
        this.setState({ isOnline: window.navigator.onLine });
    }

    render(){
        return(
            <ConnectionContext.Provider value={this.state}>
                {this.props.children}
            </ConnectionContext.Provider>
        )
    }
}


export default ConnectionHOC;