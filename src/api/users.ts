import { User } from '@/types/users'

export async function getUsers(onFinally?: () => void): Promise<User> {
  try {
    const response = await fetch('https://api.github.com/users/venturions', {
      cache: 'no-store',
    })
    const data: User = await response.json()
    return data
  } catch (error) {
    throw error
  } finally {
    if (onFinally) {
      onFinally()
    }
  }
}
