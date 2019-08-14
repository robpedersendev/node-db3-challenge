

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

function add({ scheme_name }) {
    return db('schemes').insert({ scheme_name });
}

function update({ scheme_name }, id) {
    return db('schemes')
        .where({ id })
        .update({ scheme_name })
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}