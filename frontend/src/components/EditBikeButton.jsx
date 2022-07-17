import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditBikeInfo from './EditBikeInfo';
import axios from "axios";

const EditBikeButton = (item) => {
    const url = 'http://127.0.0.1:8000/api/bikes/edit';
    const [show, setShow] = useState(false);
    const [editBikeId, setEditBikeId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        title: '',
        IDN: '',
        address: '',
        city: '',
    })

    const handleClose = () => setShow(false);
    const handleShow = (e, item) => {
        
        
        e.preventDefault()
        setShow(true);
        setEditBikeId(item.item);

        const formValue = {
            title: item.item.title,
            IDN: item.item.IDN,
            address: item.item.address,
            city: item.item.city,
        }

        setEditFormData(formValue);
    };

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newEditInfoData = {...editFormData};
        newEditInfoData[fieldName] = fieldValue;

        setEditFormData(newEditInfoData);
    }

    const handleEditFormSubmit = async(e, id) => {
        e.preventDefault();

        await axios.put(`http://127.0.0.1:8000/api/bikes/edit/${id}`,{
            title: item.item.title,
            IDN: item.item.IDN,
            address: item.item.address,
            city: item.item.city,
        }).then(res => {
            setShow(false);
            console.log(res.item);
            // setEditFormData(res.item.item);
        });

        console.log(item);
    }

    return (
        <>
            <Button className="btn btn-success btn-sm" onClick={(e) => handleShow(e, item)}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Bike edit form</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <EditBikeInfo editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={(e) => handleEditFormSubmit(e, item.item.id)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditBikeButton;