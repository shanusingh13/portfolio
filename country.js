import Countryitem from"./countryitem.js";

class Country {
    countries = []

    async getCountries() {
        let response = await fetch('https://restcountries.com/v3.1/all')

        let data = await response.json();

        this.countries = data
    }

    async render(){
        await this.getCountries();
        let root = document.getElementById('root')

        for (const country of this.countries) {

           let el = new Countryitem(country)
           
           let parentDiv = el.render()
           root.append(parentDiv)

            
        }
      

    }
}

export default Country;