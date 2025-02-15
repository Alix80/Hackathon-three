import { groq } from "next-sanity";

export const allProducts= groq`*[_type=="products"]`;
export const four=groq`*[_type=="products"][6..9]`;