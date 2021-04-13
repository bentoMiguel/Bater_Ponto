function horasTrabalhadas(){
    
    //Obtendo Valores da Chegada
    var startHour = parseInt(document.getElementById('chegadaHora').value);
    var startMin = parseInt(document.getElementById('chegadaMin').value);
    
    //Obtendo Valores da Saída
    var endHour = parseInt(document.getElementById('saidaHora').value);
    var endMin = parseInt(document.getElementById('saidaMin').value);
    
    //Validações dos Valores 
    if(startHour > 23 || startHour < 0 || isNaN(startHour)){
        document.getElementById('chegadaHora').value = '!!'}
    
    else if(startMin > 59 || startMin < 0 || isNaN(startMin)){
        document.getElementById('chegadaMin').value = '!!'}
    
    else if(endHour > 23 || endHour < 0 || isNaN(endHour)){
        document.getElementById('saidaHora').value = '!!'}
    
    else if(endMin > 59 || endMin < 0 || isNaN(endMin)){
        document.getElementById('saidaMin').value = '!!'}
                    
    //Variáveis do Resultado
    var resultadoHora = endHour - startHour; 
    var resultadoMin = endMin - startMin;

    //Lógica
    if (startHour > endHour)
        resultadoHora += 24;
        
    if ((startHour == endHour) && (startMin > endMin)){
        resultadoHora += 24;
        resultadoMin = 60 - (startMin - endMin);
    }
    if (startMin > endMin){
        resultadoHora -= 1
        resultadoMin = 60 - (startMin - endMin);
    }
    
    //Atribuindo o Resultados aos Elementos HTML
    document.getElementById('total').innerHTML = resultadoHora + ':' + resultadoMin;

}
