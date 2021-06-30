function articlePicking(scenario) {
    let articles = []
    let count = 0
    //Recorro un while 4 veces o hasta tener 4 valores
    while (count < 4 && articles.length < 4) {
        //Recorro propiedad del objeto scenario
        for (let key in scenario) {
            //Si ya tengo 4 valores, freno el for.
            //De lo contrario, si hay data el objeto actual, pusheo su propiedad "token" en articles.
            if (articles.length === 4) break
            else if (scenario[key][count]) {
                articles.push(+scenario[key][count]["token"])
            }
        }
        count++
    }
    return articles
}

module.exports = { articlePicking };
