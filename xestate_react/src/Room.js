import React from "react";
import PropTypes from "prop-types";
import "./Room.css"
import Card from 'react-bootstrap/Card'

function Room({name,roomType,address,progress}){
    return (
        <div>
            <br/><br/>
             <Card border="primary" style={{ width: '18rem', className :"component"}}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Img src = "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300" />
                </Card.Body>
            </Card>
        </div>
            
           
            // {/* <br />
            // <div className="room">
            //     <div className="room_data">
            //         <h3 className = "room_name">{name}</h3>
            //         <h5 className = "room_type">{roomType}</h5>
            //         <h5 className = "room_address">{address}</h5>
            //         <p className= "room_progress">{progress}</p>   
            //     </div>
            // </div> */}
            );
    
}

Room.propTypes = {
    name: PropTypes.string.isRequired,
    roomType: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
};

export default Room;