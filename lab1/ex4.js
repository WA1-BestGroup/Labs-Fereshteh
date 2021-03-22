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
