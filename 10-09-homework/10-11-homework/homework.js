

let arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// 3.1.Gauti tik teigiamus skaičius.

const filteredNums1 = arr.filter(function (num) {
  return num > 0
})
console.log(filteredNums1)

// 3.2.Gauti tik neigiamus skaičius

const filteredNums2 = arr.filter(function (num) {
  return num < 0
})
console.log(filteredNums2)

// 3.3.Gauti tik skaičius, kurie dalinasi iš 2.

const filteredNums3 = arr.filter(function (num) {
  return num % 2 === 0
})
console.log(filteredNums3)

// 3.4.Gauti tik skaičius, kurie dalinasi iš 3.
const filteredNums4 = arr.filter(function (num) {
  return num % 3 === 0
})
console.log(filteredNums4)

// 3.5.Gauti tik skaičius, kurie dalinasi iš 5.
const filteredNums5 = arr.filter(function (num) {
  return num % 5 === 0
})
console.log(filteredNums5)

// 3.6.Gauti tik skaičius, kurie dalinasi iš 11.
const filteredNums6 = arr.filter(function (num) {
  return num % 11 === 0
})
console.log(filteredNums6)

// 3.7.Gauti tik skaičius, kurie dalinasi iš 31.
const filteredNums7 = arr.filter(function (num) {
  return num % 31 === 0
})
console.log(filteredNums7)

// 3.8.Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
const filteredNums8 = arr.filter(function (num) {
  return num % 2 === 0 && num % 3 === 0
})
console.log(filteredNums8)

// 3.9.Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
const filteredNums9 = arr.filter(function (num) {
  return num % 3 === 0 && num % 7 === 0
})
console.log(filteredNums9)

// 3.10.Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
const filteredNums10 = arr.filter(function (num) {
  return num % 5 === 0 && num % 9 === 0
})
console.log(filteredNums10)

// 3.11.Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
const filteredNums11 = arr.filter(function (num) {
  return num % 5 === 0 && num % 11 === 0
})
console.log(filteredNums11)

// 3.12.Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
const filteredNums12 = arr.filter(function (num) {
  return num % 2 === 0 && num % 8 === 0 && num % 12 === 0
})
console.log(filteredNums12)

// 3.13.Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
const filteredNums13 = arr.filter(function (num) {
  return num % 2 === 0 || num % 3 === 0
})
console.log(filteredNums13)

// 3.14.Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
const filteredNums14 = arr.filter(function (num) {
  return num % 3 === 0 || num % 5 === 0
})
console.log(filteredNums14)

// 3.15.Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
const filteredNums15 = arr.filter(function (num) {
  return num % 5 === 0 || num % 6 === 0
})
console.log(filteredNums15)

// 3.16.Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
const filteredNums16 = arr.filter(function (num) {
  return num % 7 === 0 || num % 8 === 0
})
console.log(filteredNums16)

// 3.17.Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
const filteredNums17 = arr.filter(function (num) {
  return num % 9 === 0 || num % 13 === 0
})
console.log(filteredNums17)

// 3.18.Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
const filteredNums18 = arr.filter(function (num) {
  return num % 2 === 0 || num % 3 === 0 || num % 15 === 0
})
console.log(filteredNums18)

// 3.19.Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
const filteredNums19 = arr.filter(function (num) {
  return num % 5 === 0 || num % 7 === 0 || num % 9 === 0
})
console.log(filteredNums19)

// 3.20.Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
const filteredNums20 = arr.filter(function (num) {
  return num % 7 === 0 || num % 8 === 0 || num % 11 === 0
})
console.log(filteredNums20)

// 3.21.Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
const filteredNums21 = arr.filter(function (num) {
  return num % 9 === 0 || num % 12 === 0 || num % 13 === 0
})
console.log(filteredNums21)

// 3.22.Gauti tik skaičius, kurie yra didesni už 100.
const filteredNums22 = arr.filter(function (num) {
  return num > 100
})
console.log(filteredNums22)

// 3.23.Gauti tik skaičius, kurie yra didesni už 555.
const filteredNums23 = arr.filter(function (num) {
  return num > 555
})
console.log(filteredNums23)

// 3.24.Gauti tik skaičius, kurie yra didesni arba lygūs 888.
const filteredNums24 = arr.filter(function (num) {
  return num >= 888
})
console.log(filteredNums24)

