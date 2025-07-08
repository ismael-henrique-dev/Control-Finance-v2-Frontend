import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../contexts'
import { getInitials } from '../../../utils/GetInitials'
import { AvatarContainer } from './styles'

export type AvatarProps = {
  variant?: 'big' | 'small'
}

export function Avatar({ variant = 'small' }: AvatarProps) {
  const [image, setImage] = useState<string | null>(null)
  const { userData } = useContext(UserContext)

  useEffect(() => {
    if (userData && userData.ProfileUrl) {
      setImage(userData.ProfileUrl)
    }
  }, [userData])

  const initials = getInitials(userData?.UsernName || 'Ismael Henrique')

  return (
    <AvatarContainer variant={variant}>
      {userData?.ProfileUrl ? <img src={image!} /> : <div>{initials}</div>}
    </AvatarContainer>
  )
}
