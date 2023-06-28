const pool = require('../sql/connections')


//get all
const list = (req, res) => {
  pool.query('SELECT * FROM ??', ["movies"], (err, rows, fields) => {
    console.log(rows)
    res.json(rows)
  })
}

//get one by id
const show = (req, res) => {
  const {id} = req.params
  pool.query('SELECT * FROM ?? WHERE ?? = ?', ["movies", "id", id], (err, row, fields) => {
    res.json(row)
  })
}

//get one by title
const showTitle = (req, res) => {
  const {title} = req.params
  pool.query('SELECT * FROM movies WHERE title = ?', [title], (err, row, fields) => {
    
    res.json(row)
  })
}

//create new movie
const create = (req, res) => {
  const {body} = req
  const {title, release_year} = body
  pool.query('INSERT INTO ?? (??, ??) VALUES (?, ?)', ['movies', 'title', 'release_year', title, release_year], (err, row, fields) => {
    console.log(row)
    res.json(row)
  })
}

//update movie 
const update = (req, res) => {
  const {id} = req.params
  const {body} = req
  pool.query('UPDATE ?? SET ? WHERE ?? = ?', ["movies", body, "id", id], (err, row, fields) => {
    console.log(row, fields)
    res.json(row.info)
  })
}

//delete movie
const deleteMovie = (req, res) => {
  const {id} = req.params
  pool.query('DELETE FROM ?? WHERE ?? = ?', ["movies", "id", id], (err, row, fields) => {
    res.json(row)
  })
}

module.exports = {
  list,
  show,
  showTitle,
  create,
  update,
  deleteMovie
}