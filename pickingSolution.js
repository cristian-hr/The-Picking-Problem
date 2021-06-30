
function articlePicking(scenario) {
    let articles = []
    let count = 0
    while (count < 4 && articles.length < 4) {
        for (let key in scenario) {
            if (scenario[key][count] && articles.length < 4 ) {
                articles.push(+scenario[key][count]["token"])
            }
        }
        count++
    }
    return articles
}

module.exports = { articlePicking };
