

const items = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// 27
//2.1.Gauti pirmą masyvo narį.
const slicedItems12 = items.slice(0, 1)
console.log(slicedItems12)

// 2.2.Gauti paskutinį masyvo narį.
const slicedItems2 = items.slice(-1)
console.log(slicedItems2)

// 2.3.Gauti antrą masyvo narį.
const slicedItems3 = items.slice(1, 2)
console.log(slicedItems3)

//2.4. Gauti priešpaskutinį masyvo narį.
const slicedItems4 = items.slice(-2, -1)
console.log(slicedItems4)

// 2.5.Gauti aštuntą masyvo narį.
const slicedItems5 = items.slice(7, 8)
console.log(slicedItems5)

// 2.6.Gauti devintą masyvo narį skaičiuojant nuo galo.
const slicedItems6 = items.slice(-9, -8)
console.log(slicedItems6)

// 2.7.Gauti vidurinį masyvo narį.
// 0
const slicedItems7 = items.slice(13, 14)
console.log(slicedItems7)

// 2.8.Gauti pirmus tris masyvo narius.
const slicedItems8 = items.slice(0, 3)
console.log(slicedItems8)

// 2.9.Gauti paskutinius tris masyvo narius.
const slicedItems9 = items.slice(-3)
console.log(slicedItems9)

// 2.10.Gauti pirmus 10 masyvo narius.
const slicedItems10 = items.slice(0, 10)
console.log(slicedItems10)

// 2.11.Gauti paskutinius 10 masyvo narius.
const slicedItems11 = items.slice(-10)
console.log(slicedItems11)

// 2.12.Gauti nuo 3 iki 8 masyvo nario(iš viso 6 nariai).
const slicedItems122 = items.slice(2, 8)
console.log(slicedItems122)

// 2.13.Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos(iš viso 5 nariai).
const slicedItems13 = items.slice(-9, -4)
console.log(slicedItems13)

// 2.14.Gauti nuo 11 iki 19 masyvo nario(iš viso 9 nariai).
const slicedItems14 = items.slice(10, 19)
console.log(slicedItems14)

// 2.15.Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos(iš viso 9 nariai).
const slicedItems15 = items.slice(-20, -8)
console.log(slicedItems15)

// 2.16.Gauti visus masyvo narius išskyrus pirmą.
const slicedItems16 = items.slice(1,)
console.log(slicedItems16)

// 2.17.Gauti visus masyvo narius išskyrus paskutinį.
const slicedItems17 = items.slice(0, -1)
console.log(slicedItems17)

// 2.18.Gauti visus masyvo narius išskyrus pirmus 5.
const slicedItems18 = items.slice(5,)
console.log(slicedItems18)

// 2.19.Gauti visus masyvo narius išskyrus paskutinius 5.
const slicedItems19 = items.slice(0, -5)
console.log(slicedItems19)

// 2.20.Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant(iš viso 13 narių).
const slicedItems20 = items.slice(0, 13)
console.log(slicedItems20)

// 2.21.Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos(iš viso 13 narių).
const slicedItems21 = items.slice(14, 27)
console.log(slicedItems21)

// 2.22.Gauti visus narius išskyrus pirmą ir paskutinį.
const slicedItems22 = items.slice(1, -1)
console.log(slicedItems22)

// 2.23.Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
const slicedItems23 = items.slice(5, -3)
console.log(slicedItems23)

// 2.24.Gauti visus narius išskyrus pirmą ir paskutinius 8.
const slicedItems24 = items.slice(1, -8)
console.log(slicedItems24)

// 2.25.Gauti visus narius išskyrus pirmus 7 ir paskutinį.
const slicedItems25 = items.slice(7, 26)
console.log(slicedItems25)

// 2.26.Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
const slicedItems26 = items.slice(9, 15)
console.log(slicedItems26)

// 2.27.Gauti 9 narius skaičiuojant nuo 11.
const slicedItems27 = items.slice(11, 20)
console.log(slicedItems27)

// 2.28.Gauti 12 narių skaičiuojant nuo 8.
const slicedItems28 = items.slice(7, 19)
console.log(slicedItems28)

//2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. 
//Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

//pirmi penki nariai
const slicedItems291 = items.slice(0, 5)
console.log(slicedItems291)

//paskutiniai sesi nariai
const slicedItems292 = items.slice(-6)
console.log(slicedItems291)

//bendras masyvas
const slicedItems29 = slicedItems291.concat(slicedItems292)
console.log(slicedItems29)

//2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve.
//Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
const slicedItems301 = items.slice(2, 5)

const slicedItems302 = items.slice(14, 17)

const slicedItems30 = [...slicedItems301, ...slicedItems302]
console.log(slicedItems30)