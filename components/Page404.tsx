'use client'

import { usePathname } from 'next/navigation'

import type * as types from '@/lib/types'

import styles from './styles.module.css'

export function Page404({ pageId, error }: types.PageProps) {
  const pathname = usePathname()
  const missingPageId = pageId || pathname?.replace(/^\//, '')

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>网页不存在</h1>

        {error ? (
          <p style={{ fontSize: '1.25rem' }}>{error.message}</p>
        ) : (
          missingPageId && (
            <p style={{ fontSize: '1.25rem' }}>
              &quot;{missingPageId}&quot; 不存在
            </p>
          )
        )}

        <img src='/404.png' alt='404 Not Found' className={styles.errorImage} />
      </main>
    </div>
  )
}
