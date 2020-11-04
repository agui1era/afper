export default {
    formatRut(rut) {
          
        let clearRut = typeof rut === 'string' ? rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
        let result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
        for (let i = 4; i < clearRut.length; i += 3) {
            result = clearRut.slice(-3 - i, -i) + '.' + result
        }
        return result;
    }
}