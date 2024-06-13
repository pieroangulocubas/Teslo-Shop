import { Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";

const products=initialData.products

export default function Home() {
  return (
   <>
      <Title title="Tienda" subtitle="Todos los productos" classname="mb-2"/>
      <ProductGrid  products={products}/>
   </>
  );
}
