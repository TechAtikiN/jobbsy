'use client'
// named imports
import { useState } from 'react'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '../ui/sheet'
import { useForm } from 'react-hook-form'
import { useToast } from '@/hooks/useToast'
import { postApplication } from '@/actions/postApplication'

type Props = {
  jobTitle: string
  company: string
  jobId: number
}

type FormValues = {
  name: string
  email: string
  location: string
  summary: string
  resume: FileList
}

const JobApplicationForm = ({ jobTitle, company, jobId }: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      // send application to the db
      const sendApplication = await postApplication(jobId, data)

      // mail application to company
      const response = await fetch('/api/applicants', {
        method: 'POST',
        body: JSON.stringify({ ...data, company }),
        cache: 'no-cache',
      })

      // toast notification
      if (!response.ok || !sendApplication) {
        toast({
          title: "Something went wrong",
          description: "Please try again later",
        })
      } else {
        toast({
          title: "Application submitted successfully",
          description: "You'll receive an email from the company shortly",
        })
        reset()
      }
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  })

  return (
    <SheetContent className='w-[400px] sm:w-[540px]'>
      <SheetHeader>
        <SheetTitle>
          <p>{jobTitle}</p>
          <p className='text-sm text-gray-500'>@{company}</p>
        </SheetTitle>
        {/* <SheetDescription>
          Your application will be sent to the company
        </SheetDescription> */}
      </SheetHeader>

      <form
        onSubmit={onSubmit}
        className='flex flex-col space-y-6 my-5'>
        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='name'
            className='form-label'
          >
            Name
          </label>
          <input
            id='name'
            placeholder='Pedro Duarte'
            className='form-input'
            {...register('name', { required: true })}
          />
          {errors.name && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='email'
            className='form-label'
          >
            Email
          </label>
          <input
            id='Email'
            placeholder='pedro@gmail.com'
            className='form-input'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='text-red-500 text-xs'>This field is required</span>}
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
            placeholder='London'
            className='form-input'
            {...register('location', { required: true })}
          />
          {errors.location && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='summary'
            className='form-label'
          >
            Summary
          </label>
          <textarea
            rows={3}
            id='summary'
            placeholder='Summary of your application'
            className='form-input'
            {...register('summary', { required: true })}
          ></textarea>
          {errors.summary && <span className='text-red-500 text-xs'>This field is required</span>}
        </div>

        <SheetFooter>
          <button
            className='bg-indigo-500 text-center w-full uppercase font-semibold text-white px-3 py-2 rounded-md text-sm'
            type='submit'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </SheetFooter>
      </form>
    </SheetContent>
  )
}

export default JobApplicationForm