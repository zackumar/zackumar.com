import * as React from 'react'
import styled from 'styled-components'

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
            {/* <section>
                <h3>About me</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur repellendus reiciendis ad? Eligendi repudiandae nisi ducimus atque sit, error inventore necessitatibus
                    odit? Minima eum quam aperiam pariatur aliquam itaque nostrum iusto quasi perspiciatis excepturi earum harum maxime consequuntur quibusdam, quae, aut voluptatem! Libero adipisci
                    pariatur numquam soluta quis! Explicabo, fuga cupiditate atque ducimus id officiis nostrum illum omnis est unde perferendis minima adipisci maxime itaque eveniet esse, culpa
                    officia, labore expedita non suscipit exercitationem ipsam delectus nam. Nisi inventore culpa asperiores a obcaecati, labore dolores ipsa atque sed distinctio eveniet, nam
                    doloremque nemo, modi omnis quo cumque rerum est et quos temporibus consequuntur qui praesentium? Hic nobis facere perferendis cum libero sunt eaque ipsum quos repudiandae vero,
                    harum culpa maiores commodi. Architecto praesentium quod dolores est quis, magnam maxime? Deserunt quisquam incidunt repellat adipisci harum perspiciatis itaque. Vero amet sequi
                    accusamus in placeat, ab vel molestiae doloribus quidem fugiat id quisquam inventore pariatur eius quis sunt quibusdam. Rem accusantium quas voluptate sit! Soluta pariatur, eveniet
                    ratione ipsam dignissimos repellat libero consequatur commodi consectetur iure repellendus facilis ipsa doloribus laborum optio sint sunt voluptatem unde quibusdam tenetur
                    reiciendis praesentium porro. Labore, rerum. Nesciunt ratione numquam aperiam. Tempore hic at repellat voluptates, expedita aliquid nemo, soluta repudiandae tenetur, ab recusandae!
                    Dolor ullam perferendis asperiores non rem recusandae aspernatur animi nostrum quaerat, vero facilis explicabo soluta, nam magnam, facere veritatis quo ipsum? Dolorum distinctio
                    debitis officia, expedita suscipit repudiandae officiis exercitationem veritatis pariatur nobis aut laudantium accusamus illum quam temporibus quis eligendi recusandae harum rem
                    fuga reprehenderit, vitae aperiam ut! Nemo repellendus cum et. Molestias molestiae hic eius ab fugit. Aliquam dolores blanditiis ut eum hic culpa deserunt laboriosam asperiores
                    voluptatibus quo provident, maiores quam repudiandae magnam, esse non. Incidunt, vel fugit. Itaque reprehenderit nulla minus quae natus? Iusto, magni. Magni, maiores?
                </p>
            </section> */}
        </Layout>
    )
}

export default IndexPage
