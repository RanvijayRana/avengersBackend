let trim = (data) => {
    let dataValue = String(data);
    return dataValue.replace(/^s+|\s+$/gm, '');
}

let isEmpty = (value) => {
    if (value === null || value === undefined || trim(value) === "" || value.length === 0) {
        return true;
    } else {
        return false
    }
}

module.exports = {
    isEmpty: isEmpty
}