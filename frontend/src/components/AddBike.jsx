import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useNotification } from '../Notifications/NotificationProvider';

const CreateBike = () =>{
    const url = 'http://127.0.0.1:8000/api/bikes/add';
    const [data, setData] = useState({
        title: '',
        IDN: '',
        address: '',
        city: '',
    });

    const [formValues, setFormValues] = useState(data);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    

    let navigate = useNavigate();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormValues({...formValues, [id]: value});
        
    }

    useEffect(() =>{
        console.log(formValues);
        setData(formValues);
    },[formValues]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if( !isSubmit)
        {
            const errors = validate(formValues);
            if(Object.keys(errors).length === 0)
            {
                setIsSubmit(true);

                try{
                    await axios.post(url,{
                            title: data.title,
                            IDN: data.IDN,
                            address: data.address,
                            city: data.city,
                        }).then(res => {
                            navigate('/bikes'); 
                            handleNewNotification();
                            setIsSubmit(false);
                        });
                }catch{
                    setIsSubmit(false);
                }
            }
            setFormErrors(errors);
        }
    }

    const validate = (values) => {
        const errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.title){
            errors.title = 'Title is required!';
        }else if(values.title.length < 3) {
            errors.title = 'Title should have at least 3 symbols'
        }
        if(!values.IDN){
            errors.IDN = 'IDN is required!';
        }else if(values.IDN.length < 12 || values.IDN.length > 12) {
            errors.IDN = 'IDN should consist of 12 symbols'
        }
        if(!values.address){
            errors.address = 'Address is required!';
        }
        if(!values.city){
            errors.city = 'City is required!';
        }

        return errors;
    }

    const dispatch = useNotification();

    const handleNewNotification = () => {
        dispatch({
            type: "SUCCESS",
            message: "BIKE ADDED SUCCESSFULLY",
        })
    }

    return (
        <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className="card-header justify-content-center d-flex">Add new bike</div>
                            <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group p-1">
                                    <label className='form-label'>Bike Title</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter bike title" 
                                        className="form-control"
                                        id='title'
                                        value={formValues.title}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid">{formErrors.title}</div>
                                </div>
                                <div className="form-group p-1">
                                    <label className='form-label'>IDN</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter IDN" 
                                        className="form-control"
                                        id='IDN'
                                        value={formValues.IDN}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid">{formErrors.IDN}</div>
                                </div>
                                <div className="form-group p-1">
                                    <label className='form-label'>Address</label> 
                                    <input 
                                        type="text" 
                                        placeholder="Enter IDN" 
                                        className="form-control"
                                        id='address'
                                        value={formValues.address}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid">{formErrors.address}</div>
                                </div>
                                <div className="form-group p-1">
                                    <label className='form-label'>City</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter IDN"
                                        className="form-control"
                                        id='city'
                                        value={formValues.city}
                                        onChange={handleChange}
                                    />
                                    <div className="invalid">{formErrors.city}</div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBike;