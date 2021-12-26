import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './index.module.css'

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <div className={styles.heading}>
                <h1>Hi, I'm Zack.</h1>
                <h2>I code things sometimes</h2>
                <div className={styles.socials}>
                    <a aria-label="github" href="https://www.github.com/zackumar" className={`${styles.icon} fab fa-github`}>
                        <span>Github</span>
                    </a>
                    <a aria-label="email" href="mailto:zack@zackumar.com?subject=Contact Me!" className={`${styles.icon} fas fa-envelope`}>
                        <span>Email Us</span>
                    </a>
                    <a aria-label="linkedin" href="https://www.linkedin.com/in/zackumar" className={`${styles.icon} fab fa-linkedin-in`}>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <div className={styles.content}>
                <section id="about">
                    <h3>About me</h3>
                    <p>
                        Hi there! I'm Zack Umar. I'm a student pursuing a BS in Computer Science with a concentration of software engineering. I've been coding for the majority of my life, since I was
                        around ten. I'm a nerd, I know. I code a lot in my free time, just cause I think its fun, and that's how every programmer should be. Check out my projects below, or using the
                        link about to see my GitHub!
                    </p>
                    <p>As a student, I don't have too much under my belt, job wise, but I'm trying to get internships and experiences. You can check out my resume if you want to.</p>
                    <p>
                        <Link to="/resume" className={styles.button}>
                            Check out my resume <span className="fas fa-arrow-right" />
                        </Link>
                    </p>
                </section>
                <section id="projects">
                    <h3>Projects</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, natus dolorum aliquid quos adipisci earum. Dolore soluta harum blanditiis voluptates, odit quae nisi enim
                        modi, dolores repellendus qui! Voluptate quae natus quaerat quam facilis! Eaque, similique. At itaque dolore, nesciunt, placeat quas, odit voluptate rem ratione a recusandae
                        nisi unde enim sunt non aut deserunt ducimus natus quo suscipit et illum! Cum sapiente obcaecati expedita quibusdam fugiat odio excepturi eum doloribus ad rem corporis
                        voluptatem ducimus reiciendis maiores recusandae atque labore deserunt maxime eligendi explicabo necessitatibus illum, consequatur qui. Odit consequuntur non dolor autem
                        aliquam esse repudiandae velit similique expedita delectus aut, at quasi! Voluptatem aliquid iste quaerat sed officia nulla minus obcaecati enim optio ullam sint iusto
                        perferendis quas ducimus tenetur minima culpa, nobis nam harum maiores odit pariatur ex. Aut ut soluta quaerat pariatur numquam, voluptatum labore nisi delectus autem
                        perspiciatis incidunt laudantium voluptatem voluptas facilis! Labore eius vel adipisci. Id repudiandae vel dignissimos rerum aperiam? Possimus reiciendis perspiciatis, in
                        laboriosam dolore cum dolores fuga a aut dignissimos eos maiores culpa facere vitae deleniti facilis explicabo tenetur totam rem quibusdam ducimus aliquid! Iure, cum voluptas,
                        a error dolorem, corporis maiores reprehenderit sint in commodi enim amet quaerat earum.
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default IndexPage
