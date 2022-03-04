const React = require('react')
const Def = require('../default.jsx')

function edit_form ( { place } ) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form className="text-center m-4" action={`/places/${place.id}?_method=PUT`} method="POST">
                <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name">Place Name <span className="text-danger">*</span></label>
                            <input className="form-control" id="name" name="name" defaultValue={place.name} required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="text" id="pic" defaultValue={place.pic} name="pic"/>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={place.city}/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={place.state}/>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="cuisines">Cuisines<span className="text-danger">*</span></label>
                            <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" defaultValue={place.founded}/>
                        </div>

                    </div>
                    <input className="btn btn-primary mb-4" type="submit" defaultValue="Update Place" />
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form