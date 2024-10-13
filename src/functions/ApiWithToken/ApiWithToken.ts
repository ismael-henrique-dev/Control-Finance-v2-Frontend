export const apiWithToken = (token: string | null) => ({
  headers: { Authorization: `Bearer ${token}` },
})
