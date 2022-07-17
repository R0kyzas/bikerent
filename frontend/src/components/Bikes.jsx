import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditBikeInfo from './EditBikeInfo';
import EditBikeButton from './EditBikeButton';


const Bike = () => {
    const [data, setData] = useState([]);
    const [editBikeId, setEditBikeId] = useState(null);


    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/bikes')
            .then((res) => {
                setData(res.data.bikes)
            }).catch(err =>{
                console.log(err);
            });
    }, []);

    
    // const handleEditClick = (e, data) => {
    //     console.log(data.id)
    //     e.preventDefault()
    //     setEditBikeId(data.id);

    //     const formValue = {
    //         title: data.title,
    //         IDN: data.IDN,
    //         address: data.address,
    //         city: data.city,
    //     }

    //     setEditFormData(formValue);
    // }

    

    const displayBikes = () => {
        if (data.length > 0) {
           return( 
                data.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.IDN}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>
                                <EditBikeButton item={item} />
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteBike(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            )
        }
        else {
            return (<tr><td colSpan='7'><h2>Loading...</h2></td></tr>)
        }
    }
    
    const deleteBike = async (id) => {
            await axios.delete(`http://127.0.0.1:8000/api/bikes/delete/${id}`)
            setData(
                data.filter((item) => {
                    return item.id !== id;
                })
            )
    }

    return(
        <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>IDN</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayBikes()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Bike;