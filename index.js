// Завдання 1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let result = [];

for (let city in citiesAndCountries) {
result.push(`${city} - это ${citiesAndCountries[city]}`)
}

console.log(result);

       
// Завдання 2

const amount = 9; //  відповідно, якщо підставити amount = 12, то буде цикл з 4-ма вкладеними масивами в одному великому масиві.
n = amount / 3; // максимальне число (amount) повинно ділитися націло на 3 (в даному випадку 9 або 12)
if (amount % 3 === 0) {
    arr  = [];
    for (let i = 0; i < n; i++) {
        arr [i] = []; 
        for (let j = 0; j < 3; j++) {
        arr [i][j] = i * 3 + j + 1; 
        }
    }   
}
console.log(arr);

// Завдання 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
}

function getNameOfDay(lang,day) {
   if (lang === 'ru') {
    console.log(namesOfDays.ru[day - 1])
   }
   else if (lang === 'en')
    console.log(namesOfDays.en[day - 1])
}

getNameOfDay('en', 7)
getNameOfDay('ru', 3)


  







