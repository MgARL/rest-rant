const router = require('express').Router()

router.get('/', (req, res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-res.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpg'
      }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('Form Received')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})



module.exports = router