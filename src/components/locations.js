/**
 * Created by Liat Gofstein on 1/29/2017.
 */
import React, {Component} from 'react'

const locations1 = {
    "China": {"lat": 35.861660, "lng": 104.195397},
    "Japan": {"lat": 36.204824, "lng": 138.252924},
    "Jerusalem": {"lat": 31.768319, "lng": 35.213710},
    "Bora Bora": {"lat": -16.499079, "lng": -151.755062},
    "England": {"lat": 52.355518, "lng": -1.174320},
    "India": {"lat": 20.593684, "lng": 78.962880},
    "Boston": {"lat": 42.360082, "lng": -71.058880},
    "Mount Fuji": {"lat": 35.360555, "lng": 138.727778},
    "Philippines": {"lat": 12.879721, "lng": 121.774017}
}

const locations2 = {
    "Tahiti": {"lat": -17.650920, "lng": -149.426042},
    "Bora Bora": {"lat": -16.499079, "lng": -151.755062},
    "Paris": {"lat": 48.856614, "lng": 2.352222},
    "Moorea": {"lat": -17.538843, "lng": -149.829523},
    "Nuku Hiva": {"lat": -8.860481, "lng": -140.142088},
    "Tapoa": {"lat": 12.249707, "lng": 1.676069},
    "Southern Cross": {"lat": -31.230556, "lng": 119.327778},
    "Portugal": {"lat": 39.399872, "lng": -8.224454},
    "Madeira": {"lat": 32.760707, "lng": -16.959472},
    "Azores": {"lat": 37.741249, "lng": -25.675594},
    "Arabia": {"lat": 23.885942, "lng": 45.079162},
    "India": {"lat": 20.593684, "lng": 78.962880},
    "New Guinea": {"lat": -5.012220, "lng": 141.347016}
}

export default class Locations extends Component {

    constructor(props) {
        super(props);
        this.updateLocation1 = this.updateLocation1.bind(this);
        this.updateLocation2 = this.updateLocation2.bind(this);
    }

    updateLocation1(e) {
        console.log("In UpdateLocation");
        var location = locations1[e.target.innerText.trim()];
        this.props.setLocation(location.lat, location.lng);
        return false;
    }
    updateLocation2(e) {
        console.log("In UpdateLocation");
        var location = locations2[e.target.innerText.trim()];
        this.props.setLocation(location.lat, location.lng);
        return false;
    }

    render() {
        const {changeCenter} = this.props;
        const onClick1 = this.updateLocation1;
        const onClick2 = this.updateLocation2;
        return (
            <div style={ {
                padding: "16",
                border: "1 solid rgb(115, 115, 115)",
                color: "rgb(115, 115, 115)",
                overflow: "auto"
            }}>
                <h3><b> Chapter 1 - From the Boundless Deep </b></h3>
                <div>
                 <p><a href="#" onClick={onClick1}> China </a></p>
                    <p><a href="#" onClick={onClick1}> Japan </a></p>
                   <p> <a href="#" onClick={onClick1}> Jerusalem </a></p>
                    <p><a href="#" onClick={onClick1}> Bora Bora </a></p>
                    <p><a href="#" onClick={onClick1}> England </a></p>
                    <p><a href="#" onClick={onClick1}> India </a></p>
                    <p><a href="#" onClick={onClick1}> Boston </a></p>
                    <p><a href="#" onClick={onClick1}> Mount Fuji </a></p>
                    <p><a href="#" onClick={onClick1}> Philippines </a></p>
                </div>
                <h3><b> Chapter 2 - From the Sun-Swept Lagoon </b></h3>
                <div>
                    <p><a href="#" onClick={onClick2}> Tahiti </a></p>
                    <p><a href="#" onClick={onClick2}> Bora Bora </a></p>
                    <p> <a href="#" onClick={onClick2}> Paris </a></p>
                    <p><a href="#" onClick={onClick2}> Moorea </a></p>
                    <p><a href="#" onClick={onClick2}> Nuku Hiva </a></p>
                    <p><a href="#" onClick={onClick2}> Tapoa </a></p>
                    <p><a href="#" onClick={onClick2}> Southern Cross </a></p>
                    <p><a href="#" onClick={onClick2}> Portugal </a></p>
                    <p><a href="#" onClick={onClick2}> Madeira </a></p>
                    <p><a href="#" onClick={onClick2}> Azores </a></p>
                    <p><a href="#" onClick={onClick2}> Arabia </a></p>
                    <p><a href="#" onClick={onClick2}> India </a></p>
                    <p><a href="#" onClick={onClick2}> New Guinea </a></p>
                </div>
                </div>
        )
    }

}