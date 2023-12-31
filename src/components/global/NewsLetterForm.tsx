'use client'
// named imports
import { useForm } from 'react-hook-form'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import { useToast } from '@/hooks/useToast'
import { useState } from 'react'

type FormValues = {
  name: string
  email: string
}

const NewsLetterForm = () => {
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  const [loading, setLoading] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-cache'
      })
      setLoading(false)
      if (!res.ok) {
        toast({
          title: "Something went wrong",
          description: "Please try again later",
        })
      } else {
        toast({
          title: "Thank you for subscribing",
          description: "You'll receive the latest news from us shortly",
        })
        reset()
      }
    } catch (err) {
      alert('Something went wrong. Please try again later')
    }
  })

  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle className='text-xl text-center font-semibold text-indigo-700'>Subscribe to our newsletter</DialogTitle>
        <DialogDescription className='text-center'>
          Get the latest news and updates from Jobbsy, delivered right to your
          inbox.
        </DialogDescription>
      </DialogHeader>
      <form
        onSubmit={onSubmit}
        className='py-4 space-y-3'>
        <div
          className=''
        >
          <label htmlFor='name' className='text-sm'>
            Name
          </label>
          <input
            {...register('name', { required: true })}
            id='name'
            className='form-input w-full'
          />
          {errors.name && <span className='error'>This field is required</span>}
        </div>
        <div className=''>
          <label htmlFor='email' className='text-sm'>
            Email
          </label>
          <input
            {...register('email', { required: true })}
            id='email'
            className='form-input w-full'
          />
          {errors.email && <span className='error'>This field is required</span>}
        </div>
        <DialogFooter>
          <button
            type='submit'
            className='apply-btn mx-auto my-2 py-2'
            disabled={loading}
          >
            {loading ? 'Please Wait...' : 'Subscribe'}
          </button>
        </DialogFooter>
      </form>

    </DialogContent>
  )
}

export default NewsLetterForm
