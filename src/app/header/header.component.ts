/*
*/
import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
  title: string = "Ingenieria Aplicada a Sistemas Empresariales";
  menu: string[] = ["Desarrollo Web","Microservicios","Calidad en el software", "Detras del Front"];
  linkGit: string = 'https://github.com/Consultoria-DCK/dck-ti';
  linkGitPersonal: string = "https://github.com/Ivan-Basilio/";
  linkBlog: string = "https://desarrollo-independiente.blogspot.com/2020/05/desarrollo-de-aplicaciones-con-angular.html";
  linksTemasAdicionales: string[] = [ ];
}
