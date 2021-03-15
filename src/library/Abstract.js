class Abstract{
    constructor(){
        if(new.target == Abstract){
            throw new TypeError("Cannot construct Abstrack instances directly");
        }
    }
    async find(){}
    async findOne(id){}
    async create(model){}
    async updateById(id,model){}
    async deleteById(id){}
}

export default Abstract;