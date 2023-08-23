
export default function cleanPhoneNumber(inputNumber) {
    // Удаляем все, кроме цифр и плюса
    const cleanedNumber = inputNumber.replace(/[^\d+]/g, '');

    let firstGroup = '';
    let secondGroup = '';

    // Разбиваем на две группы
    if (cleanedNumber.length > 10) {
        firstGroup = cleanedNumber.slice(0, cleanedNumber.length - 10);
        secondGroup = cleanedNumber.slice(cleanedNumber.length - 10);
    } else {
        return 'incorrect number';
    }

    // Если первая группа начинается с '+', оставляем её
    if (firstGroup.startsWith('+')) {
        return firstGroup + secondGroup;
    }
    // Если первая группа начинается с '8', меняем на '+7'
    else if (firstGroup.startsWith('8')) {
        return '+7' + firstGroup.slice(1) + secondGroup;
    }
    else {
        // В остальных случаях предполагаем, что это уже не валидный номер
        return 'incorrect number';
    }
}
