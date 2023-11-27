// named imports
import {
  ClipboardDocumentIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

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

export default function HiringProcessList() {
  return (
    <div>
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
  )
}
