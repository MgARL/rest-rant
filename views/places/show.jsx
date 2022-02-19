const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className='container pb-5'>
            <h1>{data.place.name}</h1>
            <div className="row">
                <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name}/>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Rating</h2>
                            <p className='faded'>not rated</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Description</h2>
                            <p>
                                Located at {data.place.city}, {data.place.state}.<br/>
                                Experts in {data.place.cuisines} cuisines
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit <i class="bi bi-pen"></i>
                            </a> 
                            <form className='text-center' method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger mx-2">
                                    Delete <i class="bi bi-trash3"></i>
                                </button>
                            </form>     
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12">
                    <h2>Comments <i class="bi bi-chat-left-dots"></i></h2>
                    <p>no comments yet</p>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show