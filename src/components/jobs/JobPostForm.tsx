'use client'
// named imports
import { useForm } from 'react-hook-form'
import { Sheet, SheetTrigger } from '../ui/sheet'

// default imports
import AddCompanyForm from './AddCompanyForm'

const companies = [
  'Workcation',
  'Remote Lands',
  'Herald',
  'Google',
  'Shopify',
  'Twitch',
  'GitHub',
  'Slack',
  'Discord',
  'Amazon',
]

type FormValues = {
  company: string
  jobTitle: string
  location: string
  salaryCompensation: string
  yearsOfExperience: number
  description: string
  dayInYourLife: string
  rolesNResponsibilities: string
  skillSet: string
}

const JobPostForm = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <form
      onSubmit={onSubmit}
      className='space-y-10'
    >
      <div className='space-y-10'>

        {/* company details */}
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='heading'>Company Details</h2>
          <p className='text-sm leading-6 text-gray-600 mb-2'>
            Select the company you are posting for.
          </p>

          <select
            {...register('company', { required: true })}
            className='border border-gray-300 px-2 py-2 my-2 text-sm w-1/2 rounded-md focus:outline-none'
            name='company' id='company'>
            {companies.map((company) => (
              <option key={company}>{company}</option>
            ))}
          </select>
          {errors.company && <p className='text-red-500 text-sm'>Company is required</p>}

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
            <div className='sm:col-span-3'>
              <label htmlFor='jobTitle' className='block text-sm font-medium leading-6 text-gray-700'>
                Job Title
              </label>
              <div className='mt-2'>
                <input
                  {...register('jobTitle', { required: true })}
                  type='text'
                  name='jobTitle'
                  placeholder='e.g. Senior Software Engineer'
                  id='job'
                  className='form-input w-full'
                />
                {errors.jobTitle && <p className='text-red-500 text-sm'>Job title is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
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
                {errors.location && <p className='text-red-500 text-sm'>Location is required</p>}
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
                {errors.salaryCompensation && <p className='text-red-500 text-sm'>Salary compensation is required</p>}
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
                {errors.yearsOfExperience && <p className='text-red-500 text-sm'>Years of experience is required</p>}
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
                {errors.description && <p className='text-red-500 text-sm'>Description is required</p>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='dayInYourLife' className='block text-sm font-medium leading-6 text-gray-700'>
                What a typical day looks like?
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('dayInYourLife', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='dayInYourLife'
                  placeholder='Describe a typical day in the job'
                  id='dayInYourLife'
                  className='form-input w-full'
                />
                {errors.dayInYourLife && <p className='text-red-500 text-sm'>Day in your life is required</p>}
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label htmlFor='rolesNResponsibilities' className='block text-sm font-medium leading-6 text-gray-700'>
                Roles &amp; Responsibilities of the job
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('rolesNResponsibilities', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='rolesNResponsibilities'
                  id='rolesNResponsibilities'
                  placeholder='Make a list of the roles and responsibilities of the job'
                  className='form-input w-full'
                />
                {errors.rolesNResponsibilities && <p className='text-red-500 text-sm'>Roles and responsibilities are required</p>}
              </div>
            </div>

            <div className='sm:col-span-6'>
              <label htmlFor='skillSet' className='block text-sm font-medium leading-6 text-gray-700'>
                Skill set required for the job
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('skillSet', { required: true })}
                  style={{ resize: 'none' }}
                  rows={3}
                  name='skillSet'
                  id='skillSet'
                  placeholder='Make a list of the skills required for the job'
                  className='form-input w-full'
                />
                {errors.skillSet && <p className='text-red-500 text-sm'>Skill set is required</p>}
              </div>
            </div>
          </div>
        </div>

      </div>

      <button
        type='submit'
        className='bg-indigo-500 text-center w-1/4 uppercase font-semibold text-white px-3 py-2 rounded-md text-sm'
      >
        Post Job
      </button>
    </form>
  )
}

export default JobPostForm