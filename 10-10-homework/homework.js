const items = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1.1.Pašalinti pirmą masyvo narį.
const item1 = items.shift()
console.log(item1)

// 1.2.Pašalinti paskutinį masyvo narį.
const item2 = items.pop()
console.log(item2)

// 1.3.Rasti vidurinį masyvo narį ir jį pašalinti.
// 21
const item3 = items.splice(10,1)
console.log(item3)

// 1.4.Pašalinti priešpaskutinį masyvo narį.
const item4 = items.splice(-1, 1)
console.log(item4)

// 1.5.Pašalinti antrą masyvo narį.
const item5 = items.splice(1, 1)
console.log(item5)

// 1.6.Pašalinti 7 ir 8 masyvo narius.
const item6 = items.splice(6, 2)
console.log(item6)

// 1.7.Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
const item7 = items.splice(-6, 3)
console.log(item7)

// 1.8.Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
const item8 = items.splice(2, 1, 888)
console.log(item8)

console.log(items)

// 1.9.Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
const item9 = items.splice(9, 1, 33, 789, 6543)
console.log(item9)

// 1.10.Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
const item101 = items.pop()
console.log(item101)

const item102 = items.push(321, 654, 987)
console.log(item102)

// 1.11 Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
const item11 = items.splice(1,0,11)
console.log(item11)

// 1.12.Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
const item12 = items.splice(13, 0, 1)
console.log(item12)

// 1.13.Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių - 1.
const item13 = items.splice(-1, 0, -1)
console.log(item13)

// 1.14.Į masyvo pradžią pridėti skaičius: 1, 2, 3.
const item14 = items.splice(0, 0, 1, 2, 3)
console.log(item14)

// 1.15.Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

const item151 = items.push(-333)
console.log(item151)

const item152 = items.push(-321)
console.log(item152)

const item153 = items.push(-312)
console.log(item153)

console.log(items)

//1.16 Į masyvo vidurį pridėti skaičių 0.

// 1.17. Pašalinti pirmą masyvo narį.
const item17 = items.shift()
console.log(item17)

// 1.18.Pašalinti paskutinį masyvo narį.
const item18 = items.pop()
console.log(item18)

// 1.19.Į masyvo pradžią pridėti žodį "start".
const item19 = items.unshift('start')
console.log(item19)

// 1.20.Į masyvo pabaigą pridėti žodį "end".
const item20 = items.push('end')
console.log(item20)

console.log(items)