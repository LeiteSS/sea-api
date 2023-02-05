declare namespace Express {
  export interface Request {
    user: {
      id: string;
      firstName: string;
      lastName: string;
    },
    goal: {
      id: string;
      title: string;
      description: string;
    },
    activity: {
      id: string;
      title: string;
      description: string;
    }
  }
}