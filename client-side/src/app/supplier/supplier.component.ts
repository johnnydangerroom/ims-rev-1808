import { Component, OnInit } from '@angular/core';
import { Supplier } from '../class/supplier';
import { SupplierService } from '../supplier/supplier.service';
import { Item } from '../class/item';
import { FormControl, Validators } from '@angular/forms';
import { ItemService } from '../core/item.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {


  public suppliers: Supplier[];
  public items: Item[];
  
  editsup : Supplier = {id: 0, name: '', itemsup: {id: 0, name: '', price: 0.00}, email: ''}
  sup : Supplier = {id: 0, name: '', itemsup: {id: 0, name: '', price: 0.00}, email: ''}
  constructor(
    private supplierservice: SupplierService,
    private itemservice: ItemService
    
    ) {}

  ngOnInit() {
    this.fillSups();
    this.fillItems();
    
  }

  fillSups(){
    this.supplierservice.getSuppliers().subscribe(supplierList => (this.suppliers = supplierList));
  }
  editSup(sup: Supplier){
    this.supplierservice.getSupplier(sup.id).subscribe(resp=>(this.editsup = resp));
  }
  deleteSup(sup: Supplier){
    this.supplierservice.deleteSupplier(sup.id).subscribe(()=>{this.fillSups()});
    //this.fillSups();
  }
  fillItems(){
    this.itemservice.getItems().subscribe(itemList => (this.items = itemList));
  }
  editSubmit(){
    this.supplierservice.updateSupplier(this.editsup).subscribe(()=>{this.fillSups()});
  }
  submitModal(){
    this.supplierservice.addSupplier(this.sup).subscribe(value=>{console.log('Got it: ',value)},
    error=>{console.log('Did not get it')},
    ()=>{this.fillSups()});
  }
}
