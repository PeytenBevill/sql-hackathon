const mysql = require('mysql2');
const pool = require('../sql/connections');

const getAllActors = (req, res) => {
    pool.query("SELECT * FROM ??", ["actors"], (err, rows, fields) => {
        // console.log(err, rows, fields);
        res.json(rows);
    });
  }
  
const getActorById = (req, res) => {
    const { id } = req.params;

    pool.query(`SELECT * FROM ?? WHERE ?? = ?`, ["actors", "id", id], (err, row, fields) => {
        // console.log(err, row, fields);
    console.log('HELLO')
        res.json(row)
    
    });
  }
  

  const getActorByName = (req, res) => {
      const { first_name, last_name } = body;
      const {body} = req;
  
      console.log(req.params)
    
      pool.query(`SELECT * FROM ?? (??, ??) VALUES (?,?)`, ["actors","first_name", "last_name", first_name, last_name],
      (err, row, fields) => {
          // console.log(row);
          res.json(row);
      });
    }  

    const actorMovies = (req, res) => {
      const {id} = req.params
      pool.query(`SELECT a.actor_name, m.title FROM actors a JOIN movies m ON a.movie_id = m.id WHERE a.actor_id = ?`), [id], (err, row, fields) => {
      res.json(row)
      };
    }

  
  module.exports = {
    getAllActors,
    getActorById,
    getActorByName,
    actorMovies,
  }