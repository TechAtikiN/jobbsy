'use client'
// named imports
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '../ui/sheet'
import { useForm } from 'react-hook-form'
import { submitApplicationForm } from '../../actions/submitApplicationForm'
import { uploadResume } from '@/actions/uploadResume'
import { useToast } from '../ui/use-toast'


type Props = {
  jobId: number
  jobTitle: string
  company: string
}

type FormValues = {
  name: string
  email: string
  location: string
  summary: string
  resume: FileList
}

const JobApplicationForm = ({ jobId, jobTitle, company }: Props) => {
  const { toast } = useToast()
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    const submitAppication = await submitApplicationForm(data)

    // toast notification
    // if (!res.ok) {
    //   toast({
    //     title: "Something went wrong",
    //     description: "Please try again later",
    //   })
    // } else {
    // toast({
    //   title: "Application submitted successfully",
    //   description: "You'll receive an email from the company shortly",
    // })
    //   reset()
    // }
  })

  return (
    <SheetContent>
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

        <div className='flex flex-col space-y-1'>
          <label
            htmlFor='resume'
            className='form-label'
          >
            Resume/CV
          </label>
          <input
            type='file'
            id='resume'
            placeholder='Resume/CV'
            className='form-input'
            {...register('resume', { required: true })}
          />
          {errors.resume && <span className='text-red-500 text-xs'>This field is required</span>}
          {/* <button
            formAction={uploadResume}
          >
            Upload Resume
          </button> */}
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

export default JobApplicationForm