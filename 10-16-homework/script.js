const cities = [
  {
    name: 'Vilnius',
    population: 500000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['Gedimino pilis', 'ŠMC', 'MO museum'],
    isCapital: true,
  },
  {
    name: 'Riga',
    population: 600000,
    location: {
      continent: 'Europe',
      country: 'Latvia',
    },
    touristAttractions: ['House of the Black Heads', 'The Freedom Monument'],
    isCapital: true,
  },
  {
    name: 'Paris',
    population: 2100000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: ['Louvre Museum'],
    isCapital: true,
  },
  {

    name: 'Kaunas',
    population: 300000,
    location: {
      continent: 'Europe',
      country: 'Lithuania',
    },
    touristAttractions: ['9th Fort of the Kaunas Fortress', 'M.K. Čiurlionis Museum of Art', 'Devils\' Museum', 'Kaunas Town Hall',],
    isCapital: false,
  },

  {

    name: 'Milan',
    population: 1300000,
    location: {
      continent: 'Europe',
      country: 'Italy',
    },
    touristAttractions: [],
    isCapital: false,
  },


  {

    name: 'Istanbul',
    population: 15000000,
    location: {
      continent: 'Europe',
      country: 'Turkey',
    },
    touristAttractions: ['Hagia Sophia', 'The Blue Mosque', 'Galata Tower'],
    isCapital: false,
  },

  {

    name: 'Zagreb',
    population: 800000,
    location: {
      continent: 'Europe',
      country: 'Croatia',
    },
    touristAttractions: ['Cathedral of Zagreb', 'Museum of Broken Relationships',],
    isCapital: true,
  },

  {

    name: 'Rio de Janeiro',
    population: 6700000,
    location: {
      continent: 'South America',
      country: 'Brasil',
    },
    touristAttractions: ['Christ the Redeemer', 'Tijuca National Park',],
    isCapital: false,
  },
]



function renderCities() {
  const citiesList = document.querySelector('#cities-list')

  cities.forEach((city) => {
    console.log(city.name)
    console.log(city.population)
    console.log(city.isCapital)
    console.log(city.location.continent)
    console.log(city.location.country)

    console.log(city.touristAttractions)
    console.log(city.touristAttractions.length)

    city.touristAttractions.forEach(attraction => {
      console.log(attraction)
    })

    const cityWrapper = document.createElement('div')
    cityWrapper.classList.add('city-wrapper')

    let capitalTitle = ''
    let capitalDescription = ''

    if (city.isCapital) {
      cityWrapper.classList.add('capital')
      capitalTitle = ' (capital)'
      capitalDescription = ` ${city.name} is the capital of ${city.location.country}.`
    }

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = city.name + capitalTitle

    const cityDescription = document.createElement('p')
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.`
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalDescription}`

    cityWrapper.append(cityTitle, cityDescription)

    if (city.touristAttractions.length > 0) {
      const touristAttractionsWrapper = document.createElement('div')
      touristAttractionsWrapper.classList.add('tourist-attractions-list')

      const touristAttractionsTitle = document.createElement('h3')

      if (city.touristAttractions.length > 1) {
        touristAttractionsTitle.textContent = `Tourist attractions of ${city.name} are:`
      } else {
        touristAttractionsTitle.textContent = `Tourist attraction of ${city.name} is:`
      }

      const touristAttractionsList = document.createElement('ul')

      city.touristAttractions.forEach(attraction => {
        const touristAttractionItem = document.createElement('li')
        touristAttractionItem.textContent = attraction

        touristAttractionsList.append(touristAttractionItem)
      })

      touristAttractionsWrapper.append(touristAttractionsTitle, touristAttractionsList)

      cityWrapper.append(touristAttractionsWrapper)
    }

    citiesList.append(cityWrapper)
  })
}
renderCities()
function styleCities() {
  const citiesCapitals = document.querySelectorAll('.capital h2')
  citiesCapitals.forEach((capitalTitle) => {
    capitalTitle.style.color = 'red'
  })
  
  const allCities = document.querySelectorAll('.city-wrapper')
 
  for (let i = 0; i < allCities.length; i += 2) {
    allCities[i].style.backgroundColor = '#f0f0f0'
  }

 

  const touristAttractionLists = document.querySelectorAll('.tourist-attractions-list ul')
  touristAttractionLists.forEach(ulElement => {
    const liElements = ulElement.querySelectorAll('li')
    liElements.forEach((liElement, index) => {
      if (index === 0) {
        liElement.style.color = 'green'
      } else if (index > 2) {
        liElement.style.color = 'red'
      } else {
        liElement.style.color = 'orange'
      }
    })
  })

  const citiesList = document.querySelector('#cities-list')
  
  citiesList.style = `display: flex;
                        flex-wrap: wrap;
                        gap: 20px;`

  allCities.forEach((city, index) => {
    console.log(index, city)
    city.style.padding = '15px'
    city.style.boxSizing = 'border-box'

    if (index === allCities.length - 1 && index % 2 === 0) {
      city.style.width = '100%'
    } else {
      city.style.width = 'calc((100% - 20px) / 2)'
    }
  })
}

styleCities()