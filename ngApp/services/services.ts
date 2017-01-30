namespace tester.Services {
  export class ProductService {
       private ProductResource;

       public list() {
         return this.ProductResource.query()
       }

       public save(product) {
         return this.ProductResource.save(product)
       }

       public remove(id) {
        return this.ProductResource.remove({id:id}).$promise;
      }

       constructor($resource:ng.resource.IResourceService) {
         this.ProductResource = $resource('/api/products/:id');
       }

   }

   angular.module('tester').service('productService', ProductService);
    }
