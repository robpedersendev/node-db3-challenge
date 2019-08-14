

function find(){
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id });
}