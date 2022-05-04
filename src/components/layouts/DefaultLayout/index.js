import useAuthUser from 'global/AuthUser'
import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

import NavBar from '../NavBar'
import {PageWrapper, PageLoading, PageContent} from './components'

export default function DefaultLayout({loading, children}) {
  const {user} = useAuthUser()
  return (
    <PageWrapper>
      {user && <NavBar />}
      {loading ? (
        <PageLoading>
          <DotLoader color={'#6400f7'} loading={loading} size={50} />
        </PageLoading>
      ) : (
        <PageContent>{children}</PageContent>
      )}
    </PageWrapper>
  )
}