// 3.25.Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
const filteredNums25 = arr.filter(function (num) {
  return num >= 6789
})
console.log(filteredNums25)

// 3.26.Gauti tik skaičius, kurie yra mažesni už 50.
const filteredNums26 = arr.filter(function (num) {
  return num < 50
})
console.log(filteredNums26)

// 3.27.Gauti tik skaičius, kurie yra mažesni už 1000.
const filteredNums27 = arr.filter(function (num) {
  return num < 1000
})
console.log(filteredNums27)

// 3.28.Gauti tik skaičius, kurie yra mažesni arba lygūs - 1.
const filteredNums28 = arr.filter(function (num) {
  return num <= -1
})
console.log(filteredNums28)

// 3.29.Gauti tik skaičius, kurie yra mažesni arba lygūs - 5564.
const filteredNums29 = arr.filter(function (num) {
  return num <= -5564
})
console.log(filteredNums29)

// 3.30.Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
const filteredNums30 = arr.filter(function (num) {
  return num < 1000 && num > 50
})
console.log(filteredNums30)

// 3.31.Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
const filteredNums31 = arr.filter(function (num) {
  return num < 100 && num > 0
})
console.log(filteredNums31)

// 3.32.Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už - 50.
const filteredNums32 = arr.filter(function (num) {
  return num < 0 && num > -50
})
console.log(filteredNums32)

// 3.33.Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už - 100.
const filteredNums33 = arr.filter(function (num) {
  return num <= 0 && num > -100
})
console.log(filteredNums33)

// 3.34.Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
const filteredNums34 = arr.filter(function (num) {
  return num >= 0 && num < 55
})
console.log(filteredNums34)

// 3.35.Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
const filteredNums35 = arr.filter(function (num) {
  return num >= 444 && num <= 654
})
console.log(filteredNums35)

// 3.36.Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
const filteredNums36 = arr.filter(function (num) {
  return num > 0 && num % 2 === 0
})
console.log(filteredNums36)

// 3.37.Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
const filteredNums37 = arr.filter(function (num) {
  return num > 0 && num % 3 === 0
})
console.log(filteredNums37)

// 3.38.Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
const filteredNums38 = arr.filter(function (num) {
  return num < 0 && num % 4 === 0
})
console.log(filteredNums38)

// 3.39.Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
const filteredNums39 = arr.filter(function (num) {
  return num < 0 && num % 111 === 0
})
console.log(filteredNums39)

// 3.40.Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
const filteredNums40 = arr.filter(function (num) {
  return num > 500 && num % 2 === 0
})
console.log(filteredNums40)

// 3.41.Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
const filteredNums41 = arr.filter(function (num) {
  return num > 1000 && num % 3 === 0
})
console.log(filteredNums41)

// 3.42.Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
const filteredNums42 = arr.filter(function (num) {
  return num < 1000 && num % 9 === 0
})
console.log(filteredNums42)

// 3.43.Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
const filteredNums43 = arr.filter(function (num) {
  return num < 500 && num % 2 === 0
})
console.log(filteredNums43)

// 3.44.Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
const filteredNums44 = arr.filter(function (num) {
  return num >= 33 && num % 3 === 0
})
console.log(filteredNums44)

// 3.45.Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
const filteredNums45 = arr.filter(function (num) {
  return num >= 444 && num % 12 === 0
})
console.log(filteredNums45)

// 3.46.Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
const filteredNums46 = arr.filter(function (num) {
  return num <= 155 && num % 5 === 0
})
console.log(filteredNums46)

// 3.47.Gauti tik skaičius, kurie yra mažesni arba lygūs - 333 ir kurie dalinasi iš 9.
const filteredNums47 = arr.filter(function (num) {
  return num <= -333 && num % 9 === 0
})
console.log(filteredNums47)

// 3.48.Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
const filteredNums48 = arr.filter(function (num) {
  return num >= 100 && num < 500 && num % 5 === 0
})
console.log(filteredNums48)

// 3.49.Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2
const filteredNums49 = arr.filter(function (num) {
  return num >= 888 && num < 1000 && num % 2 === 0
})
console.log(filteredNums49)

