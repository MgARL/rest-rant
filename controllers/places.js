const router = require('express').Router()
const db = require('../models')

// index
router.get('/', async (req, res) => {
  try {
    const places = await db.Place.find()
    res.render('places/index', { places })
  } catch (err) {
    console.error(err)
    res.render('error404')
  }
})

router.post('/', async (req, res) => {
  // default validation in mongoose not working if is an empty string.
  if(req.body.pic ===''){
    req.body.pic = undefined
  }
  try {
    const response = await db.Place.create(req.body)
    res.redirect('/places')
  } catch (err) {
    if(err && err.name === 'ValidationError'){
      let message = 'Validation Error: '
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation Error message:', message)
      res.render('places/new', { message: message, body: req.body })
    }else{
      console.error(err)
      res.render('error404')

    }
  }
})

// New Page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW Page
router.get('/:id', async (req, res) => {
  try {
    const place = await db.Place.findById(req.params.id).populate('comments')
    res.render('places/show', { place: place })
  } catch (err) {
    console.error(err)
    res.render('error404')
  }
})

// edit handler
router.put('/:id', async (req, res) => {
  // checking if pic is empty
  const { body } = req
  if(req.body.pic ===''){
    req.body.pic = undefined
  }

  let paramID = req.params.id

  try {
   let place = await db.Place.findById(paramID)//getting doc from db
  // assigning new data
   place.name = body.name
   place.pic = body.pic
   place.state = body.state
   place.cuisines = body.cuisines

  //  Updating the doc in DB
   await place.save()

   res.redirect(`/places/${paramID}`)
  } catch (error) {
    res.redirect('error404')
  }
})

// delete request
router.delete('/:id', async (req, res) => {
  try {
    await db.Place.deleteOne({ _id: req.params.id })
    res.redirect('/places')
    
  } catch (error) {
    res.redirect('error404')
  }

})

// Edit Page
router.get('/:id/edit', async (req, res) => {
  try {
    let place = await db.Place.findById(req.params.id)
     if (!place) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: place })
    }
    
  } catch (error) {
    console.error(error)
    res.render('error404')
  }
})

// comments
router.post('/:id/rant', async (req, res) => {
  let { body } = req

  body.rant = body.rant ? true : false

try {
  let place = await db.Place.findById(req.params.id)
  console.log('place: ', place)
  const comment = await db.Comment.create(body)
  console.log('comment: ', comment)
  place.comments.push(comment.id)
  await place.save()
  res.redirect(`/places/${req.params.id}`)
  // res.send('hi')
  
} catch (error) {
  console.log(error)
  res.render('error404')
}
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router