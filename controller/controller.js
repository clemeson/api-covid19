const axios = require('axios');


exports.index = async (req,res)=>{
    try {
        var {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
        if(req.query.state){
            var ReqCaptialize = req.query.state.toUpperCase()
        }

        var dados = data.infectedByRegion.filter(i => i.state == ReqCaptialize)
        dados.deceasedByRegion = data.deceasedByRegion.filter(i => i.state ==  ReqCaptialize)
        dados.true = data.country
        dados.lastUpdatedAtSource  = data.lastUpdatedAtSource;
        var update = new Date(dados.lastUpdatedAtSource)
       // Formatando data de atualização
        var hora = parseInt(update.getHours())
        dados.horas = hora;
        console.log(dados.horas)
        dados.infected = data.infected;
        dados.deceased = data.deceased;
        dados.recovered = data.recovered;
        return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}