// 3.50.Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs - 333, dalinasi iš 3 ir nėra nulis.
const filteredNums50 = arr.filter(function (num) {
  return num <= 888 && num <= -333 && num % 3 === 0 && num !== 0
})
console.log(filteredNums50)

// 3.51.Gauti tik skaičius.
const filteredNums51 = arr.filter(function (num) {
  return num <= 0 || num > 0
})
console.log(filteredNums51)

// 3.52. Gauti tik tekstą (string)

const filteredText52 = arr.filter(item => !isNaN(item))
console.log(filteredText52)


// 3.53.Gauti tik tekstus(string), kurie turi daugiau nei 5 simbolius.

const filteredText53 = arr.filter(item => isNaN(item) && item.length > 5)
console.log(filteredText53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
const filteredText54 = arr.filter(item => isNaN(item) && item.length <= 5)
console.log(filteredText54)


// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
const filteredText55 = arr.filter(item => isNaN(item) && item.length < 7)
console.log(filteredText55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
const filteredText56 = arr.filter(item => isNaN(item) && item.includes('t'))
console.log(filteredText56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
const filteredText57 = arr.filter(item => isNaN(item) && item.includes('y'))
console.log(filteredText57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
const filteredText58 = arr.filter(item => isNaN(item) && (item.includes('e') || item.includes('a')))
console.log(filteredText58)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
const filteredText59 = arr.filter(item => isNaN(item) && (item.includes('t') && item.includes('i')))
console.log(filteredText59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
const filteredText60 = arr.filter(item => isNaN(item) && (item.includes('t') && !item.includes('k')))
console.log(filteredText60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
const filteredText61 = arr.filter(item => isNaN(item) && (item.includes('a') && !item.includes('s')))
console.log(filteredText61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
const filteredText62 = arr.filter(item => {
  if (isNaN(item)) {
    let wordLetters = item.split('')
    return wordLetters.length > 2
  }
});
 console.log(filteredText62);

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
const filteredText63 = arr.filter(item => isNaN(item) && item.includes('st'));
console.log(filteredText63);

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
const filteredText64 = arr.filter(item => isNaN(item) && item.includes('nd'));
console.log(filteredText64);

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
const filteredText65 = arr.filter(item => isNaN(item) && !item.includes('s'));
console.log(filteredText65);

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
const filteredText66 = arr.filter(item => isNaN(item) && !item.includes('t'));
console.log(filteredText66);

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
const filteredText67 = arr.filter(item => isNaN(item) && !item.includes('r') && !item.includes('l'));
console.log(filteredText67);


// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
const filteredText68 = arr.filter(item => isNaN(item) && !isNaN(item[0]));
console.log(filteredText68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
const filteredText69 = arr.filter(item => isNaN(item) && item.startsWith('s'));
console.log(filteredText69);

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
const filteredText70 = arr.filter(item => isNaN(item) && item.startsWith('o'));
console.log(filteredText70);

// 3.701. Gauti tik tekstus (string), kurie baigiasi raide d.
const filteredText701 = arr.filter(item => isNaN(item) && item.endsWith('d'));
console.log(filteredText701);

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
const filteredText71 = arr.filter(item => isNaN(item) && item.endsWith('s'));
console.log(filteredText71);

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
const filteredText372 = arr.filter(item => isNaN(item) && item.length > 4 && item.includes('o'));
console.log(filteredText372);

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
const filteredText73 = arr.filter(item => isNaN(item) && item.length >= 5 && item.includes('a'));
console.log(filteredText73);

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
const filteredText74 = arr.filter(item => isNaN(item) && item.length % 2 === 0);
console.log(filteredText74);

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s
const filteredText75 = arr.filter(item => isNaN(item) && item.length % 2 !== 0 && item.includes('s'));
console.log(filteredText75);


// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
const filteredText76 = arr.filter(item => isNaN(item) && item[2] === 'a');
console.log(filteredText76);


// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
const filteredText77 = arr.filter(item => isNaN(item) && item[3] === 'l');
console.log(filteredText77);

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
const filteredText78 = arr.filter(item => isNaN(item) && item[4] !== 't' && item.length > 4);
console.log(filteredText78);


// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
const filteredText79 = arr.filter(item => isNaN(item) && item[0] !== 'e' && item.length < 6 && isNaN(item[0]));
console.log(filteredText79)
