type Job = {
    id: number;
    title: string;
    domain: string;
    location: string;
    salaryCompensation: string;
    company: {
        name: string;
        id: number;
        description: string;
    };
};

type JobApplication = {
    name: string;
    email: string;
    location: string;
    summary: string;
    resume: FileList;
};

type Company = {
    name: string;
    id: number;
    description?: string;
    benefits?: string;
    location?: string;
};

type JobDetails = {
    id: number;
    title: string;
    domain: string;
    location: string;
    salaryCompensation?: string;
    yearsOfExperience?: string;
    description?: string;
    dayInLife?: string;
    compensation?: string;
    rolesResponsibilities?: string;
    skillset?: string;
    companyId?: number;
    company?: Company;
} | null;
