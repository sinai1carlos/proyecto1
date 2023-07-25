import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre:string;
  apellido:string;
  presupuesto:number;

  precioProducto:number;
  recarga:number;
  compraExitosa:boolean;

  contador_like=0;
  contador_love=0;
  contador_angry=0;
  contador_sad=0;
  contadorTotal= 0;

  comentar=false;
  textarea='';
  constructor(private requestService:RequestService){
    this.nombre='';
    this.apellido='';
    this.presupuesto=0;
    this.precioProducto=150;
    this.recarga=0;
    this.compraExitosa=false;
  }

  ngOnInit():void {
    console.log('Inicio del proyecto');
    // this.getPosts();
    // this.createPost();
    // this.deletePost();
  }

  getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((responsive)=> responsive.json())
    .then((json)=>console.log(json));
  }

  createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
  }

  getAllPosts(){
    this.requestService.getPosts().subscribe(dato=>{
      console.log(dato);
      
    })
  }

  createPostWithAngular(){
    let post={
      title: 'foo',
      body: 'bar',
      userId: 1,
      id:1111
    };
    this.requestService.createPost(post).subscribe(dato=>{
      console.log(dato);
      
    });
  }

  updatePostWithAngular(){
    let post={
      userId:1,
      id:10,
      title:'Ejemplo de post',
      body:'aqui vael texto del post',
      message:'Post creado como ejemplo'
    }
    this.requestService.updatePost(post).subscribe(dato=>{
      console.log(dato);
      
    });
  }





  mostrarDato(){
    return this.presupuesto;
  }

  comprar(){
    if(this.presupuesto>0 && this.presupuesto-this.precioProducto>=0){
      this.presupuesto=this.presupuesto-this.precioProducto;
      this.compraExitosa=true;
      console.log(`${this.compraExitosa}\nSaldo actual:${this.presupuesto}`);
    }else {
      this.compraExitosa=false;
      console.log(`No hay suficientes fondos\nSaldo actual:${this.presupuesto}`);
    }
  }

  recargar(){
    if(this.recarga>0){
      this.presupuesto=this.presupuesto+this.recarga;
    }else console.log("Recarga invalida");
    
  }

  like(){
    this.contador_like+=1;
    this.contadorTotal+=1
  }
  love(){
    this.contador_love+=1;
    this.contadorTotal+=1
  }
  angry(){
    this.contador_angry+=1;
    this.contadorTotal+=1
  }
  sad(){
    this.contador_sad+=1;
    this.contadorTotal+=1
  }
  
  comentando(){
    if(!this.comentar){
      this.comentar=true;
    }else{
      this.comentar=false;
    }
  }
  enviarComentario(){
    if(!this.comentar){
      this.comentar=true;
    }else{
      this.comentar=false;
    }
  }
}

