import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

    const productId: number = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
        this.cdr.markForCheck();
      }
    )
  }
}
