// named imports
import JobApplicationForm from '@/components/jobs/JobApplicationForm'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import {
  ClipboardDocumentIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

// default imports
import Link from 'next/link'

const jobDetails = {
  jobId: 1,
  title: 'Software Engineer, C++',
  company: 'Google',
  date: '15 October 2023',
  location: 'London, UK',
  salary: '$120,000',
  experience: '3+ years',
  about: 'Software Engineers who specialise in C++ for a selection of diverse fields. Depending on your background, skills, and experience we’ll find the most suitable role within our teams for you. We value human skills and character as much as we do experience and proficiency. Do not hesitate to apply if you think Google would be a good place for you.',
  dayInYourLife: 'A typical day for a Software Engineer focused on console porting would start with an hour looking over some code with a senior engineer. You then might have the opportunity to look at optimising a piece of AI logic, discussing as necessary with a specialist in the area. In the afternoon you may spend some time working with game designers and artists to complete a feature integration.',
  rolesAndResponsibilities: [
    'Developing and maintaining the game engine and tools for a variety of platforms. This includes the core engine, editor, build system, and other supporting tools.',
  ],
  skillSet: [
    'Experience working with C++ in a professional environment. Game development experience is a plus but not required. We are looking for people with a passion for games and a desire to learn. We are open to candidates from a variety of backgrounds and experience levels. ',
  ],
  compensation: 'Competitive salary, bonus scheme, pension scheme, private healthcare, life assurance, income protection, 25 days holiday, free breakfast, free gym, free eye tests, regular social events, and more!'
}

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

const companyDetails = {
  name: 'Google',
  location: 'London, UK',
  description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
  benefits: 'Competitive salary, bonus scheme, pension scheme, private healthcare, life assurance, income protection, 25 days holiday, free breakfast, free gym, free eye tests, regular social events, and more!'
}

const JobDetails = () => {
  return (
    <div className='p-6 px-14'>

      {/* top details section */}
      <div className='border-b border-gray-300'>
        <div className='flex justify-between items-center'>
          <h3 className='text-4xl font-semibold text-gray-700'>{jobDetails.title}</h3>

          {/* job application form  */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className='apply-btn'

              >
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm company={jobDetails.company} jobId={jobDetails.jobId} jobTitle={jobDetails.title} />
          </Sheet>
        </div>

        {/* job description  */}
        <div className='my-4'>
          <div className='my-3'>
            <p className='font-semibold text-lg text-gray-700'>{jobDetails.company}</p>
            <p className='text-xs text-gray-500'>{jobDetails.date}</p>
          </div>

          <div className='flex justify-start items-center space-x-10'>
            <p className="font-normal text-gray-500">📌{jobDetails.location}</p>
            <p className="font-normal text-gray-500">💵{jobDetails.salary}</p>
            <p className="font-normal text-gray-500">🔮{jobDetails.experience}&nbsp; of experience</p>
          </div>

        </div>
      </div>

      {/* job details section */}
      <div className='grid grid-cols-10 gap-x-8'>
        <div className='col-span-7 my-4 flex flex-col'>

          <div className='text-gray-700'>
            <h2 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>Job Details</h2>
            <p className='text-justify pr-3'>{jobDetails.about}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Day in your life!</h3>
            <p className='text-justify pr-3'>{jobDetails.dayInYourLife}</p>

            <h3 className='font-bold text-2xl my-2 mt-7'>Roles and Responsibilities</h3>
            <p className='text-justify pr-3'>{jobDetails.rolesAndResponsibilities}</p>
            {/* <ul className='px-8 space-y-3'>
              {jobDetails.rolesAndResponsibilities.map((role, index) => (
                <li key={index} className='text-justify list-disc'>{role}</li>
                ))}
              </ul> */}

            <h3 className='font-bold text-2xl my-2 mt-7'>Skillset</h3>
            <p className='text-justify pr-3'>{jobDetails.skillSet}</p>
            {/* <ul className='px-8 space-y-3'>
              {jobDetails.skillSet.map((skill, index) => (
                <li key={index} className='text-justify list-disc'>{skill}</li>
              ))}
            </ul> */}

            <h3 className='font-bold text-2xl my-2 mt-7'>Compensation</h3>
            <p className='text-justify pr-3'>{jobDetails.compensation}</p>

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
              <button
                className='apply-btn w-full text-center'
              >
                Apply for this position
              </button>
            </SheetTrigger>
            <JobApplicationForm company={jobDetails.company} jobId={jobDetails.jobId} jobTitle={jobDetails.title} />
          </Sheet>
        </div>

        <div className='col-span-3 my-4 text-gray-700'>
          <h3 className='text-3xl font-extrabold hover:text-indigo-600 my-2'>
            About the company
          </h3>

          <div className='p-4 bg-indigo-50 rounded-md'>
            <div className='flex flex-col'>
              <p className='text-xl font-semibold'>{companyDetails.name}</p>
              <p className='text-sm'>{companyDetails.location}</p>
            </div>
            <p className='text-sm my-4'>{companyDetails.description}</p>

            <h3 className='font-semibold mt-4'>Benefits of working at {companyDetails.name}</h3>
            <p className='text-sm my-4'>{companyDetails.benefits}</p>

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