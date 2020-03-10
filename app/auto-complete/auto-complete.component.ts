import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { AutoCompleteService } from '../services/auto-complete.service'

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  public query = '';
    public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                        "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                        "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                        "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                        "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                        "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    public filteredList = [];
    public elementRef;
    public countrysService;

  constructor( myElement: ElementRef, autoCompleteService: AutoCompleteService ) {
    this.elementRef = myElement;
    this.countrysService = autoCompleteService;
   }

  public ngOnInit(): void {
    
  }

  
    public filter(): void {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return (el.toLowerCase().substr(0,this.query.length) === this.query.toLowerCase()) == true;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
    console.log("Filtered list"+this.filteredList );
}

public getContries() : void {
  this.countrysService.getCountries(this.query).subscribe(data => {
    if (data && data.length!==0) {
     console.log(data);   
    }
    
  });
  
}
 
select(item){
    this.query = item;
    this.filteredList = [];
}
handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}

}