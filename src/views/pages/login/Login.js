import React, { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useAuthContext } from '@asgardeo/auth-react'
import image from '../../../assets/images/background.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { signIn, state } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state?.isAuthenticated) {
      return
    } else {
      navigate('../../layout/DefaultLayout')
    }
  }, [state?.isAuthenticated])

  return (
    <div
      className="bg-light min-vh-100 flex-row align-items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3">
        <CButton color="light" className="me-md-2" shape="rounded-pill" onClick={() => signIn()}>
          Login
        </CButton>
      </div>
      <div className="container text-center">
        <div className="row align-items-end">
          <div className="col-4">
            <p className="fs-4">
              <cite title="Source Title"> It’s the little things that count. </cite>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
