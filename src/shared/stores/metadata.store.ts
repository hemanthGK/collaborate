/* Angular Import */
import { Injectable }             from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryDetails } from '../models/interface/partials/category-details';
import { OEMDetails } from '../models/interface/partials/oem-details';
import { ProductsDetails } from '../models/interface/partials/products-details';
/* Feature Imports */



/**
 * Creates our Metadata State injectable
 * Feature specific stores are Angular Injectables extending the abstract OuxStore (i.e., class):
 */
@Injectable({ providedIn: 'root' })
export class MetadataStore {

    public categoryDetails : CategoryDetails ;
    public oemDetails : OEMDetails ;
    public productsDetails : ProductsDetails ;
    public trendingProducts : any;
  
    private categoryDetailsSubject = new BehaviorSubject<CategoryDetails[]>(null);
    public categoryDetails$ = this.categoryDetailsSubject.asObservable();

    private oemDetailsSubject = new BehaviorSubject<OEMDetails[]>(null);
    public oemDetails$ = this.oemDetailsSubject.asObservable();

    private productsDetailsSubject = new BehaviorSubject<ProductsDetails[]>(null);
    public productsDetails$ = this.productsDetailsSubject.asObservable();

    private trendingProductsSubject = new BehaviorSubject<any[]>(null);
    public trendingProducts$ = this.trendingProductsSubject.asObservable();

  constructor() {
  }
  

  /**
   * ============================================================
   * Set Product Category
   */
   public setCategoryDetails(data : CategoryDetails[]) : void {

    this.categoryDetailsSubject.next(data);
  }

  /**
   * ============================================================
   * Set OEM
   */
  public setOEMDetails(data : OEMDetails[]) : void {

    this.oemDetailsSubject.next(data);
  }
  /**
   * ============================================================
   * Set Products
   */
  public setProductsDetails(data : ProductsDetails[]) : void {

    this.productsDetailsSubject.next(data);
  }

  /**
   * ============================================================
   * Set Trending Products
   */
  public setTrendingProducts(data : any[]) : void {

    this.trendingProducts = data;
    console.log("*****(((((( )))))) Called in ", data);
    this.trendingProductsSubject.next(data);
  }

  
  /**
   * Return User Details
   */
   public getCategoryDetails(): CategoryDetails {
    return this.categoryDetails;
  }


  /**
   * Return OEM Details
   */
  public getOEMDetails(): OEMDetails {
    return this.oemDetails;
  }
  /**
   * Return User Details
   */
  public getProductsDetails(): ProductsDetails {
    return this.productsDetails;
  }

   /**
   * Return Trending Products Details
   */
   public getTrendingProducts(): ProductsDetails {
    return this.trendingProducts;
  }

  
  /**
   * Clear MetaData Collection
   * ============================================================
   */
  public clearCategoryDetails(): void {
    
  }



}