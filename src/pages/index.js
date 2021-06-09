import { lazy } from "react";

export const pages =[
  {path: '/', component: lazy(()=> import('./Home/Home.page'))}
]