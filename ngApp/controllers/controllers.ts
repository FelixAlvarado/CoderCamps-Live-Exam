namespace tester.Controllers {

    export class HomeController {
      public products;
       public product;

       public save() {
         this.productService.save(this.product)

       }

       public remove(id) {
     this.productService.remove(id).then(() => {
       this.products = this.productService.list();
     });
   }

       constructor(private productService:tester.Services.ProductService) {
         this.products = productService.list();
       }
    }

    export class EditController {
     public product;
public productId;
     public save() {
       this.product._id = this.productId
       this.productService.save(this.product)

     }

     constructor(
       private productService:tester.Services.ProductService,
       private $state:ng.ui.IStateService,
       private $stateParams:ng.ui.IStateParamsService
     ) {
       this.productId = $stateParams['id'];
     }

   }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
