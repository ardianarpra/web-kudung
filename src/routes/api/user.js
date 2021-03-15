import Repository from "../../library/Repositori"
import bcrypt from "bcrypt"

export async function post(req, res) {
    const repo = new Repository({ tableName: "tbl_jenis", primaryKey: "jenis_id" });
    const { model } = req.body;
    const { mode } = req.query;
    try {
        if (mode == "login") {
            let sql = "SELECT username, password FROM tbl_user WHERE username = ?;"
            const data = await repo.customQuery(sql, [model.username]);
            if (data == undefined || data == null) {
                return res.json({ auth: false, pesan: "Username salah" })
            }
            let user = data[0];
            if (!comparePassword(user.password, model.password)) {
                return res.json({ auth: false, pesan: "Password salah" })

            }
            req.session.auth = true;
            req.session.uid = user.uid;
            req.session.username = user.username;
            console.log(req.session);
            user.isAdmin = true;
            return res.json(user);
        }
    } catch (error) {
        return res.json(error)
    }
}

export async function del(req, res) {
    const repo = new Repository({ tableName: "tbl_jenis", primaryKey: "jenis_id" });
    const { model } = req.body;
    const { mode } = req.query;
    try {
        if (mode == "login") {
            let sql = "SELECT username, password FROM tbl_user WHERE username = ?;"
            const query = await repo.customQuery(sql, [model.username]);
            return res.json(query);
        }
    } catch (error) {
        return res.json(error)
    }
}

function comparePassword(passHash, passInput) {
    return bcrypt.compareSync(passInput, passHash)
}
