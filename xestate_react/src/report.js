import React from "react";
import axios from "axios";
import Room from "./Room";
import Button from 'react-bootstrap/Button'

class report extends React.Component{
  state = {
    isLoading: true,
    rooms: []
  };
  getRooms = async () => {
    const rooms = await axios.get("/rooms");
    console.log(rooms);
    this.setState({ rooms , isLoading: false });
  };
  componentDidMount(){
    this.getRooms();
  }

  render() {
    const {isLoading, rooms} = this.state;
    return (
    <section className="container"> 
      {isLoading ? (
        <div className ="loader">
            <span className="loader__text">Loading...</span>
        </div> 
        ) : (
          <div className="rooms">
            <Button variant="danger">신고</Button>
            {rooms && rooms.data.map(room => (
                <Room
                 name={room.name}
                 roomType={room.roomType}
                 address={room.address}
                 progress={room.progress}
               />
             ))} 
          </div>
      )}
      </section>
      
    );
  }
}

export default report;
