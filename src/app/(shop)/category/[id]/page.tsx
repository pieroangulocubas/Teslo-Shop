import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props{
  params:{
      id:Category
  }
}

const titleAdapter:Record<Category,string>={
  men:"Hombres",
  women:"Mujeres",
  kid:"Niños",
  unisex:"Unisex"
}

export default function({params}:Props) {

  const products=initialData.products.filter(p=>p.gender===params.id)
  return (
    <>
      <Title title={`Artículos de ${titleAdapter[params.id]}`} subtitle="Todos los productos" classname="mb-2"/>
      <ProductGrid products={products}/>
    </>
  );
}