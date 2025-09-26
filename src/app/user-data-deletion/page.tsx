"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const metadata = {
  title: 'BestAround — User Data Deletion',
  description: 'How to delete your BestAround account and personal data.',
}

export default function UserDataDeletionPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/legal/data-deletion')
  }, [router])

  return null
}


