
export interface ImageWithSource {
  src: string;
  sourceName?: string;
  sourceUrl?: string;
}

export interface ReactorSection {
  title: string;
  content: string | string[];
}

export interface Reactor {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  imageUrl: string;
  gallery: ImageWithSource[];
  sections: ReactorSection[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}