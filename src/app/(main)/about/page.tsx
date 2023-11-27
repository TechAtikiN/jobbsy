// named imports
import {
  BuildingOffice2Icon,
  ClipboardDocumentIcon,
  NewspaperIcon,
  PlusCircleIcon
} from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Post a Job',
    description:
      'Employers can easily post job openings, providing detailed information about the position and attracting top talent to their organizations.',
    icon: PlusCircleIcon,
  },
  {
    name: 'View Post Details',
    description:
      'Job seekers can view comprehensive details about each job posting, including requirements, responsibilities, and application instructions.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Explore Companies',
    description: 'Discover information about various companies, their cultures, and the opportunities they offer.Make informed decisions about your career path.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Subscribe to Our Newsletter',
    description:
      '  Stay updated with the latest job postings, industry trends, and career advice by subscribing to our newsletter.Don\nt miss out on exciting opportunities!',
    icon: NewspaperIcon,
  },
]

export default function AboutPage() {
  return (
    <div className='bg-white py-24 sm:py-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-slate-600'>
            Jobbsy is the best place to find your next jobs
          </h2>
          <p className='mt-2 text-5xl font-bold tracking-tight text-indigo-500'>
            Your job search ends here!
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            We are passionate about connecting job seekers with
            exciting opportunities. Our platform offers a range of features to enhance your
            job search experience!
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='bg-indigo-50 hover:bg-indigo-100 rounded-lg p-3 relative pl-16'>
                <dt className='text-base flex items-center font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  <p className='mt-2'>{feature.name}</p>
                </dt>
                <dd className='text-sm leading-7 text-gray-600'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
