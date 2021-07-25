const stringCode = `Германия, Берлин, 83 млн, 357.4 тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6 тыс.кв.км; 
Польша, Варшава, 37.9 млн, 312.6 тыс.кв.км; Франция, Париж, 67.8 млн, 643.8 тыс.кв.км; 
Нидерланды, Амстердам, 17.4 млн, 41.5 тыс.кв.км; Испания, Мадрид, 44.3 млн, 505.9 тыс.кв.км; 
Бельгия, Брюссель, 11.4 млн, 30.5 тыс.кв.км`;


let codeCountry = stringCode.split("; ");
console.log(codeCountry);

codeCountry = codeCountry.map((item) => {
    const country = item.split(", ");
    return new Country(
        country[0],
        country[1],
        country[2],
        parseFloat(country[3])
    );
});
console.log(codeCountry)

function Country(name, capital, population, area) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.area = area;
};
    
