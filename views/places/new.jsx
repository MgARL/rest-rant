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
                            <label htmlFor="city">City<span className="text-danger">*</span></label>
                            <input className="form-control" id="city" name="city" required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="state">State<span className="text-danger">*</span></label>
                            <input className="form-control" id="state" name="state" required/>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="cuisines">Cuisines<span className="text-danger">*</span></label>
                            <input className="form-control" id="cuisines" name="cuisines" required/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded"/>
                        </div>

                    </div>
                    <input className="btn btn-primary mb-4" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form