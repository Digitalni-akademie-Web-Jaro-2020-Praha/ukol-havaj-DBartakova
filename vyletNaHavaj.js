'use strict'
console.log('funguji.')


let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

// let osoba1 = {
//   jmeno: 'Alena',
//   uspory: 3000
// };
// let osoba2 = {
//   jmeno: 'Karolína',
//   uspory: 8000
// };

// let osoba1 = {
//   jmeno: 'Alena',
//   uspory: 53000
// };
// let osoba2 = {
//   jmeno: 'Karolína',
//   uspory: 47000
// };


// Napiš sérii podmínek, která zjistí (do konzole vypíše):
// 1. Zda vůbec mohou nebo nemohou na dovolenou jet. - sečíst úspory,  pak porovnat se 100 000 Kč 
// 1. Pokud mohou jet (tj. mají dohromady 100 tisíc):
//     1. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
//     1. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
// 1. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
//     1. Kolik peněz jim celkově ještě chybí.
//     1. Kolik musí každá z nich ještě naspořit.

const moneyNeededForHolidayInTotal = 100000;
const moneyNeededForHolidayPerPerson = moneyNeededForHolidayInTotal / 2;
const moneyToSaveToGoPersonOne = moneyNeededForHolidayPerPerson - osoba1.uspory;
const moneyToSaveToGoPersonTwo = moneyNeededForHolidayPerPerson - osoba2.uspory;
const moneyToSaveToGoInTotal = moneyNeededForHolidayInTotal - osoba1.uspory - osoba2.uspory;
const moneyAvailableForHoliday = osoba1.uspory + osoba2.uspory;

console.log('adc', moneyAvailableForHoliday);

const enoughSavingsPersonOne = () => {
  if (osoba1.uspory > moneyNeededForHolidayPerPerson) {
    return `${osoba1.jmeno} has enough savings to go to Hawai.`
  } else {
    return `${osoba1.jmeno} must save ${moneyToSaveToGoPersonOne} CZK.`
  }
};

const enoughSavingsPersonTwo = () => {
  if (osoba2.uspory > moneyNeededForHolidayPerPerson) {
    return `${osoba2.jmeno} has enough savings to go to Hawai.`
  } else {
    return `${osoba2.jmeno} must save ${moneyToSaveToGoPersonTwo} CZK.`
  }
};

const canTheyGoToHawai = () => {
  if (moneyAvailableForHoliday >= moneyNeededForHolidayInTotal) {
    return 'They can go to Hawai.' + enoughSavingsPersonOne() + enoughSavingsPersonTwo();
  } else {
    return 'They cannot go to Hawai.' + 'They need to save ' + moneyToSaveToGoInTotal + 'CZK.' + enoughSavingsPersonOne() + enoughSavingsPersonTwo();
  }
};


// Tvým úkolem je program nejenom napsat, ale i otestovat - tedy vymyslet víc možností vstupních dat a zkontrolovat, jestli to funguje správně. Je hned vidět, že u zadaných vstupních dat mohou kamarádky okamžitě bez problémů odjet. Určitě ale existuje možnost, kdy kamarádky mají tak málo úspor, že nemohou odjet vůbec. A taky možnost, že můžou odjet, ale po dovolené si musí srovnat dluhy. Odpovídající vstupní data si vymysli. Jejich formát bude vždycky stejný, jen částky budou jiné (a jiný bude i výstup programu).







