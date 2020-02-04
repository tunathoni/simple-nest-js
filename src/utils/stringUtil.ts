const uuidv4 = require('uuid/v4');

export class StringUtil {
    static getUUID () {
        return uuidv4();
    }
}