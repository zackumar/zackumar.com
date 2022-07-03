import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'
import * as styles from './index.module.css'
import Card from '../components/Card'

const projectQuery = graphql`
    {
        allContentfulProject(filter: { featured: { eq: true } }) {
            nodes {
                name
                previewImage {
                    file {
                        url
                    }
                }
                link
                description {
                    raw
                }
            }
        }
    }
`

const FeaturedProjects = () => {
    const {
        allContentfulProject: { nodes },
    } = useStaticQuery(projectQuery)

    console.log(nodes)

    return (
        <div className={styles.carded}>
            {nodes.map((project) => {
                return <Card key={project.name} title={project.name} link={project.link} description={JSON.parse(project.description.raw).content[0].content[0].value}></Card>
            })}
        </div>
    )
}

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <div id="r_content" className={styles.heading}>
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
                    <h3>A Bit About Me</h3>
                    <p>
                        Hi there! I'm Zack Umar. I'm a student pursuing a BS in Computer Science with a concentration of software engineering. I've been coding for the majority of my life, since I was
                        around ten. I'm a nerd, I know. I code a lot in my free time, just cause I think its fun, and that's how every programmer should be. Check out my projects below, or using the
                        link above to see my GitHub!
                    </p>
                    <p>As a student, I don't have too much under my belt, job wise, but I'm trying to get internships and experiences. You can check out my resume if you want to.</p>
                    <p>
                        <Link to="/resume" className={styles.button}>
                            Check out my resume <span className="fas fa-arrow-right" />
                        </Link>
                    </p>
                </section>
                <section id="projects">
                    <h3>Featured Projects</h3>
                    <FeaturedProjects></FeaturedProjects>
                </section>
            </div>
        </Layout>
    )
}

export default IndexPage
