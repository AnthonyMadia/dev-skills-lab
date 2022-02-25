import { Router } from 'express'
const router = Router()

/* GET home page. */
// localhost:3000
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Skillz' })
})

export { 
  router
}
