// named imports
import { getCompanyCategories } from '@/actions/companies'
import CompanyListItem from './CompanyListItem'

interface Props {
  selectedCompany: string
  selectedCategory: string
}

export async function CompanyFilters({ selectedCompany, selectedCategory }: Props) {
  const companies = await getCompanyCategories()

  return (
    <div>
      <div className='my-2'>
        {(companies.slice(0, 7)).map((company, index) => (
          <CompanyListItem
            selectedCategory={selectedCategory}
            selectedCompany={selectedCompany}
            company={company}
            key={index} />
        ))}
      </div>

    </div>
  )
}

export default CompanyFilters
