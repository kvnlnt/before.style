export type DocumentedElement = {
  title: string;
  description?: string;
  variant?: {
    title: string;
    description?: string;
    example?: string;
    code?: string;
  }[];
};

export type DocumentedComponent = {
  title: string;
  description?: string;
  variant?: {
    title: string;
    description?: string;
    example?: string;
    code?: string;
  }[];
};
