import { headers } from 'next/headers'

import Button from '/src/components/Button/Button'
import { useTranslation } from '/src/i18n/server'
import { makeClass } from '/src/utils'

import styles from './Footer.module.scss'

interface FooterProps {
  isSmall?: boolean
}

const Footer = async ({ isSmall }: FooterProps) => (
  <footer
    id="donate"
    className={makeClass(styles.footer, isSmall && styles.small)}
  >
    <a href="https://static.hhu-fscs.de/datenschutz-crabfit">Privacy Notice</a>
  </footer>
)

export default Footer
