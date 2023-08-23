
export default class Validator {
    static validateUsername(username) {
        // Проверка на допустимые символы
        if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
            return false;
        }
        
        // Проверка на подряд более трех цифр
        if (/\d{4,}/.test(username)) {
            return false;
        }
        
        // Проверка на начало и конец имени с цифр, подчеркивания или тире
        if (/^[0-9_-]|[_-]$|^[-_]*[0-9_-]+[-_]*$/.test(username)) {
            return false;
        }
        
        return true;
    }
}
