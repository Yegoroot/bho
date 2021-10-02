/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */

export interface Lang {
  __lang: string;
  __namespaces?: Record<string, object> | undefined;
}

export type BaseProps = Lang

type DateRecord = {
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface TypeArticle extends DateRecord {
  id: number
  title: string;
  description: string
}

export interface Article extends DateRecord {
  id: number;
  title: string;
  description: string;
  category: null | Category
  type: null | TypeArticle
}

export interface Category extends DateRecord {
  id: number;
  title: string;
  description: string;
  section: null | Section
  articles: Article[]
}

export interface Section extends DateRecord {
  id: number;
  title: string;
  description: string;
  categories: Category[]
}
