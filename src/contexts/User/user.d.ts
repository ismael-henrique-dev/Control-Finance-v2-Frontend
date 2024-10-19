export interface UserLoginFormData {
  Email: string
  Senha: string
}

export interface UserRegisterFormData extends UserLoginFormData {
  UsernName: string
}

export interface User {
  Email: string
  Id: string
  Senha: string
  UsernName: string
  ProfileUrl: string
}

export interface UserProviderType {
  userRegister: (data: UserRegisterFormData) => Promise<void>
  UserVisitMode: () => Promise<void>
  userLogin: (data: UserLoginFormData) => Promise<void> | Promise<"Email ou senha incorretas." | undefined>
  userLogout: () => void
  userResetAccount: () => void
  userDeleteAccount: () => void
  updateUserProfile: (data: ProfileFormData) => void
  setUserData: (data: User | null) => void
  userData: User | null
  accountState: AccountState | null
  relativeCategoryStats: RelativeCategoryStatsProps
  isLoadingStatic: boolean
  isLoadingDeleteAccount: boolean
  isLoadingResetAccount: boolean
  isLoadingDataUser: boolean
}

export type Status = "Danger" | "Ok" | "Good"

export interface AccountState {
  AndamentoDasMetas: Status
  Economista: Status
  GastosEssenciais: Status
  Investimentos: Status
}

export interface RelativeCategoryStatsProps {
  DEP: number
  SAL: number
  PercentageOfReturnByCategorie: Record<string, number>
  PercentageOfReturnByDep: Record<string, number>
  PercentageOfReturnBySal: Record<string, number>
}
