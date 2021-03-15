import Repository from "../../library/Repositori"

export async function get(req, res){
    const repo = new Repository({tableName : "tbl_warna", primaryKey :"warna_id"});
    const { mode, id } = req.query;
    try {
        if (mode == "all") {
            const query = await repo.find();
            return res.json(query);
        }else{
            const query = await repo.findOne(id);
            return res.json(query);
        }
    } catch (error) {
        return res.json(error)
    }
}

export async function post(req, res){
    const repo = new Repository({tableName : "tbl_warna", primaryKey :"warna_id"});
    const { model } = req.body;
    try {
        const query = await repo.create(model);
        return res.json(query);
    } catch (error) {
        return res.json(error)
    }
}

export async function patch(req, res){
    const repo = new Repository({tableName : "tbl_warna", primaryKey :"warna_id"});
    const { model } = req.body;
    const { id } = req.query;
    try {
        const query = await repo.updateById(id, model);
        return res.json(query);
    } catch (error) {
        return res.json(error)
    }
}

export async function del(req, res){
    const repo = new Repository({tableName : "tbl_warna", primaryKey :"warna_id"});
    const { id } = req.query;
    try {
        const query = await repo.deleteById(id);
        return res.json(query);
    } catch (error) {
        return res.json(error)
    }
}