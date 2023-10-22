type Job = {
    id: number;
    company: string;
    companyDescription: string;
    companyLogo: string;
    jobTitle: string;
    salary: string;
    location: string;
    skills: string[];
};

type JobApplication = {
    name: string;
    email: string;
    location: string;
    summary: string;
    resume: FileList;
};
