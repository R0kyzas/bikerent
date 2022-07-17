import React from "react";

const EditBikeInfo = ({editFormData, handleEditFormChange}) => {

    return(
        <div>
            <div className="form-group p-1">
                <label className='form-label'>Title</label>
                <input 
                    type="text"
                    className="form-control"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                />
                {/* <div className="invalid">{formErrors.IDN}</div> */}
            </div>
            <div className="form-group p-1">
                <label className='form-label'>IDN</label>
                <input 
                    type="text"
                    className="form-control"
                    name="IDN"
                    value={editFormData.IDN}
                    onChange={handleEditFormChange}
                />
                {/* <div className="invalid">{formErrors.IDN}</div> */}
            </div>
            <div className="form-group p-1">
                <label className='form-label'>Address</label>
                <input 
                    type="text"
                    className="form-control"
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
                {/* <div className="invalid">{formErrors.IDN}</div> */}
            </div>
            <div className="form-group p-1">
                <label className='form-label'>City</label>
                <input 
                    type="text"
                    className="form-control"
                    name="city"
                    value={editFormData.city}
                    onChange={handleEditFormChange}
                />
                {/* <div className="invalid">{formErrors.IDN}</div> */}
            </div>
        </div>
    )
}

export default EditBikeInfo;