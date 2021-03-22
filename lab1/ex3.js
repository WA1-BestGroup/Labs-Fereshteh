//Lab1 - Ex3
'use strict';
const db = require('./db');
const dayjs = require('dayjs');

/**
 * Get all tasks  
 */
 const sql = "SELECT * FROM tasks";
 db.all(sql, [], (err, rows) => {
     if (err) 
         reject(err);
     else if (rows.length === 0)
         resolve(undefined);
     else{
         resolve(rows);
     }
 });

/**
 * TaskList containing only the list of tasks whose deadline is after a given date; 
 */
 const sql = "SELECT * FROM tasks where date > ?";
 db.all(sql, [date], (err, rows) => {
     if (err) 
         reject(err);
     else if (rows.length === 0)
         resolve(undefined);
     else{
         resolve(rows);
     }
 });


 /**
 * TaskList containing only the list of tasks with given word; 
 */
  const sql = "SELECT * FROM tasks where description startswith(d)";
  db.all(sql, [], (err, rows) => {
      if (err) 
          reject(err);
      else if (rows.length === 0)
          resolve(undefined);
      else{
          resolve(rows);
      }
  });


  