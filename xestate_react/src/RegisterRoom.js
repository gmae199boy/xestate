import React , {useState, useEffect } from 'react';
import './RegisterRoom.css';
import { Form, Button, Col } from "react-bootstrap";
import axios from 'axios';

class Register extends React.Component{
    state = {
        isLoading: true,
        rooms: []
      };
    //   getRooms = async () => {
    //     const rooms = await axios.get("/room/create");
    //     console.log(rooms);
    //     this.setState({ rooms , isLoading: false });
    //   };
    //   componentDidMount(){
    //     this.getRooms();
    //   }
}
const RegisterRoom = () => {

    const [name, setName] = useState("");
    const [roomType, setRoomType] = useState(0);
    const [address, setAddress] = useState("");
    const [state, setProgress] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const onClick = async() => {
        let body = {
                name: name,
                roomType : roomType,
                address : address,
                state : state,
                deposit: deposit,
                monthlyPayment: monthlyPayment,
        }
        let body_json = JSON.stringify(body);
        axios({
            method: 'POST',
            url: 'https://blog.nopublisher.dev/room/create',
            body: body_json,
        })
        // .then(function (response) {console.log(response);})
        // .catch(error => {console.log('error : ',error.response)});
        console.log(body_json);
    }

    // useEffect(() => {
        
    // }, [name, roomType, address, progress]);

    // pressed = function() {
    //     fetch("https://blog.nopublisher.dev/room/create", {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             roomType: roomType,
    //             address: address,
    //             progress: progress,
    //         }),
    //     });
    // }

        return(
            <Form>
                    <br/><br/>
                        <Form.Group as={Col} controlId="name" sm="5">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="string" placeholder="이름을 입력하시오" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state" sm="5">
                        <Form.Label>roomType</Form.Label>
                        <Form.Control type="number" placeholder="0 또는 1 입력" /> 
                        </Form.Group>

                        <Form.Group as={Col} controlId="address" sm="5">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="string" placeholder="주소를 입력하시오" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state" sm="5">
                        <Form.Label>state</Form.Label>
                        <Form.Control type="number" placeholder="0 또는 1 입력"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="deposit" sm="5">
                        <Form.Label>보증금</Form.Label>
                        <Form.Control type="number" placeholder="금액을 입력하시오"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="monthly payment" sm="5">
                        <Form.Label>월세</Form.Label>
                        <Form.Control type="number" placeholder="금액을 입력하시오" />
                        </Form.Group>

                        <Button onClick = {onClick} variant="primary">
                            Submit
                        </Button>
            </Form>
        )
    }


export default RegisterRoom;