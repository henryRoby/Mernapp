import React from 'react';
import { Button } from "react-bootstrap";
import Ajouter from "./ajouter";
import API from '../../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="Dashboard">
               
                <Button id='deconect' onClick={this.disconnect} blockbsSize="large"type="submit">
                Deconnecter
                </Button>
                <Ajouter/>
            </div>
        )
    }
}