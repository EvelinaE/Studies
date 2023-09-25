//is paskaitos 

function checkAge(age) {

    if (age < 0) {
      return 'Nurodytas amžius yra per mažas, jis negali būti neigiamas skaičius.'
    }
  
    if (age < 6) {
      return 'Į mokyklą neina'
    }
  
    if (age < 7) {
      return 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
    }
  
    if (age < 10) {
      return 'Pradinė'
    }
  
    if (age < 11) {
      return 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.'
    }
  
    if (age < 14) {
      return 'Pagrindinė'
    }
  
    if (age < 15) {
      return 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.'
    }
  
    if (age < 18) {
      return 'Gimnazija'
    }
  
    if (age < 19) {
      return 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.'
    }
  
    if (age < 120) {
      return 'Mokyklą baigė'
    }
  
    else 'Nurodytas amžius yra per didelis, jis negali būti didesnis už 120 metų.'
  }
  
  console.log(checkAge(1))
 