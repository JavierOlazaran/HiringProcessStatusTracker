export interface Process {
  companyName: string;
  poc: string;
  job: Job;
  offer: Offer;
  status: Status[];
  rating: number;
}

export interface Status {
  date: string;
  description: string;
  statusType: string;
}

export interface Offer {
  rate: Rate;
  benefits: string;
}

export interface Rate {
  amount: number;
  currency: string;
}

export interface Job {
  jobTitle: string;
  jobDescription: string;
}
