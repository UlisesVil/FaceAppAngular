import { Injectable, EventEmitter } from '@angular/core';
import * as faceapi from 'face-api.js';

@Injectable({
  providedIn: 'root'
})
export class FaceApiService {
  public globalFace: any;

  private modelsForLoad=[
    faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/modelsFaceApp'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/assets/modelsFaceApp'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/assets/modelsFaceApp'),
    faceapi.nets.faceExpressionNet.loadFromUri('/assets/modelsFaceApp'),
  ];

  constructor() {
    this.globalFace= faceapi;
    this.loadModels();
  }


  cbModels: EventEmitter<any> = new EventEmitter<any>();


  loadModels(){
    Promise.all(this.modelsForLoad).then(()=>{
      console.log('Modelos Cargados!!!!');
      this.cbModels.emit(true);
    });
  }
}
