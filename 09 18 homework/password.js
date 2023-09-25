// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas.Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1.Patikrinti ar jis yra ilgesnis už 20 simbolių.Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2.Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas.Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."


function myPassword(randomPassword) {
    let password = randomPassword.trim()
    let passwordLength = password.length
  
    // 3. Jeigu slaptažodis neturi grotažymių(#), tai parašyti: „Slaptažodis privalo turėti grotažymes"
    if (!password.includes('#')) {
      return "Slaptažodis privalo turėti grotažymes"
    }
  
    if (passwordLength < 16) {
      return "Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
    }
  
    if (passwordLength >= 16 && passwordLength < 21) {
      return "Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
    }
  
    return "Slaptažodis tinkamas"
  }
  
  console.log(myPassword("aaaaaaaa"))