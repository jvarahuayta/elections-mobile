import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastUtil{

    constructor( private toastDesignProvider: ToastController ){
        
    }

    show(message: string, title?: string){
        this.toastDesignProvider.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    info(message: string, title?: string){
        this.toastDesignProvider.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    success(message: string, title?: string){
        this.toastDesignProvider.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    warning(message: string, title?: string){
        this.toastDesignProvider.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    error(message: string, title?: string){
        this.toastDesignProvider.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

}