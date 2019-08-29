const INITIAL_STATE = {
    description: 'Ler livro',
    list: [
        {
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe',
            done: false
        }, {
            _id: 3,
            description: 'Consulta medica',
            done: false
        }, {
            _id: 4,
            description: 'Estudar React',
            done: false
        }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return { ...state, description: action.payload }
         default:
             return state   

    }

}