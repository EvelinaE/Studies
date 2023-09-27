// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du parametrus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.
// function convertDate(numberOfDays, format) {
    let date = 15
    switch (format) {
      case "minutes":
        date = numberOfDays * 24 * 60
        break
  
      case "hours":
        date = numberOfDays * 24
        break
  
      case "weeks":
        date = (numberOfDays / 7).toFixed(1)
        break
  
      case "months":
        date = (numberOfDays / 30).toFixed(2)
        break
  
      case "years":
        date = numberOfDays / 365. 
        break
  
      default:
        date = "error"
    }
  
    return date
  }
  
  let convertedDate = convertDate(25, "years")
  console.log(convertedDate)
  // convertDate();
  
  // 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
  // 9.1. Funkcija priima du parametrus:
  //   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
  //   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
  // 9.2. Funkcija grąžina atsakymą tokiu formatu:
  //   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
  //   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.
  
  function remainder(divident, divisor) {
    let quotent = divident % divisor
    console.log(quotent);
  }
  
  let myResult = remainder(10, 5)
  
  
  // 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.
  function nuberOfCharacters(str) {
      console.log(str.length)
    
      let strLength = str.length
    
      if (str.length % 2 === 0) {
        console.log("the number is even")
      } else {
        console.log("the number is odd")
      }
    
    }
    nuberOfCharacters('aaaaaa')
  
  //   11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
  //   11.1. Funkcija priima du parametrus: tekstą ir kelintą simbolį reikia grąžinti.
  //   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
  
  //   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
  
  //   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.
  function getSymbol(str, num) {
  
      if (num === 0) {
        return 'ERROR: zero is not a proper digit'
      }
    
      if (!str || !num) {
        return 'ERROR'
      }
    
      if (typeof str !== 'string') {
        return 'ERROR: the first parameter has to be a text (string)'
      }
    
      if (isNaN(num)) {
        return 'ERROR second parameter has to be a number'
      }
    
      let strLength = str.length
    
      let convertedNum = num < 0 ? num : num * -1
    
      if (convertedNum > strLength) {
        return `Text "${str}" has ${strLength} symbols but you called for ${convertedNum}`
      }
    
      if (num < 0) {
        let backSymbol = str.at(num)
    
        return `Text "${str}" ${convertedNum} symbol is "{backSymbol}"`
      }
    
      let index = num - 1
    
      let symbol = str.at(index)
    
      return `Text "${str}" number ${num} symbol is ${symbol}".`
    }
    
    
    console.log(getSymbol('hey', 2))