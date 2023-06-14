import { PortableTextBlock } from "sanity";

export type Page = {
  image: any;
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
