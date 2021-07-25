const axios = require('axios');

exports.index = async (req,res)=>{
    
    try {
        const {data} = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
        
       return res.render('index', {data})
    } catch (error) {
        console.error(error)
    }
}
