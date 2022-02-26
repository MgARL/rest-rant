const React = require('react')
const Def = require('../default')

function new_form (data){
    let message = ''
    let name = ''
    let pic = ''
    let city = ''
    let state = ''
    let cuisines = ''
    if(data.message){
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        )
        if(data.body){
            name = data.body.name
            pic = data.body.pic
            city = data.body.city
            state = data.body.state
            cuisines = data.body.cuisines
        }
    }
    // input values
    return(
        <Def>
            <main className="container">
                <h1>Add New Place</h1>
                {message}
                <form  className="text-center m-4" action="/places" method="POST">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name">Place Name<span className="text-danger">*</span></label>
                            <input className="form-control" id="name" name="name" defaultValue={name} required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" name="pic" defaultValue={pic} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="city">City<span className="text-danger">*</span></label>
                            <input className="form-control" id="city" name="city" defaultValue={city} required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="state">State<span className="text-danger">*</span></label>
                            <input className="form-control" id="state" name="state" defaultValue={state}  required/>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="cuisines">Cuisines<span className="text-danger">*</span></label>
                            <input className="form-control" id="cuisines" name="cuisines" defaultValue={cuisines} required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" defaultValue={new Date().getFullYear()}/>
                        </div>

                    </div>
                    <input className="btn btn-primary mb-4" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form