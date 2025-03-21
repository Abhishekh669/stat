
import { ProductListPage } from "@/components/products/product-list-page";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary/10 py-12">
        <div className="container px-4">
          <h1 className="text-4xl font-serif font-bold text-center">
            Our Products
          </h1>
        </div>
      </div>
      <main className="flex-1">
        <ProductListPage />
      </main>
    </div>
  );
}
