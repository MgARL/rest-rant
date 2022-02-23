const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
  try {
    let places = await db.Place.find()
    console.log(places)
    res.render('places/index', { places })
  } catch (err) {
    console.error(err)
    res.render('error404')
  }
})

router.post('/', async (req, res) => {
  try {
    let response = await db.Place.create(req.body)
    res.redirect('/places')
  } catch (err) {
    console.error(err)
    res.render('error404')
  }
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res) => {
  try {
    let place = await db.Place.findById(req.params.id)
    res.render('places/show', { place })
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

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router