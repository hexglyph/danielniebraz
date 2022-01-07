import { FunctionComponent } from "react";
export interface Service {
  Icon: any
  title: string
  about: string
}

export interface Skill {
  Icon: any
  name: string
  level: string
}

export interface Project {
  id: number
  project: string
  name: string
  description: string
  image_path: string
  deployed_url: string
  github_url: string
  key_techs: string[]
}

export interface Home {
  theme: string
}

export type Category = "react" | "node" | "express" | "django" | "mongo";
