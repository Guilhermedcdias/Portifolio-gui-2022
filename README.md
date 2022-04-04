
## Projeto Portifólio Design Digital
**Tema:** Portifólio sobre trabalhos realizados durante meus estudos

**Descrição das Pastas:**
* src: Pasta com os códigos
* doc: Pasta com Documentação relacionada ao Projeto

**Link de Hospedagem Heroku:** https://gdeguilerme-portifolio.herokuapp.com/index.html

***
## Técnologias Utilizadas

<div align="center">
  

   ![icons8-flask-96](https://user-images.githubusercontent.com/79495727/160216619-4a76adbf-afbe-46ed-ac14-33512209cebf.png)
   ![icons8-html-5-96](https://user-images.githubusercontent.com/79495727/160216737-0dd4e3f6-3aff-4571-b5ec-b288c5eae0c9.png)
   ![icons8-css3-96](https://user-images.githubusercontent.com/79495727/160216946-0861b4e1-a715-4e3a-844d-2d8c9b1af8ad.png)
   ![icons8-javascript-logo-96](https://user-images.githubusercontent.com/79495727/160217125-227bc0fd-ac36-4284-97d2-4c9cdf6eccbd.png)
   ![icons8-logo-mysql-96](https://user-images.githubusercontent.com/79495727/160220199-c55137ac-6541-446e-8d6a-72598c0313d4.png)



  
</div>

***


## Backlog do Produto

<div align="center">
  
  ### Requisitos Funcionais
  
COD | DESCRIÇÃO | PRIORIDADE | STATUS |
:--:|:---------:|:----------:|:-----:|
RF 01 |O sistema deverá ser desenvolvido utilizando-se HTML 5, com uso apropriado de cada elemento para estruturar o conteúdo da aplicação. |ALTA | ✔️ |
RF 02 |O sistema deverá ser desenvolvido utilizando-se CSS 3, com no mínimo 5 regras criadas sem a utilização de frameworks. | ALTA | ✔️ |
RF 03 |O sistema deverá fazer uso de pelo menos um framework de CSS 3 para estilizar a aplicação. | ALTA | ✔️ | 
RG 04 |O sistema deverá ser implantado em um servidor de aplicação, tal como Heroku. | ALTA | ✔️ |
  
  
   ### Requisitos Não Funcionais
  
COD | DESCRIÇÃO | PRIORIDADE | STATUS |
:--:|:---------:|:----------:|:------:|
RNF 01 | O front end do sistema poderá fazer uso de JavaScript. | BAIXA | ✔️ |
</div>

***


## Passo a Passo para Rodar no CMD
### Primeiro Instale o Python na versão 3.10
<div align="center">
  
  
  ![image](https://user-images.githubusercontent.com/79495727/160816267-c4fd85f1-b5df-4a2a-95ea-a9ad8a4689a9.png)
  
</div>

### Crie um ambiente virtual para rodar o aplicativo
~~~ 
py -3 -m venv venv
~~~
### Instale as dependencias usando o arquivo Requirements.txt
~~~
pip install -r requirements.txt
~~~
### Set o FLASK_ENV e o FLASK_APP
~~~
set FLASK_ENV=development
set FLASK_APP=src/app.py
~~~
### Rode o servidor local
~~~
flask run
~~~

## Caso a execução de Scripts esteja desativada - Passo a Passo para ativar

### Abra o PowerShell no modo Administrador e digite o seguinte código
~~~
Set-ExecutionPolicy Unrestricted
~~~
### Digite 'A'

<div align="center">

   ![image](https://user-images.githubusercontent.com/79495727/160821599-f4b87a00-5f66-408b-a201-de8bdea3c394.png)

 </div>
