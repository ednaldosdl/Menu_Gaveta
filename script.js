const navegacao = document.querySelector('.navegacao');
      document.querySelector('.toggle').onclick = function(){
         this.classList.toggle('active');
         navegacao.classList.toggle('active');
      }