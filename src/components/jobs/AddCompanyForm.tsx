'use client'
// named imports
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '../ui/sheet'
import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  location: string
  description: string
  about: string
  companyBenefits: string
  website: string
  policies: string
}

const AddCompanyForm = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          <p>
            Add Company
          </p>
        </SheetTitle>
        <SheetDescription>
          You are adding a new company, please fill the form carefully.
        </SheetDescription>
      </SheetHeader>

      <form
        onSubmit={onSubmit}
        className='flex flex-col space-y-6 my-5 h-[480px] overflow-x-hidden overflow-y-scroll'>
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='name'
            className='form-label'
          >
            Company Name
          </label>
          <input
            id='name'
            placeholder='Name'
            className='form-input'
            {...register('name', { required: true })}
          />
          {errors.name && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='location'
            className='form-label'
          >
            Location
          </label>
          <input
            id='location'
            placeholder='Location'
            className='form-input'
            {...register('location', { required: true })}
          />
          {errors.location && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='description'
            className='form-label'
          >
            Description about the company
          </label>
          <input
            id='description'
            placeholder='Description'
            className='form-input'
            {...register('description', { required: true })}
          />
          {errors.description && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='about'
            className='form-label'
          >
            About
          </label>
          <textarea
            style={{ resize: 'none' }}
            rows={3}
            id='about'
            placeholder='About'
            className='form-input'
            {...register('about', { required: true })}
          ></textarea>
          {errors.about && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='companyBenefits'
            className='form-label'
          >
            Company Benefits
          </label>
          <textarea
            style={{ resize: 'none' }}
            rows={3}
            id='companyBenefits'
            placeholder='Benefits given by your company'
            className='form-input'
            {...register('companyBenefits', { required: true })}
          ></textarea>
          {errors.companyBenefits && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='policies'
            className='form-label'
          >
            Policies
          </label>
          <textarea
            style={{ resize: 'none' }}
            rows={3}
            id='policies'
            placeholder='Company policies'
            className='form-input'
            {...register('policies', { required: true })}
          ></textarea>
          {errors.policies && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='website'
            className='form-label'
          >
            Website
          </label>
          <input
            id='website'
            placeholder='Website'
            className='form-input'
            {...register('website', { required: true })}
          />
          {errors.website && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <SheetFooter>
          <button
            className='bg-indigo-500 text-center w-full uppercase font-semibold text-white px-3 py-2 rounded-md text-sm'
            type='submit'
          >
            Submit
          </button>
        </SheetFooter>
      </form>
    </SheetContent>
  )
}

export default AddCompanyForm