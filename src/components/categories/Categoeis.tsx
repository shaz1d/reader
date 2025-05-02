import { getCategories } from "@/lib/actions";
import Link from "next/link";


const Categoeis = async () => {
    const categories = await getCategories();
  
  return (
    <div className="flex gap-2 text-sm">
                  {categories.map((category)=>(
                    <Link key={category.id} href="/" className="bg-gray-100 rounded-full px-6 py-3">
                    Design
                  </Link>
                  ))}
                  
                </div>
  )
}

export default Categoeis