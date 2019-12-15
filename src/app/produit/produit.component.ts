import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styles: ['./produit.component.css']

})
export class ProduitComponent implements OnInit {
    

    produits: Produit[];
    produitForm: FormGroup;

    constructor(private produitService: ProduitMockService, private formBuilder: FormBuilder) {
        this.produitForm = formBuilder.group({
            ref: ['', Validators.required],
            quantite: '',
            prixUnitaire : ''
        });
    }


    ngOnInit() {
        
        this.produits = this.produitService.getProduits();
    }

}
