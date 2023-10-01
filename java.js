// Função para alternar a marcação das bolinhas
function toggleBolinha(id) {
    const bolinha = document.getElementById(id);
    bolinha.classList.toggle('clicked');
  }
  
//Clã escolhas
  function mostrarEscolhas() {
    var escolhasDiv = document.getElementById("escolhas");
    if (escolhasDiv.style.display === "none") {
        escolhasDiv.style.display = "block";
    } else {
        escolhasDiv.style.display = "none";
    }
}

function obterSelecao() {
    var opcoes = document.getElementsByName("opcao");
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Opção selecionada: ";

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            resultadoDiv.innerHTML += opcoes[i].value;
            break;
        }
    }
}
//





  // Adiciona um evento de clique para cada bolinha
  //Força
  function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }
  
  document.getElementById('bolinha1').addEventListener('click', function() {
    toggleBolinha('bolinha1');
  });
  document.getElementById('bolinha2').addEventListener('click', function() {
    toggleBolinha('bolinha2');
    toggleBolinha('bolinha1');
  });
  document.getElementById('bolinha3').addEventListener('click', function() {
    toggleBolinha('bolinha3');
    toggleBolinha('bolinha2');
    toggleBolinha('bolinha1');
  });
  document.getElementById('bolinha4').addEventListener('click', function() {
    toggleBolinha('bolinha4');
    toggleBolinha('bolinha3');
    toggleBolinha('bolinha2');
    toggleBolinha('bolinha1');
  });
  document.getElementById('bolinha5').addEventListener('click', function() {
    toggleBolinha('bolinha5');
    toggleBolinha('bolinha4');
    toggleBolinha('bolinha3');
    toggleBolinha('bolinha2');
    toggleBolinha('bolinha1');
  });

  //Destreza

  function showTooltip01() {
    const tooltip = document.getElementById('tooltip01');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }


  document.getElementById('bolinha01').addEventListener('click', function() {
    toggleBolinha('bolinha01');
  });
  document.getElementById('bolinha02').addEventListener('click', function() {
    toggleBolinha('bolinha02');
    toggleBolinha('bolinha01');
  });
  document.getElementById('bolinha03').addEventListener('click', function() {
    toggleBolinha('bolinha03');
    toggleBolinha('bolinha02');
    toggleBolinha('bolinha01');
  });
  document.getElementById('bolinha04').addEventListener('click', function() {
    toggleBolinha('bolinha04');
    toggleBolinha('bolinha03');
    toggleBolinha('bolinha02');
    toggleBolinha('bolinha01');
  });
  document.getElementById('bolinha05').addEventListener('click', function() {
    toggleBolinha('bolinha05');
    toggleBolinha('bolinha04');
    toggleBolinha('bolinha03');
    toggleBolinha('bolinha02');
    toggleBolinha('bolinha01');
  });

  //vigor
  
  function showTooltip02() {
    const tooltip = document.getElementById('tooltip02');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('bolinha001').addEventListener('click', function() {
    toggleBolinha('bolinha001');
  });
  document.getElementById('bolinha002').addEventListener('click', function() {
    toggleBolinha('bolinha002');
    toggleBolinha('bolinha001');
  });
  document.getElementById('bolinha003').addEventListener('click', function() {
    toggleBolinha('bolinha003');
    toggleBolinha('bolinha002');
    toggleBolinha('bolinha001');
  });
  document.getElementById('bolinha004').addEventListener('click', function() {
    toggleBolinha('bolinha004');
    toggleBolinha('bolinha003');
    toggleBolinha('bolinha002');
    toggleBolinha('bolinha001');
  });
  document.getElementById('bolinha005').addEventListener('click', function() {
    toggleBolinha('bolinha005');
    toggleBolinha('bolinha004');
    toggleBolinha('bolinha003');
    toggleBolinha('bolinha002');
    toggleBolinha('bolinha001');
  });

  //carisma

  function showTooltip03() {
    const tooltip = document.getElementById('tooltip03');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('Carisma1').addEventListener('click', function() {
    toggleBolinha('Carisma1');
  });
  document.getElementById('Carisma2').addEventListener('click', function() {
    toggleBolinha('Carisma2');
    toggleBolinha('Carisma1');
  });
  document.getElementById('Carisma3').addEventListener('click', function() {
    toggleBolinha('Carisma3');
    toggleBolinha('Carisma2');
    toggleBolinha('Carisma1');
  });
  document.getElementById('Carisma4').addEventListener('click', function() {
    toggleBolinha('Carisma4');
    toggleBolinha('Carisma3');
    toggleBolinha('Carisma2');
    toggleBolinha('Carisma1');
  });
  document.getElementById('Carisma5').addEventListener('click', function() {
    toggleBolinha('Carisma5');
    toggleBolinha('Carisma4');
    toggleBolinha('Carisma3');
    toggleBolinha('Carisma2');
    toggleBolinha('Carisma1');
  });

  //Manipulação

  function showTooltip04() {
    const tooltip = document.getElementById('tooltip04');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('manipulação1').addEventListener('click', function() {
    toggleBolinha('manipulação1');
  });
  document.getElementById('manipulação2').addEventListener('click', function() {
    toggleBolinha('manipulação2');
    toggleBolinha('manipulação1');
  });
  document.getElementById('manipulação3').addEventListener('click', function() {
    toggleBolinha('manipulação3');
    toggleBolinha('manipulação2');
    toggleBolinha('manipulação1');
  });
  document.getElementById('manipulação4').addEventListener('click', function() {
    toggleBolinha('manipulação4');
    toggleBolinha('manipulação3');
    toggleBolinha('manipulação2');
    toggleBolinha('manipulação1');
  });
  document.getElementById('manipulação5').addEventListener('click', function() {
    toggleBolinha('manipulação5');
    toggleBolinha('manipulação4');
    toggleBolinha('manipulação3');
    toggleBolinha('manipulação2');
    toggleBolinha('manipulação1');
  });

  //Aparencia 

  function showTooltip05() {
    const tooltip = document.getElementById('tooltip05');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('APARÊNCIA1').addEventListener('click', function() {
    toggleBolinha('APARÊNCIA1');
  });
  document.getElementById('APARÊNCIA2').addEventListener('click', function() {
    toggleBolinha('APARÊNCIA2');
    toggleBolinha('APARÊNCIA1');
  });
  document.getElementById('APARÊNCIA3').addEventListener('click', function() {
    toggleBolinha('APARÊNCIA3');
    toggleBolinha('APARÊNCIA2');
    toggleBolinha('APARÊNCIA1');
  });
  document.getElementById('APARÊNCIA4').addEventListener('click', function() {
    toggleBolinha('APARÊNCIA4');
    toggleBolinha('APARÊNCIA3');
    toggleBolinha('APARÊNCIA2');
    toggleBolinha('APARÊNCIA1');
  });
  document.getElementById('APARÊNCIA5').addEventListener('click', function() {
    toggleBolinha('APARÊNCIA5');
    toggleBolinha('APARÊNCIA4');
    toggleBolinha('APARÊNCIA3');
    toggleBolinha('APARÊNCIA2');
    toggleBolinha('APARÊNCIA1');
  });

   //PERCEPÇÃO 

   function showTooltip06() {
    const tooltip = document.getElementById('tooltip06');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('PERCEPÇÃO1').addEventListener('click', function() {
    toggleBolinha('PERCEPÇÃO1');
  });
  document.getElementById('PERCEPÇÃO2').addEventListener('click', function() {
    toggleBolinha('PERCEPÇÃO2');
    toggleBolinha('PERCEPÇÃO1');
  });
  document.getElementById('PERCEPÇÃO3').addEventListener('click', function() {
    toggleBolinha('PERCEPÇÃO3');
    toggleBolinha('PERCEPÇÃO2');
    toggleBolinha('PERCEPÇÃO1');
  });
  document.getElementById('PERCEPÇÃO4').addEventListener('click', function() {
    toggleBolinha('PERCEPÇÃO4');
    toggleBolinha('PERCEPÇÃO3');
    toggleBolinha('PERCEPÇÃO2');
    toggleBolinha('PERCEPÇÃO1');
  });
  document.getElementById('PERCEPÇÃO5').addEventListener('click', function() {
    toggleBolinha('PERCEPÇÃO5');
    toggleBolinha('PERCEPÇÃO4');
    toggleBolinha('PERCEPÇÃO3');
    toggleBolinha('PERCEPÇÃO2');
    toggleBolinha('PERCEPÇÃO1');
  });

  //INTELIGÊNCIA

  function showTooltip07() {
    const tooltip = document.getElementById('tooltip07');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('INTELIGÊNCIA1').addEventListener('click', function() {
    toggleBolinha('INTELIGÊNCIA1');
  });
  document.getElementById('INTELIGÊNCIA2').addEventListener('click', function() {
    toggleBolinha('INTELIGÊNCIA2');
    toggleBolinha('INTELIGÊNCIA1');
  });
  document.getElementById('INTELIGÊNCIA3').addEventListener('click', function() {
    toggleBolinha('INTELIGÊNCIA3');
    toggleBolinha('INTELIGÊNCIA2');
    toggleBolinha('INTELIGÊNCIA1');
  });
  document.getElementById('INTELIGÊNCIA4').addEventListener('click', function() {
    toggleBolinha('INTELIGÊNCIA4');
    toggleBolinha('INTELIGÊNCIA3');
    toggleBolinha('INTELIGÊNCIA2');
    toggleBolinha('INTELIGÊNCIA1');
  });
  document.getElementById('INTELIGÊNCIA5').addEventListener('click', function() {
    toggleBolinha('INTELIGÊNCIA5');
    toggleBolinha('INTELIGÊNCIA4');
    toggleBolinha('INTELIGÊNCIA3');
    toggleBolinha('INTELIGÊNCIA2');
    toggleBolinha('INTELIGÊNCIA1');
  });

  //RACIOCÍNIO

  function showTooltip08() {
    const tooltip = document.getElementById('tooltip08');
    if (tooltip.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip.classList.add('show');
      }
    
  }

  document.getElementById('RACIOCÍNIO1').addEventListener('click', function() {
    toggleBolinha('RACIOCÍNIO1');
  });
  document.getElementById('RACIOCÍNIO2').addEventListener('click', function() {
    toggleBolinha('RACIOCÍNIO2');
    toggleBolinha('RACIOCÍNIO1');
  });
  document.getElementById('RACIOCÍNIO3').addEventListener('click', function() {
    toggleBolinha('RACIOCÍNIO3');
    toggleBolinha('RACIOCÍNIO2');
    toggleBolinha('RACIOCÍNIO1');
  });
  document.getElementById('RACIOCÍNIO4').addEventListener('click', function() {
    toggleBolinha('RACIOCÍNIO4');
    toggleBolinha('RACIOCÍNIO3');
    toggleBolinha('RACIOCÍNIO2');
    toggleBolinha('RACIOCÍNIO1');
  });
  document.getElementById('RACIOCÍNIO5').addEventListener('click', function() {
    toggleBolinha('RACIOCÍNIO5');
    toggleBolinha('RACIOCÍNIO4');
    toggleBolinha('RACIOCÍNIO3');
    toggleBolinha('RACIOCÍNIO2');
    toggleBolinha('RACIOCÍNIO1');
  });
