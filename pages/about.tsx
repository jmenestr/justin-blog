import * as React from 'react';
import { Layout } from '../components/common/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <article className='prose dark:prose-dark mt-12'>
        <h1 className='mb-3 dark:prose-dark font-display'>
          Hi I'm Justin!
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-300 m-0'>
          I'm a software engineer based in Denver, CO.
        </p>
        <p>
          <b>Currently working on web at <a href="https://www.affirm.com/">Affirm</a>.</b>
        </p>
        <section>
          <h2>About me</h2>
          <p>
            After graduating from Vanderbilt University in 2012 with a BS in Physics, I decided to enroll in as a PH.D student
            at UC Irvine to peruse my grand visions of of professorship. Two years in, after realizing that I enjoyed coding
            simulations and building out my labs website more than research, I left the program and enrolled at <a href="https://www.appacademy.io/">App Academy</a>.
            After graduating, I moved to Colorado where I've been a worked at various medium sized companies and startups.
          </p>
          <p>
            Over the years, I've become passionate about developer experience. Happy developers oftehn lead to successful companies. At the moment, I'm currently focused on design systems.
          </p>
        </section>
        <section>
          <h2>Getting in Touch</h2>
          <p>
            If you want to get in touch, I'm most responsove via <a href="mailto:jmenestr@gmailcom">email</a>.
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default About;
