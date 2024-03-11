"use client"
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-5ZPSKC2W'
  }

const GTMProvider = () => {
    useEffect(() => {
        TagManager.initialize(tagManagerArgs)
    }, [])

  return (
    <></>
  )
}

export default GTMProvider