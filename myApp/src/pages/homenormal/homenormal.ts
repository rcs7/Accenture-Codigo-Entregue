import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Task } from '../../models/task.model';

@IonicPage()
@Component({
  selector: 'page-homenormal',
  templateUrl: 'homenormal.html',
})
export class HomenormalPage {

  public task1s: Task[] = [];
  public ajud1a: string = 'qlq';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) { }

  /*Funciona quando a página é carregada. Este evento só acontece uma vez por página sendo criada. 
  Se uma página sair mas estiver armazenada em cache, esse evento não será disparado novamente em uma 
  exibição subsequente. O ionViewDidLoad evento é um bom lugar para colocar seu código de configuração 
  para a página.*/
  ionViewDidLoad(): void {

    //Parte que espera o valor pra ser salvo no array tasks
    //parâmetros recebidos 
    this.storage.forEach((value: any, key: string) => {
      this.task1s.push(value);
      // this.saveTask(newTask);
      //  console.log('Did  LOAD!');
    })

      .catch(this.handleError);

  }

  // Lifecycles são métodos que estão presentes em toda página Ionic para rastrear eventos de inicialização 
  //de páginas. 
  // Mais sobre: https://blog.ionicframework.com/navigating-lifecycle-events/
  //É executado quando a página entrou totalmente e agora é a página ativa. 
  //Esse evento será acionado, seja a primeira carga ou uma página em cache.
  ionViewDidEnter(): void {

    // NavParams possui um método específico para recuperar parâmetros de navegação 
    //através de um nome de variável    
    console.log("AAAAAAAAAAAAAAa");
    /*(method) NavController.getByIndex(index: number): ViewController
      @param index — The index of the page to get.
      @returns — Returns the view controller that matches the given index. */
    console.log(this.navCtrl.getByIndex(0).data); //retorna:
    /*{description: "v", index: undefined} se eu digitar um v lá na pág de add uma goal e aí esses dois atributos
    são colocadoes em description e index */
    const { description, index } = this.navCtrl.getByIndex(0).data;
    //Description será o que eu escrever lá pra salvar
     //this.navCtrl.getByIndex(0).data é um obj que tem uma descrição e um index
     //E eu vou colocá-lo nas variáveis description e index que estou criando e      //são do tipo const
    console.log('description ' + description);
    console.log('ajuda ' + this.ajud1a);
   
    //inicialmente ajuda='qlq' e dps ele é igual ao description anterior, logo
    //o item não é salvo mais de uma vez, que era o problema que estava acontecendo qd eu trocava 
    //de abas e voltava pra aba Link. 
    if (this.ajud1a != description) {
      // console.log(this.ajuda);
      this.ajud1a = description;

      //Se eu adicionar uma descricao nova! Se eu editar e 
      //add a msm não entra aq!
      //Se eu escrever algo na descrição! && index == undefined
      if (description && index === undefined) {
        console.log(description+" "+index);
        console.log("ENTREI");
       
        const new1Task: Task = {
          description: description,
          done: false,
          id: Math.random().toString().split('.')[1]
        };
        console.log(new1Task.done);
        this.task1s.push(new1Task);

        this.saveTas1k(new1Task);
      }//é o caso de eu editar e add!  
      else if (index !== undefined) {
        console.log("Index não nulo! ");
        this.task1s[index].description = description;
        this.saveTas1k(this.task1s[index]);
      }
    }
    //Resolve a duplicaçao que eu tinha
    this.ajud1a = description;
  }

   deleteTas1k(index: number): void {
    console.log("loucura "+ this.storage.remove(this.task1s[index].id));
    console.log("index "+index);
    this.storage.remove(this.task1s[index].id)
      .then(() => {
        //Splice é: apartir do elemento com (índiceTal, tire a qtd passada)
        //tasks[index] e o tiro!
        //tva tirando duplicado pq eu tva pondo 1 e era 0
        //Tirei esse código de baixo aí parou de tirar duas ao mesmo tempo:
        this.task1s.splice(index, 1);
        console.log("dentro " + this.task1s.splice(index,1));
        this.presentToas1t('Deleted item!');
      })
      .catch(this.handleError);
  }

  editTas1k(description: string, index: number): void {
    //vá pra TaskPage e leve consigo as variáveis description e index
    this.navCtrl.push('TasknormalPage', { description: description, index: index });
  }

  markAsDon1e(task: Task): void {
    task.done = !task.done;
    if(task.done==true){
      this.presentToas1t("marked item");
    }else{
      this.presentToas1t("unchecked item");
    }
  }

  saveTas1k(task: Task): void {
    //nesse caso o set recebe como parâmetro o id da task e uma task
    /*(method) Storage.set(key: string, value: any): Promise<any>  Set the value for the given key.
      @param key — the key to identify this value. @param value — the value for this key
      @returns — Returns a promise that resolves when the key and value are set */
    this.storage.set(task.id, task)
      .then(() => {
        this.presentToas1t('Item saved!');
      })
      .catch(this.handleError);
  }
  
  //toastCtrl tem um método chamado create que recebe como parâmetro
  //uma message que é uma string e uma duration que é um tempo definido em 
  //milisegundos
  presentToas1t(message: string): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  handleError(error: any): void {
    this.presentToas1t('An error has occurred! Please try again later.');
    console.error(error);
  }
}
