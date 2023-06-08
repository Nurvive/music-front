export const stringToHexCode = (str: string) => {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
        hashCode = str.charCodeAt(i) + ((hashCode << 5) - hashCode);
    }

    let hexCode = (hashCode & 0x00ffffff).toString(16).toUpperCase();
    while (hexCode.length < 6) {
        hexCode = '0' + hexCode;
    }

    return hexCode;
};
