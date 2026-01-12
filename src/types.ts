export type DocumentedElement = {
  title: string;
  description?: string;
  example?: {
    title: string;
    description?: string;
    preview?: string;
    code?: string;
  }[];
};

export type DocumentedComponent = {
  title: string;
  description?: string;
  example?: {
    title: string;
    description?: string;
    preview?: string;
    code?: string;
  }[];
};
