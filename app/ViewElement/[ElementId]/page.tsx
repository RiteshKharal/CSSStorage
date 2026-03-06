'use client';

import React from 'react'
import { useParams } from 'next/navigation'
import * as font from '@/app/font/fonts'
import { ButtonElements } from '@/app/ElementDetails'
import { notFound } from "next/navigation"


function PageExist() {
  const params = useParams()

  const exists = ButtonElements.some(el => el.id === Number(params.ElementId))

  if (!params.ElementId || !exists) {
    notFound()
  }

  return null
}


export default function Page() {
  const params = useParams();
  const Element = ButtonElements.at( Number(params.ElementId) )
  

  return (<>
  <div>
    <PageExist />
  </div>
    <div className="p-10 text-center">
    </div>
  </>
  )
}