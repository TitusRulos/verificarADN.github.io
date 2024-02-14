const sospechosos = {
  "pedro":"00000101010101010101",
  "juan":"00101010101101110111",
  "diego":"00100010010000001001"
};

function verificar_adn(){
  let contador_pedro=0
  let contador_juan=0
  let contador_diego=0
  const adn = document.getElementById('numeroinput').value;
  const lista_adn = adn.toString().split('').map(Number);
  const lista_adn_pedro=sospechosos["pedro"].split('').map(Number)
  const lista_adn_juan=sospechosos["juan"].split('').map(Number)
  const lista_adn_diego=sospechosos["diego"].split('').map(Number)
  
  for(let cromosoma = 0; cromosoma < 20; cromosoma++){
    if (lista_adn[cromosoma] == lista_adn_pedro[cromosoma]){
      contador_pedro+=1
    }
    if (lista_adn[cromosoma] == lista_adn_juan[cromosoma]){
      contador_juan+=1
    }
    if (lista_adn[cromosoma] == lista_adn_diego[cromosoma]){
      contador_diego+=1
    } 
  };

  if (contador_pedro>contador_juan && contador_pedro>contador_diego){
    let porcentaje=(contador_pedro/20)*100
    alert("pedro tiene mayor semejanza  "+porcentaje)
    
  }
  if (contador_juan>contador_pedro && contador_juan>contador_diego){
    let porcentaje=(contador_juan/20)*100
    alert("juan tiene mayor semejanza  "+porcentaje)
  }
  if (contador_diego>contador_pedro && contador_diego>contador_juan){
    let porcentaje=(contador_diego/20)*100
    alert("diego tiene mayor semejanza  "+porcentaje)
  }
}

