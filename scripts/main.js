// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

let text = 'PIZZA hamburger HoTDoG 253324';

function some(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        const curSumbol = string[i];

        if (Number(curSumbol)) {
            result += "_";
            continue;
        }

        if (curSumbol === curSumbol.toUpperCase()) {
            result += curSumbol.toLowerCase();
        } else {
            result += curSumbol.toUpperCase();
        }
    }

    return result;
}

console.log(some(text));
