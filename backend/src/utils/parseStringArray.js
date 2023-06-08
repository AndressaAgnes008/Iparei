module.exports = function parsestringArray(arrayAsString) {
    return arrayAsString.split(',').map(observacao => observacao.trim());
}