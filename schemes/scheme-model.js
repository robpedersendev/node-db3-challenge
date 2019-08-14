

function find(){
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id });
}

function findSteps(id) {
    return db('steps')
        .where({ scheme_id: id });
}