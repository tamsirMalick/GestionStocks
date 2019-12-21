import { Component, OnInit } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styles: ['./produit.component.css']

})
export class ProduitComponent implements OnInit {
    

    produits: Produit[];
    produitForm: FormGroup;

    operation = 'add';

    produitSelected: Produit;

    constructor(private produitService: ProduitService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
        this.createEmptyForm();
    }
    
    createEmptyForm() {
        this.produitForm = this.formBuilder.group({
            ref: ['', Validators.required],
            quantite: '',
            prixUnitaire : ''
        });
        
    }

    ngOnInit() {
        this.initProduit();
        this.produits = this.route.snapshot.data.produits;
    }
    loadProduits() {
        this.produitService.getProduits().subscribe(
            data => { this.produits = data; },
            error => { console.log('Une erreur s\'est produit lors du chargement des des données'); },
            () => { console.log('Les données sont chargées'); }
        );
    }

    addProduit() {
        const p = this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
            res => {
                this.initProduit();
                this.loadProduits();
            }
        );
    }

    updateProduit() {
        this.produitService.updateProduit(this.produitSelected).subscribe(
            res => {
                this.initProduit();
                this.loadProduits();
            }
        );
    }

    deleteProduit() {
        this.produitService.deleteProduit(this.produitSelected.id).subscribe(
            res => {
                this.produitSelected = new Produit();
                this.loadProduits();
            }
        );
    }

    initProduit() {
        this.produitSelected = new Produit();
        this.createEmptyForm();
     }

}
