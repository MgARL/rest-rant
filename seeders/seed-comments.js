const db = require('../models')

async function seed(){
    //get the place
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    const namesArray = ['Famishes Fran', 'Miguel R.', 'Luis M.', 'Ray J.', 'Alfred H.']
    const contentArray = ['Wow, simply Amazing! Highly recommended', 'Very Good Place, We loved it', 'Solid Place to have a quick meal', 'The food was not that good', 'Horrible experience not recommended.']

    let bolVar = false

    for (let i = 0; i < namesArray.length; i++){
        if(i === 0){
            bolVar = false
        }else if( i % 2 === 0){
            bolVar = true
        }else{
            bolVar = false
        }

        let comment = await db.Comment.create({
            author: namesArray[i],
            rant: bolVar,
            stars: 5 - i,
            content: contentArray[i]
        })
        //create a fake sample comment
        // add that comment to the place's comment array
        place.comments.push(comment.id)

    }

    // save the place now that it has the comment
    await place.save()

    //Exit script
    process.exit()
}

seed()