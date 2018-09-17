document.getElementById('inputData1').oninput = function () {
    const offset = parseInt(document.getElementById('offset').value)
    console.log(offset)
    let str = this.value
    let out = ''
    for(let i=0; i< str.length; i++){
        let code = str.charCodeAt(i)
        code = code + offset
        out += String.fromCharCode(code)
    }
    document.getElementById('outputData1').innerHTML = out
}

document.getElementById('inputData2').oninput = function () {
    const offset = parseInt(document.getElementById('offset').value)
    let str = this.value
    let out = ''
    for(let i=0; i< str.length; i++){
        let code = str.charCodeAt(i)
        code = code - offset
        out += String.fromCharCode(code)
    }
    document.getElementById('outputData2').innerHTML = out
}