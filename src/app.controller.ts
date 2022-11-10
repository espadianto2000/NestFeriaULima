import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from 'firebase/database';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ModelPrueba } from "./models/modelPrueba";
import { modelVisita } from "./models/modelVisita";
import { modelEntradaZoom } from "./models/modelEntradaZoom";
import { modelIngresos } from "./models/modelIngresos";
import { modelEntradaStand } from "./models/modelEntradaStand";

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


  @Post('/Visita')
  PruebaVisita(@Body() body:modelVisita): void {
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
    var Visita :modelVisita = body;
    set(ref(database, 'Visita/'+Visita.empresaV+'/'+Visita.fecha+'/'+Visita.idV), Visita);
  }

  @Post('/EntradaZoom')
  PruebaEntradaZoom(@Body() body:modelEntradaZoom): void {
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
    var entrada :modelEntradaZoom = body;
    set(ref(database, 'EntradaZoom/'+entrada.empresaV+'/'+entrada.fecha+'/'+entrada.idV), entrada);
  }

  @Post('/Ingresos')
  PruebaIngresos(@Body() body:modelIngresos): void {
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
    var ingresos :modelIngresos = body;
    set(ref(database, 'Ingresos/'+ingresos.fecha+'/'+ingresos.idV), ingresos);
  }
  @Post('/EntradaStand')
  PruebaEntradaStand(@Body() body:modelEntradaStand): void {
    const firebaseConfig = {
      apiKey: "AIzaSyBg7eR4Xev2MVxEMWeRczvYBBG-q2oSbas",
      authDomain: "nestferia.firebaseapp.com",
      databaseURL: "https://nestferia-default-rtdb.firebaseio.com/",
      projectId: "nestferia",
      storageBucket: "nestferia.appspot.com",
      messagingSenderId: "981551225191",
      appId: "1:981551225191:web:3b49b4fffa5b53128d37c2"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    var entradaS :modelEntradaStand = body;
    set(ref(database, 'EntradaStand/'+entradaS.empresaV+'/'+entradaS.fecha+'/'+entradaS.idV), entradaS);
  }
}
