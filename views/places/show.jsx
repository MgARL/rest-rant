const React = require('react')
const Def = require('../default')

function show ({ place }) {
    let comments = (
        <p className='inactive'>
            No comments yet!
        </p>
    )
    let rating = (
        <h4 className='inactive'>
            not yet rated
        </h4>
    )

    if(place.comments.length){
        // Ratings
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRatings = sumRatings / place.comments.length
         rating =(
             <h4>
                 {Math.round(averageRatings)} stars
             </h4>
         )

        //Comments 
        comments = place.comments.map( comment => {
            return (
                <div className="col-sm-4 border bg-gray">
                    <h3 className="rant">{comment.rant ? 'Rant! 😡': 'Rave: 😻'}</h3>
                    <h4>
                        <strong>- {comment.author}</strong>
                    </h4>
                    <p>{comment.content}</p>
                </div>
            )
        })
    }

    return (
        <Def>
          <main className='container pb-5'>
            <h1>{place.name}</h1>
            <div className="row">
                <div className="col-sm-6">
                <img src={place.pic} alt={place.name}/>
                <h3>Located at {place.city}, {place.state}.</h3>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Rating</h2>
                            {rating}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Description</h2>
                            <h5>{place.showEstablished()}</h5>
                            <p>
                              Serving {place.cuisines}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <a href={`/places/${place.id}/edit`} className="btn btn-warning">
                                Edit <i className="bi bi-pen"></i>
                            </a> 
                            <form className='text-center' method='POST' action={`/places/${place.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger mx-2">
                                    Delete <i className="bi bi-trash3"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments */}
            <div className="row mt-5">
                <div className="col-sm-12">
                    <h2>Comments <i className="bi bi-chat-left-dots"></i></h2>
                </div>
                {comments}
            </div>


            <form className='border mt-5 p-3 bg-gray' action={`${place.id}/rant`} method='POST'>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <label className='form-label' htmlFor="author">Your Name:</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="col-sm-6 text-center">
                        <label className='form-label' htmlFor="rant">Is this Rant?</label><br></br>
                        <input  type="checkbox" id='rant' name='rant'/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-4">
                        <label className='form-label me-2' htmlFor="stars">Rating enter 1 to 5</label>
                        <input className="form-control-sm" type="number" id='stars' name='stars' min='1' max='5' step='0.5'/>
                    </div>
                </div>
                 <div className="row mb-3">
                    <div className="col-sm-12">
                        <label className='form-label' htmlFor="content">Comment: </label>
                        <input className="form-control" type="text" id='content' name='content' minLength='3'/>
                    </div>

                 </div>
                <div className="row">
                    <div className="col-sm-2">
                        <input className="form-control" type="submit" />
                    </div>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = show