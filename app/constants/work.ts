import { Job } from '~/components/JobTimeline';

export const jobs: Job[] = [
  {
    position: 'Software Engineer',
    company: 'USAA',
    location: 'San Antonio, TX',
    startDate: new Date('2024-01-16'),
    isCurrent: true,
    description:
      'Supported APIs in Java, Spring Boot, and Spring Batch to handle a high volume of daily transfers within a fast paced and high-stakes banking environment while collaborated closely with front-end developers to optimize the member experience. Migrated solutions to leverage Kafka, transitioning from synchronous to asynchronous workflows to accelerate processing speed for the high volume of transfers',
    positionType: 'Full-Time',
  },
  {
    position: 'Software Engineer Intern',
    company: 'USAA',
    location: 'San Antonio, TX',
    startDate: new Date('2023-05-22'),
    endDate: new Date('2023-07-14'),
    description:
      'Developed API integration with a third-party wire screening vendor, enhancing transaction screening for 150,000+ monthly wire transactions. Designed and tested API endpoints with Java Spring Boot, reducing fraudulent activities. Utilized SQL Oracle DBs and NoSQL Cassandra DBs for data management.',
    positionType: 'Internship',
  },
  {
    position: 'Software Engineer Intern',
    company: 'H-E-B',
    location: 'San Antonio, TX',
    startDate: new Date('2022-05-25'),
    endDate: new Date('2022-08-05'),
    description:
      'Maintained H-E-B’s in-house server-side rendering service on NodeJS and React, and supported feature teams on heb.com with 15M+ monthly views. ',
    positionType: 'Internship',
  },
];
