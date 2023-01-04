import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeDetail from '../screens/EmployeeDetail'
import Profile from '../screens/Profile'

export default function AppRoute() {
    return (
        <Routes>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/employeeDetail" element={<EmployeeDetail/>}></Route>
        </Routes>
    )
}
