<div className='container mt-5'>
<div className='row'>
    <div className='col-md-12'>
        <div className='card'>
            <div className="card-header justify-content-center d-flex">Add new bike</div>
            <div className='card-body'>
            <form onSubmit={(e) => submit(e)}>
                <div className="form-group p-1">
                    <label>Bike Title</label>
                    <input type="text" id="title" value={data.title} onChange={(e)=> {setField('titleValue', e.target.value), handleInput}} isInvalid={!!errors.titleValue} placeholder="Enter bike title" className="form-control" />
                    <span type='invalid'>
                        {errors.titleValue}
                    </span>
                </div>
                <div className="form-group p-1">
                    <label>IDN</label>
                    <input type="text" id="IDN" value={data.IDN} onChange={(e)=> {setField('idnValue', e.target.value), handleInput }} isInvalid={!!errors.idnValue} placeholder="Enter IDN" className="form-control" />
                    <span type='invalid'>
                        {errors.idnValue}
                    </span>
                </div>
                <div className="form-group p-1">
                    <label>Address</label>
                    <input type="text" id="address" value={data.address} onChange={(e)=> {setField('addressValue', e.target.value), handleInput}} isInvalid={!!errors.addressValue} placeholder="Enter IDN" className="form-control" />
                    <span type='invalid'>
                        {errors.addressValue}
                    </span>
                </div>
                <div className="form-group p-1">
                    <label>City</label>
                    <input type="text" id="city" value={data.city} onChange={(e)=> {setField('cityValue', e.target.value), handleInput}} isInvalid={!!errors.cityValue} placeholder="Enter IDN" className="form-control" />
                    <span type='invalid'>
                        {errors.cityValue}
                    </span>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>