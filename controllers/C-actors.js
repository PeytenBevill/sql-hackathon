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
    // console.log('HELLO')
        res.json(row)
    
    });
  }
  

  const getActorByName = (req, res) => {
      const splitString = req.params.actor.split(' ')
      const [first_name, last_name] = splitString
      pool.query(`SELECT * FROM ?? WHERE ?? = ? AND ?? = ?`, ["actors","first_name", first_name, "last_name", last_name],
      (err, row, fields) => {
          res.json(row);
      });
    }  

    const actorMovies = (req, res) => {
      const { id } = req.params;
      pool.query(
        'SELECT a.first_name, a.last_name, m.title FROM actors a JOIN movies m ON a.movie_id = m.id WHERE a.id = ?',
        [id],
        (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          } else {
            const actorMovies = rows.map((row) => ({
              actor_name: row.first_name + ' ' + row.last_name,
              movie_title: row.title,
            }));
            res.json({ actorMovies });
          }
        }
      );
    }

  
  module.exports = {
    getAllActors,
    getActorById,
    getActorByName,
    actorMovies,
  }
