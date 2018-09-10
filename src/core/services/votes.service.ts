import { RepositoryService } from "./contracts/repository.service";
import { Vote } from "../models/vote.model";
import { BaseSpecification } from "../specifications/base/base.specification";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import firebase from 'firebase';

@Injectable()
export class VotesService implements RepositoryService<Vote>{

    constructor( private af: AngularFirestore ){

    }

    find(specification?: BaseSpecification): Observable<Vote[]> {
        throw new Error("Method not implemented.");
    }

    findOne(specification?: BaseSpecification): Observable<Vote> {
        throw new Error("Method not implemented.");
    }

    add(entity: Vote): Observable<Vote> {
        return Observable.fromPromise(
            this.af.collection('votes').doc(entity.user.dni).set({
                candidateId: entity.candidate.id,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        ).map( response => {
            console.log(response);
            return entity;
        }).catch(err => {
            console.error(err);
            return Observable.of(null);
        });
    }

    update(entity: Vote): Observable<Vote> {
        throw new Error("Method not implemented.");
    }
    
    remove(entity: Vote): Observable<Vote> {
        throw new Error("Method not implemented.");
    }
    
}