export interface Job {
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  positionType: string;
  isCurrent?: boolean;
}

const monthNames = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export default function JobTimeline({ jobs }: { jobs: Job[] }) {
  return (
    <div className="relative w-full">
      <div className="sm:grid sm:grid-cols-3 gap-4 mb-16 absolute h-full w-full">
        <div className="col-start-2 h-full w-0.5 bg-gray-300 ml-[1.075rem]"></div>
      </div>
      {jobs
        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
        .map((job) => (
          <Job
            key={`${job.company}${job.position}${job.description}`}
            job={job}
          />
        ))}
    </div>
  );
}

export function Job({ job }: { job: Job }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mb-16 w-full">
      <p className="pl-12 sm:pl-0 text-gray-500 dark:text-gray-200">
        {`${
          monthNames[job.startDate.getMonth()]
        } ${job.startDate.getFullYear()}`}{' '}
        -{' '}
        {job.isCurrent
          ? 'CURRENT'
          : `${
              monthNames[job.endDate?.getMonth() ?? 0]
            } ${job.endDate?.getFullYear()}`}
      </p>
      <div className="pl-12 col-span-2 relative">
        <span className="rounded-full border-2 bg-white dark:bg-zinc-900 border-gray-300 w-5 h-5 absolute mt-1 -ml-10"></span>
        <h3 className="text-rainbow font-bold text-xl">
          {job.position} @ {job.company.replace(/-/g, '\u2011')}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-200">
          {job.location} | {job.positionType}
        </p>
        <p className="dark:text-white mt-4">{job.description}</p>
      </div>
    </div>
  );
}
