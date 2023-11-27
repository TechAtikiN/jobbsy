// named imports
import { getJobDetails } from '@/actions/jobs/jobs'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import {
  ClipboardDocumentIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  UsersIcon
} from '@heroicons/react/24/solid'
import { useParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import { useToast } from '@/hooks/useToast'

// default imports
import Link from 'next/link'
import JobApplicationForm from '@/components/jobs/JobApplicationForm'
import Loader from '@/components/ui/loader'

const hiringProcess = [
  {
    title: "Application",
    description: "Initial step in the hiring process where candidates express their interest in a particular position by submitting their resumes, cover letters, and other relevant documents. It's the first opportunity for candidates to make a positive impression on the hiring team.",
    icon: <ClipboardDocumentIcon />
  },
  {
    title: "Interviews",
    description: "After the initial application review, candidates who meet the basic qualifications are typically invited to participate in interviews. The interview stage can consist of several rounds, which may include phone screenings, video interviews, or in-person meetings.",
    icon: <UsersIcon />
  },
  {
    title: "Assessment",
    description: "Candidates may be asked to complete various assessments, which could be technical, behavioral, or role-specific tests. The purpose of assessments is to evaluate a candidate's specific skills and abilities relevant to the job.",
    icon: <RectangleStackIcon />
  },
  {
    title: "Offer",
    description: "If a candidate successfully navigates the application, interview, and assessment stages, they may receive a job offer. The offer typically includes details about the role, compensation, benefits, and other relevant terms and conditions of employment.",
    icon: <ShieldCheckIcon />
  }
]

export async function JobDetails({ params: { jobId } }: { params: { jobId: string } }) {
  const jobDetails: JobDetails = await getJobDetails(Number(jobId))

  if (!jobDetails) return <Loader />

  return (
    <div className='p-6 sm:px-14 px-7'>

      {/* top details section */}
      <div className='border-b border-gray-300'>
        <div className='sm:flex justify-between items-center'>
          <h3 className='sm:text-4xl text-3xl font-semibold text-gray-700'>{jobDetails?.title}</h3>

          {/* job application form  */}
          <Sheet>
            <SheetTrigger asChild>
              <button className='apply-btn hidden sm:block'>
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm jobId={jobDetails?.id!} company={jobDetails?.company?.name!} jobTitle={jobDetails?.title!} />
          </Sheet>
        </div>

        {/* job description  */}
        <div className='my-4'>
          <div className='my-3'>
            <p className='font-semibold text-lg text-gray-700'>{jobDetails?.company?.name}</p>
          </div>

          <div className='flex justify-start items-center space-x-10'>
            <p className="font-normal text-gray-500">📌{jobDetails?.location}</p>
            <p className="font-normal text-gray-500">💵{jobDetails?.salaryCompensation}</p>
            <p className="font-normal text-gray-500">🔮 {jobDetails?.yearsOfExperience}years&nbsp;of experience</p>
          </div>

        </div>
      </div>

      {/* job details section */}
      <div className='grid sm:grid-cols-10 grid-cols-2 gap-x-8'>
        <div className='sm:col-span-7 col-span-2 my-4 flex flex-col'>

          <div className='text-gray-700'>
            <h2 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>Job Details</h2>
            <p className='text-justify pr-3'>{jobDetails?.description}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Day in your life!</h3>
            <p className='text-justify pr-3'>{jobDetails?.dayInLife}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Roles and Responsibilities</h3>
            <p className='text-justify pr-3'>{jobDetails?.rolesResponsibilities}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Skillset</h3>
            <p className='text-justify pr-3'>{jobDetails?.skillset}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Compensation</h3>
            <p className='text-justify pr-3'>{jobDetails?.compensation}</p>

            <h3 className='text-3xl font-extrabold hover:text-indigo-600 my-2 mt-7'>Hiring Process</h3>
            <ol className='relative m-6 dark:border-gray-700'>
              {hiringProcess.map((step, index: number) => (
                <li
                  key={index}
                  className={`pb-10 border-l text-justify border-gray-200 last:border-none`}>
                  <span className='absolute flex items-center text-indigo-600 rounded-full p-2 bg-indigo-100 justify-center w-8 h-8 -left-4'>
                    {step.icon}
                  </span>

                  <div className='ml-6 space-y-1 group hover:cursor-pointer'>
                    <h4
                      className='font-bold group-hover:text-indigo-700 text-gray-700'
                    >
                      {step.title}
                    </h4>
                    <p className='text-sm mb-4 text-gray-700 group-hover:text-indigo-500'>
                      <span className={`overflow-hidden transition-all duration-500 ease-in-out`}>
                        {step.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className='apply-btn w-full text-center'>
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm jobId={jobDetails?.id!} company={jobDetails?.company?.name!} jobTitle={jobDetails?.title!} />
          </Sheet>
        </div>

        <div className='sm:col-span-3 col-span-2 my-4 text-gray-700'>
          <h3 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>
            About the company
          </h3>

          <div className='p-4 bg-indigo-50 rounded-md'>
            <div className='flex flex-col'>
              <p className='text-xl font-semibold'>{jobDetails?.company?.name}</p>
              <p className='text-sm'>{jobDetails?.company?.location}</p>
            </div>
            <p className='text-sm my-4'>{jobDetails?.company?.description}</p>

            <h3 className='font-semibold mt-4'>Benefits of working at {jobDetails?.company?.name}</h3>
            <p className='text-sm my-4'>{jobDetails?.company?.benefits}</p>

            <Link
              className='text-sm hover:underline m-2 text-indigo-700 font-semibold'
              href='/'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default JobDetails