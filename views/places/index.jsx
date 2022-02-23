const React = require('react')
const Def = require('./../default')

function Index(data){
    let placesFormatted = data.places.map( (place, index) => {
        return ( 
        <div className='col-sm-5 mx-5'>
             
             <a href={`/places/${place.id}`}><h3>{place.name}</h3></a>
             <p className='text-center'>{place.cuisines}</p>
             <img src={place.pic} alt={place.name}/>
             <p className="text-center">
                 located in {place.city}, {place.state}
             </p>
         </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index