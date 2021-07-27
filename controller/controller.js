const axios = require('axios');

exports.index = async (req,res)=>{

    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')

        const dados = data;
       return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}


exports.infected = async (req,res)=>{
    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')

     
        const dados = data.infectedByRegion.filter(i => i.state == req.query.state)

        dados.lastUpdatedAtApify = data.lastUpdatedAtApify;
        dados.infected = data.infected
        dados.deceased = data.deceased
        dados.recovered = data.recovered
        


        return res.render('index', {dados})
    } catch (error) {
        console.error(error)
    }
}

exports.death = async (req,res)=>{
    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')

     
        const dados = data.deceasedByRegion.filter(i => i.state == req.query.state)

        dados.lastUpdatedAtApify = data.lastUpdatedAtApify;
        dados.infected = data.infected
        dados.deceased = data.deceased
        dados.recovered = data.recovered

        return res.render('index', {dados})
    } catch (error) {

        console.error(error)
    }
}


