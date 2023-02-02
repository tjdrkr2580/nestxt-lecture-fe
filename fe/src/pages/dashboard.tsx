import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/solid'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const logout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }
  return (
    <Layout title="Task Board">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={logout}
      />
    </Layout>
  )
}

export default Dashboard
