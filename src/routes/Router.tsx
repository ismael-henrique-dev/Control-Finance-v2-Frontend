import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import {
  Accounts,
  Goals,
  Auth,
  Profile,
  SingUp,
  Home,
  Transactions,
  FinancialIncome,
  Login,
} from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/singUp' element={<SingUp />} />
      <Route path='/auth' element={<Auth />} />

      <Route path='' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/transacoes/:id?' element={<Transactions />} />
        <Route path='/contas/:id?' element={<Accounts />} />
        <Route path='/metas/:id?' element={<Goals />} />
        <Route path='/rendimento' element={<FinancialIncome />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}
