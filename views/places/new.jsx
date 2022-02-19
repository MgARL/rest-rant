const React = require('react')
const Def = require('../default')

function new_form (){
    return(
        <Def>
            <main className="container">
                <h1>Add New Place</h1>
                <form  className="text-center m-4" action="/places" method="POST">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name">Place Name<span className="text-danger">*</span></label>
                            <input className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" name="pic"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city"/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state"/>
                        </div>

                    </div>
                    <div className="form-group d-flex flex-column align-items-center mb-3">
                        <label htmlFor="cuisines">Cuisines<span className="text-danger">*</span></label>
                        <input className="w-50 form-control" id="cuisines" name="cuisines" required/>
                    </div>
                    <input className="btn btn-primary mb-4" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form