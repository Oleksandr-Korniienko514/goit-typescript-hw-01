// У вас є наступний JavaScript масив:

// let person = ['Max', 21];

// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом ?


// ---------------------------------------------------


// !варіант 1 let person: (number | string)[] = ['Max', 21];

//!варіант 2  let person: [string, number] = ['Max', 21]; ???


function getPerson(): [string, number] {
    let person: [string, number] = ['Max', 21];
    return person;
}

const personArray = getPerson();
console.log(personArray);