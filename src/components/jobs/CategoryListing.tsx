// named imports
import { getCategories } from '@/actions/jobs'

// default imports
import CategoryListItem from './CategoryListItem'

interface Props {
  selectedCategory: string
  selectedCompany: string
}

export async function CategoryListing({
  selectedCategory,
  selectedCompany
}: Props) {
  const categories = await getCategories()

  return (
    <div>
      <div className='my-2'>
        {(categories.slice(0, 7)).map((category, index) => (
          <CategoryListItem
            selectedCompany={selectedCompany}
            selectedCategory={selectedCategory}
            category={category}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryListing
