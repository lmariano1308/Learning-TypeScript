import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao = this.criaNegociacao();
        if (negociacao.data.getDay() > this.DOMINGO && negociacao.data.getDay() < this.SABADO ) {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }

        private ehDiaUtil(data: Date){
            
        }

    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    
    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

}