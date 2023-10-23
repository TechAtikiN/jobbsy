'use client'
// named imports
import { use, useEffect, useState } from 'react'
import { getCompanies } from '@/actions/getCompanies'
import { useForm } from 'react-hook-form'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import { Sheet, SheetTrigger } from '../ui/sheet'

// default imports
import AddCompanyForm from './AddCompanyForm'

type FormValues = {
  title: string
  location: string
  domain: string
  company: Company
  salaryCompensation: string
  yearsOfExperience: number
  description: string
  dayInLife: string
  rolesResponsibilities: string
  skillset: string
  companyId: number
  compensation: string
}

type Company = {
  id: number,
  name: string,
}

const JobPostForm = () => {
  const { toast } = useToast()
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await getCompanies()
      setCompanies(companies)
    }
    fetchCompanies()
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch('/api/post-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      toast({
        title: "Added the company successfully",
        description: "Now you can add jobs for this company",
      })
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
      })
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div className='sm:space-y-10 space-y-5'>

        {/* company details */}
        <div className='border-b border-gray-900/10 sm:pb-12 pb-6'>
          <h2 className='heading'>Company Details</h2>
          <p className='text-sm leading-6 text-gray-600 mb-2'>
            Select the company you are posting for.
          </p>

          <select
            {...register('companyId', { required: true, valueAsNumber: true })}
            className='border border-gray-300 px-2 py-2 my-2 text-sm w-1/2 rounded-md focus:outline-none'
            name='companyId'
            id='companyId'>
            {
              companies.map((company) => (
                <option value={company.id} key={company.id}>{company.name}</option>
              ))
            }
          </select>
          {errors.company && <p className='text-red-500 text-xs'>Company is required</p>}

          <div className='flex text-xs'>
            <p>
              Can&apos;t find your company?
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <button className='text-indigo-500 font-semibold'>
                  &nbsp;Add Company
                </button>
              </SheetTrigger>
              <AddCompanyForm />
            </Sheet>
          </div>
        </div>

        {/* job application details */}
        <div className='border-gray-900/10 pb-12'>
          <h2 className='heading'>
            Application Details
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Enter the details of your job posting.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-2'>
              <label htmlFor='title' className='block text-sm font-medium leading-6 text-gray-700'>
                Job Title
              </label>
              <div className='mt-2'>
                <input
                  {...register('title', { required: true })}
                  type='text'
                  name='title'
                  placeholder='e.g. Senior Software Engineer'
                  id='job'
                  className='form-input w-full'
                />
                {errors.title && <p className='text-red-500 text-xs'>Job title is required</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='domain' className='block text-sm font-medium leading-6 text-gray-700'>
                Domain
              </label>
              <div className='mt-2'>
                <input
                  {...register('domain', { required: true })}
                  type='text'
                  name='domain'
                  placeholder='e.g. Senior Software Engineer'
                  id='job'
                  className='form-input w-full'
                />
                {errors.domain && <p className='text-red-500 text-xs'>Job Domain is required</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='location' className='block text-sm font-medium leading-6 text-gray-700'>
                Job Location
              </label>
              <div className='mt-2'>
                <input
                  {...register('location', { required: true })}
                  type='text'
                  name='location'
                  id='location'
                  placeholder='e.g. London, UK'
                  className='form-input w-full'
                />
                {errors.location && <p className='text-red-500 text-xs'>Location is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='salaryCompensation' className='block text-sm font-medium leading-6 text-gray-700'>
                Salary Compensation
              </label>
              <div className='mt-2'>
                <input
                  {...register('salaryCompensation', { required: true })}
                  id='salaryCompensation'
                  name='salaryCompensation'
                  type='salaryCompensation'
                  placeholder='e.g. $100,000'
                  className='form-input w-full'
                />
                {errors.salaryCompensation && <p className='text-red-500 text-xs'>Salary compensation is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='yearsOfExperience' className='block text-sm font-medium leading-6 text-gray-700'>
                Required years of Experience
              </label>
              <div className='mt-2'>
                <input
                  {...register('yearsOfExperience', { required: true })}
                  id='yearsOfExperience'
                  name='yearsOfExperience'
                  type='yearsOfExperience'
                  placeholder='e.g. 5'
                  className='form-input w-full'
                />
                {errors.yearsOfExperience && <p className='text-red-500 text-xs'>Years of experience is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='description' className='block text-sm font-medium leading-6 text-gray-700'>
                Job description
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('description', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='description'
                  id='description'
                  placeholder='Describe the job in detail'
                  className='form-input w-full'
                />
                {errors.description && <p className='text-red-500 text-xs'>Description is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='dayInLife' className='block text-sm font-medium leading-6 text-gray-700'>
                What a typical day looks like?
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('dayInLife', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='dayInLife'
                  placeholder='Describe a typical day in the job'
                  id='dayInLife'
                  className='form-input w-full'
                />
                {errors.dayInLife && <p className='text-red-500 text-xs'>Day in your life is required</p>}
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label htmlFor='compensation' className='block text-sm font-medium leading-6 text-gray-700'>
                Compensation
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('compensation', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='compensation'
                  placeholder='Describe the compensation for the job'
                  id='compensation'
                  className='form-input w-full'
                />
                {errors.compensation && <p className='text-red-500 text-xs'>Day in your life is required</p>}
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label htmlFor='rolesResponsibilities' className='block text-sm font-medium leading-6 text-gray-700'>
                Roles &amp; Responsibilities
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('rolesResponsibilities', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='rolesResponsibilities'
                  id='rolesResponsibilities'
                  placeholder='Make a list of the roles and responsibilities of the job'
                  className='form-input w-full'
                />
                {errors.rolesResponsibilities && <p className='text-red-500 text-xs'>Roles and responsibilities are required</p>}
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label htmlFor='skillset' className='block text-sm font-medium leading-6 text-gray-700'>
                Skill set required
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('skillset', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='skillset'
                  id='skillset'
                  placeholder='Make a list of the skills required for the job'
                  className='form-input w-full'
                />
                {errors.skillset && <p className='text-red-500 text-xs'>Skill set is required</p>}
              </div>
            </div>
          </div>
        </div>

      </div>

      <button
        type='submit'
        className='apply-btn sm:w-1/4 sm:ml-[415px] mb-4 sm:mb-9'
      >
        Post a Job
      </button>
    </form>
  )
}

export default JobPostForm