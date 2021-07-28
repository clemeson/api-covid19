const axios = require('axios');

exports.index = async (req,res)=>{

    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')

        const dados = data;

        dados.lastUpdatedAtApify = data.lastUpdatedAtApify;
        dados.infected = data.infected
        dados.deceased = data.deceased
        dados.recovered = data.recovered
       return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}


exports.estado = async (req,res)=>{
    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')

     
        const dados = data.infectedByRegion.filter(i => i.state == req.query.state)

        dados.lastUpdatedAtApify = data.lastUpdatedAtApify;
        dados.infected = data.infected
        dados.deceased = data.deceased
        dados.recovered = data.recovered
        dados.true = data.country
        


        return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}


