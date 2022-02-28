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

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})
// Edit Page
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// comments
router.post('/:id/rant', (req, res) => {
  res.send(req.body)
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router