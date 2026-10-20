import * as React from 'react'

import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

const currentYear = new Date().getFullYear()

export function FooterImpl() {
  const { hasMounted, isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e: any) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  return (
    <footer
      className={styles.footer}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        textAlign: 'center',
        padding: '32px 16px 24px',
        fontSize: '13px',
        opacity: 0.85
      }}
    >
      {/* 居中的版权与备案号栏 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px 12px',
          lineHeight: '1.6'
        }}
      >
        <span>© {currentYear} rozy.cn</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <a
          href='https://beian.miit.gov.cn/'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            color: 'inherit',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.textDecoration = 'underline')
          }
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          滇ICP备2024023331号-4
        </a>
      </div>

      {/* 暗黑模式切换按钮 */}
      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
            style={{
              fontSize: '13px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '6px',
              marginTop: '4px'
            }}
          >
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
