import Abstract from "./Abstract";
import Mysql from "./Mysql";


class Repository extends Abstract{
    constructor({tableName, primaryKey}){
        super();
        this.db = new Mysql();
        this.table = tableName;
        this.pk = primaryKey;
    }   
    async find() { 
        try {
            let sql = "SELECT * FROM ??;"
            const query = this.db.query(sql,[this.table]);
            return query;
        } catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            let sql = "SELECT * FROM ?? WHERE ?? = ?"
            const query = this.db.query(sql,[this.table, this.pk, id]);
            return query;
        } catch (error) {
            return error;
        }
    }
    async create(model) { 
        try {
            let sql = "INSERT INTO ?? SET ?;"
            const query = this.db.query(sql,[this.table, model]);
            return query;
        } catch (error) {
            return error;
        }
    }
    async updateById(id, model) {
        try {
            let sql = "UPDATE ?? SET ? WHERE ?? = ?;"
            const query = this.db.query(sql,[this.table, model, this.pk, id]);
            return query;
        } catch (error) {
            return error;
        }
     }
    async deleteById(id) {
        try {
            let sql = "DELETE FROM ?? WHERE ?? = ?;"
            const query = this.db.query(sql,[this.table, this.pk, id]);
            return query;
        } catch (error) {
            return error;
        }
     }

     async customQuery(sql, param = []){
        try {
            const query = this.db.query(sql,param);
            return query;
        } catch (error) {
            return error;
        }
     }
}

export default Repository;