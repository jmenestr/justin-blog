import * as React from 'react';
import Link from "next/link";
import styles from './nav.module.css';
import clsx from 'clsx';


export const Nav = () => {
  return (
    <nav className={clsx('flex justify-between mb-6', styles.mainNav)}>

      <span className='font-mono text-lg'><Link href='/'>@justin.menestrina</Link></span>
      <div className='flex'>
        <Link href='/about'>about</Link>
        <Link href='/posts'>blog</Link>
      </div>
    </nav>
  )
}
