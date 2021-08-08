import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import Rating from "./Rating";
const Filters = () => {
    const [rate,setRate]= useState(5);
    return (
        <div class="filters">
        <span class="title">Filter Products</span> 
        <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            />
            </span> 
            <span>
            <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
            </span> 
            <span>
            <Form.Check
            inline
            label="Include out of stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            />
            </span>
            <span>
            <Form.Check
            inline
            label="Fast Delivery only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            />
            </span>
            <span>
            <label type={{paddingRight:10}}>Rating:</label>
            <Rating rating={rate} 
            onClick={(i) =>setRate(i + 1)} 
            style={{cursor:"pointer"}}/>
            </span>  
            <Button variant="light">Clear Filters</Button>   
        </div>
    )
}

export default Filters;