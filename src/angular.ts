import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {

  count: WritableSignal<number> = signal(1)
  doubleCount: Signal<number> = computed(()=> this.count()*2)

  expensiveComputation = computed(()=>{
    console.log('Expensive computation running..');
    
    return this.count()*100
  })

  ngOnInit(){
    this.count.set(5)
    console.log(this.count(),this.doubleCount());
    
  }
  expensiveCount(){
    console.log(this.expensiveComputation());
    
  }

  increment(){
    this.count.update((val)=>val+1)
  }
}
1)============================Dynamic Dependencies in Angular: Master Computed Signals!
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal, computed } from '@angular/signals';

@Component({
  selector: 'app-dynamic-dependencies',
  template: `
    <div>
      <label for="quantity">Quantity:</label>
      <input id="quantity" type="number" [value]="quantity()" (input)="updateQuantity($event.target.value)" />

      <label for="price">Price per Unit:</label>
      <input id="price" type="number" [value]="pricePerUnit()" (input)="updatePrice($event.target.value)" />

      <div>
        <p>Total Price: {{ total() }}</p>
      </div>
    </div>

<div>
	<label for="quantity">Quantity:</label>
	<input id="quantity" type="number" [(ngModel)]="quantityModel" />

	<label for="price">Price per Unit:</label>
	<input id="price" type="number" [(ngModel)]="pricePerUnitModel" />

	<div>
		<p>Total Price: {{ total() }}</p>
	</div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDependenciesComponent {
  // Signal for Quantity
  quantity = signal(1);

  // Signal for Price per Unit
  pricePerUnit = signal(100);

  // Computed signal for Total (dynamic dependency)
  total = computed(() => {
    return this.quantity() * this.pricePerUnit(); // Dynamic dependencies
  });

  // Method to update Quantity
  updateQuantity(value: string) {
    this.quantity.set(Number(value)); // Update signal with new value
  }

  // Method to update Price per Unit
  updatePrice(value: string) {
    this.pricePerUnit.set(Number(value)); // Update signal with new value
  }

  // quantity = signal(1);
  // pricePerUnit = signal(100);

  // // Computed signal for Total
  // total = computed(() => {
  //   return this.quantity() * this.pricePerUnit();
  // });

  // // Getter and Setter for ngModel binding with Signal
  // get quantityModel(): number {
  //   return this.quantity();
  // }

  // set quantityModel(value: number) {
  //   this.quantity.set(value);
  // }

  // get pricePerUnitModel(): number {
  //   return this.pricePerUnit();
  // }

  // set pricePerUnitModel(value: number) {
  //   this.pricePerUnit.set(value);
  // }
}
2)===================================================Mastering Angular Signals: Harness the Power of Effects

 searchQuery = signal('')
  searchResults:any[] = []

  constructor(private http:HttpClient){
    effect(()=>{
      const query = this.searchQuery()
      console.log({query});
      
      if(query){
        this.fetchResults(query).subscribe(res=>{
          this.searchResults = res
        })
      }
    })
  }

  get search(){
    return this.searchQuery()
  }
  set search(value:any){
    this.searchQuery.set(value)
  }
  fetchResults(query: string): Observable<any[]>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
  }
  onSearch(query: string){
    this.searchQuery.set(query)
  }

<div>
	<h2>Search Post</h2>
	<input type="text" [(ngModel)]="search" placeholder="Enter Search Query" (ngModelChange)="onSearch(searchQuery())"/>

	<div *ngIf="searchResults.length > 0">
		<h3>Results:</h3>
		<ul>
			<li *ngFor="let post of searchResults">
				<h4>{{post.title}}</h4>
				<p>{{post.body}}</p>
			</li>
		</ul>
	</div>
	<div *ngIf="searchResults.length === 0 && searchQuery()">
		<p>No posts found for {{ searchQuery() }}</p>
	</div>
</div>
