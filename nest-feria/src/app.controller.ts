import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from 'firebase/database';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ModelPrueba } from "./models/modelPrueba";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/prueba')
  muerteAdapt(@Body() body:ModelPrueba): void {
    const firebaseConfig = {
      apiKey: "AIzaSyBg7eR4Xev2MVxEMWeRczvYBBG-q2oSbas",
      authDomain: "nestferia.firebaseapp.com",
      databaseURL: "https://nestferia-default-rtdb.firebaseio.com",
      projectId: "nestferia",
      storageBucket: "nestferia.appspot.com",
      messagingSenderId: "981551225191",
      appId: "1:981551225191:web:3b49b4fffa5b53128d37c2"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    var prueba :ModelPrueba = body;
    set(ref(database, 'prueba/'+prueba.categoria+'/'+prueba.numero+'/pruebaInterna'), prueba);
  }
}
