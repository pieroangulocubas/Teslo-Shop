import prisma from "@/lib/prisma"
import { initialData } from "./seed"

async function main(){
    // 1. Borrar registro previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany()
    ])

    // 2. Insertar categorias
    const {categories,products}= initialData
    const categoriesData=categories.map(name=>({name}))

    await prisma.category.createMany({
        data:categoriesData
    })
    
    // 3. Mapear ID con categorias de la base de datos para luego insertar productos
    const categoriesDB=await prisma.category.findMany()
    const categoriesMap=categoriesDB.reduce((map,category)=>{
        map[category.name.toLowerCase()]=category.id
        return map
    },{} as Record<string,string>)

    // Productos
    products.forEach( async(product) => {

        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
        data: {
            ...rest,
            category_id: categoriesMap[type]
        }
        })


        // Images
        const imagesData = images.map( image => ({
        url: image,
        productId: dbProduct.id
        }));

        await prisma.productImage.createMany({
        data: imagesData
        });

    });

    console.log("Ejecutado correctamente")
}

(()=>{
    if(process.env.NODE_ENV==="production") return
    main()
})()