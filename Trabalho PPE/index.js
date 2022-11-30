if(typeof(Storege)!='undefine'){
    if(localStorage.visitas){
        localStorage.visitas=Number(localStorage.visitas)+1;
    }else{
        localStorage.visitas=1;
    }
        document.getElementById('js').innerHTML = 'Numero de Visitas: '+ localStorage.visitas;
}else{
    document.write('Seu Navegador Não é Compativel Com Esse Site');
}