// 'use client'
// named imports
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '../ui/sheet'
import { useForm } from 'react-hook-form'
import { useToast } from '../ui/use-toast'
import { useTransition } from 'react'
import { addCompanyProfile } from '@/actions/addCompanyProfile'

type FormValues = {
  name: string
  location: string
  description: string
  about: string
  benefits: string
  website: string
  policies: string
}

const AddCompanyForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    const company = startTransition(() => {
      addCompanyProfile(data)
    })

    if (company === null) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
      })
    } else {
      toast({
        title: "Added the company successfully",
        description: "Now you can add jobs for this company",
      })
    }
  })

  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>
          <p>
            Add a Company
          </p>
        </SheetTitle>
        <SheetDescription>
          Fill the details carefully
        </SheetDescription>
      </SheetHeader>

      <hr className='my-4' />
      <form
        onSubmit={onSubmit}
        className='flex flex-col pr-3 space-y-6 my-5 sm:h-[480px] overflow-x-hidden overflow-y-scroll'>
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
            htmlFor='benefits'
            className='form-label'
          >
            Company Benefits
          </label>
          <textarea
            style={{ resize: 'none' }}
            rows={3}
            id='benefits'
            placeholder='Benefits given by your company'
            className='form-input'
            {...register('benefits', { required: true })}
          ></textarea>
          {errors.benefits && <span className='text-red-500 text-xs'>This field is required</span>}
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
            {isPending ? 'Submitting...' : 'Submit'}
          </button>
        </SheetFooter>
      </form>
    </SheetContent>
  )
}

export default AddCompanyForm