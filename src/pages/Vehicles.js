import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import BookingForm from './BookingForm';
import Header from './Header';
function VehicleCard(props) {
    return (
      <Card style={{width: "18rem"}} className='m-3'>
        <Card.Img src='vehicle1.jpg' />
        <Card.Body className='text-center bg-secondary-subtle'>
          <Card.Title className='fs-3'>{props.details.make} {props.details.model}</Card.Title>
          <Card.Text className='fs-6'>{props.details.fuelType} {props.details.year}</Card.Text>
          <Card.Text className='fs-5'>
           ${props.details.rentPerHrs} per hour
          </Card.Text>
          {/* <Button variant="warning" className='mx-auto'> Book</Button> */}
          <BookingForm></BookingForm>
        </Card.Body>
      </Card>
    );
}

const Vehicles = () => {
    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:8080/api/vehicles');
                setAllVehicles(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <>
        <Header />
        <div className='mx-5'>
            <div className='d-flex flex-wrap justify-content-start'>
                {allVehicles.map((ele, index) => (
                    <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                        <VehicleCard details={ele} />
                    </div>
                ))}
            </div>
        </div>
        </>
        
    );
};

export default Vehicles;
