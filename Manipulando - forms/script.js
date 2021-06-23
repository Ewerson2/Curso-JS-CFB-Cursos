  //apontou para o formulário usando o ID e depois pegou o valor do elemento 0
  document.write(document.getElementById("curso1").elements[0].value)
  //criou uma variavel e apontou para o formulário na posição 0
  var fm = document.forms[0]
  //criou uma váriavel e pegou os elementos do formulário
  var el = fm.elements
  //criou um for para percorrer todo o formulário
  for(i = 0; i<el.length-1; i++){
      el[i].style.background="#fff"
      el[i].value = "CFBCursos"
  }
 
 // document.write(el)