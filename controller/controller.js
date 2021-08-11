
const axios = require('axios');
exports.index = async (req,res)=>{
    try {
        var {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
        //capitalizando string da requisição para 'CAIXA ALTA'
        if(req.query.state){
            var ReqCaptialize = req.query.state.toUpperCase()
        }
        //dando um filter no array infectedByRegion da Api
        var dados = data.infectedByRegion.filter(i => i.state == ReqCaptialize)
        dados.deceasedByRegion = data.deceasedByRegion.filter(i => i.state ==  ReqCaptialize)
        dados.true = data.country
        // Formatando data de atualização
        dados.lastUpdatedAtApify  = data.lastUpdatedAtApify;
        var update = new Date(dados.lastUpdatedAtApify);
        var hora = parseInt(update.getHours())
        //populando objeto {dados}
        dados.horas = hora;
        dados.infected = data.infected;
        dados.deceased = data.deceased;
        dados.recovered = data.recovered;
        //retorando 
        return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}