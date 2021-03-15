import mysql from "mysql";

class Mysql{
    // #connection
    constructor(){
        this.connection = mysql.createPool({
            host : "localhost",
            database : "kudhung",
            user : "root",
            password : "",
            port : 3306,
            connectionLimit: 10,
            multipleStatements: true,
            waitForConnections: true,
            queueLimit: 0
        })
    }

    query(sql, param = []){
        return new Promise((resolve, reject)=>{
            return this.connection.getConnection((err, conn)=>{
                if(err) reject(err);
                conn.query(sql, param,(errors, result)=>{
                    conn.release();
                    if(errors) reject(errors);
                    resolve(result)
                })

            });
        })
    }
}

export default Mysql