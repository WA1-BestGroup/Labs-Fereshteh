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
         console.log(rows);
     }
 });


 function getByDate(deadline) {
    const sql = "SELECT * FROM tasks WHERE deadline > ?";
    db.all(sql, [deadline], (err, rows) => {
        if (err)
            reject(err);
        else if (rows.length === 0)
            resolve(undefined);
        else {
            resolve(rows);
        }
    });
}




 function getByDate(deadline)
{
    const sql = "SELECT * FROM tasks WHERE deadline > ?";

    return new Promise((resolve, reject) => {

        db.all(sql,[deadline], (err, rows) => {
            let list;

            if(err)
                reject(err);
            else
            {
                list = new taskList();

                rows.forEach( (row) => {
                    list.add(new task(row.id, row.description, row.urgent == 1, row.private == 1, row.deadline));
                });
            }

            resolve(list);
        });

    });
}


