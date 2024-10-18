<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="input">
    <p id="resul">Resultado</p>
    <button id="bt2">2</button>
    <button id="btigual">=</button>
    <button id="btmais">+</button>
    <button id="limpar">limpar</button>
    <script>
        const bt2= document.getElementById('bt2')
        const btigual= document.getElementById('btigual')
        const btmais= document.getElementById('btmais')
        const resul= document.getElementById('resul')
        const input= document.getElementById('input')
        const limpar= document.getElementById('limpar')
        let display= ''
        bt2.addEventListener('click', ()=>{
            display +='2'
            input.value= display
        }) //()=>{} = função
        limpar.addEventListener('click', ()=>{
            display =''
            input.value= display
        })
        btmais.addEventListener('click', ()=>{
            display +=' + '
            input.value= display
        })
    </script>
</body>
</html>
