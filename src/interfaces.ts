/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */

export interface Lang {
  __lang: string;
  __namespaces?: Record<string, object> | undefined;
}

export type BaseProps = Lang

type BaseContent = DateRecord & ContentBase

type DateRecord = {
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

type ContentBase = {
  id: number
  title: string;
  description: string
}

export type TypeArticle = BaseContent

export interface Article extends BaseContent {
  text: string | null
  category: null | Category
  type: null | TypeArticle
}

export interface Category extends BaseContent {
  slug: string;
  section: Section
  articles: Article[]
}

export interface Section extends BaseContent {
  slug: string;
  categories: Category[]
}

export interface About extends BaseContent {
  text: string | null
}

type Contact = {
  type: string
  icon: string;
  link: string
}
export interface General extends BaseContent {
  contacts: Contact[]
}
