import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';

@Injectable()
export class ProduitMockService {
    private PRODUITS: Produit[] = [];

    constructor() {
        const p1: Produit = new Produit('Livre', 50, 20);
        const p2: Produit = new Produit('Cahier', 400, 5.25);
        const p3: Produit = new Produit('Stylo', 500, 2.10);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);

    }

    public getProduits(): Produit[] {
        return this.PRODUITS;
    }
}
