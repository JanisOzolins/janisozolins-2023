import Image from 'next/image'
import styles from './page.module.scss'
import Hero from '@/app/components/Hero/hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
    </main>
  )
}
