import { Component } from '@angular/core';
import { Inversor } from '../modelo/Inversor';
import { InversorService } from '../servico/inversor.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  //Objeto do tipo Inversor
  inversor = new Inversor();


  //Variavel para visibilidade dos botoes
  btnCadastro:boolean = true;

  //Variavel para visibilidade da tabela
  tabela:boolean = true;

  //Json de inversores
  inversores:Inversor[] = [];
  
  //Construtor
  constructor(private servico:InversorService){}

  //Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno =>this.inversores = retorno);

  }
   //Método de cadastro 
   cadastrar():void{
    this.servico.cadastrar(this.inversor).subscribe(retorno =>{
      //Cadastro de inversor no vetor
      this.inversores.push(retorno);

    //Limpar formulario
    this.inversor = new Inversor();

    //Mensagem
    alert('Inversor cadastrado com sucesso!')

  });
}
  //Metodo para selecionar inversor
  selecionarInversor(posicao:number):void{

    //Seleciona inversor no vetor]
    this.inversor = this.inversores[posicao];
    //Visibilidade dos botoes
    this.btnCadastro = false;

    //Visibilidade da tabela
    this.tabela = false;
  }

  //Método para editar inversor
  editar(): void{
    this.servico.editar(this.inversor)
    .subscribe(retorno =>{
      //Obter posição do vetor onde está o inversor
      let posicao = this.inversores.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      //Alterar os dados do cliente no vetor
      this.inversores[posicao] = retorno;

       //Limpar formulario
    this.inversor = new Inversor();

       //Visibilidade dos botoes
    this.btnCadastro = true;

    //Visibilidade da tabela
    this.tabela = true;
     //Mensagem
     alert('Inversor alterado com sucesso!')
    });
  }
  //Método para remover inversor
  remover(): void{
    this.servico.remover(this.inversor.codigo)
    .subscribe(retorno =>{
      //Obter posição do vetor onde está o inversor
      let posicao = this.inversores.findIndex(obj => {
        return obj.codigo == this.inversor.codigo;
      });

      //Remover inversor do vetor
      this.inversores.splice(posicao,1);

       //Limpar formulario
    this.inversor = new Inversor();

       //Visibilidade dos botoes
    this.btnCadastro = true;

    //Visibilidade da tabela
    this.tabela = true;
     //Mensagem
     alert('Inversor removido com sucesso!')
    });
  }

  //Metodo para cancelar
  cancelar(): void{
    

       //Limpar formulario
    this.inversor = new Inversor();

       //Visibilidade dos botoes
    this.btnCadastro = true;

    //Visibilidade da tabela
    this.tabela = true;

  }

  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }

}
