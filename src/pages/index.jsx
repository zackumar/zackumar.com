import * as React from "react";

import Layout from "../components/Layout";
import * as styles from "./index.module.css";
import Card from "../components/Card";
import StyledLink from "../components/StyledLink";
import { color } from "../theme/utils";

// const projectQuery = graphql`
//   {
//     allContentfulProject(filter: { featured: { eq: true } }) {
//       nodes {
//         name
//         previewImage {
//           file {
//             url
//           }
//         }
//         link
//         description {
//           raw
//         }
//       }
//     }
//   }
// `;

// const FeaturedProjects = () => {
//   // const {
//   //     allContentfulProject: { nodes },
//   // } = useStaticQuery(projectQuery)

//   console.log(nodes);

//   return (
//     <div className={styles.carded}>
//       {nodes.map((project) => {
//         return (
//           <Card
//             key={project.name}
//             title={project.name}
//             link={project.link}
//             description={
//               JSON.parse(project.description.raw).content[0].content[0].value
//             }
//           ></Card>
//         );
//       })}
//     </div>
//   );
// };

// markup
const IndexPage = () => {
  const projects = [
    {
      title: "@newspaper_snippets",
      link: "https://github.com/zackumar/newspaper-snippets-js",
      description:
        "A bot that posts snippets of newspapers from 100 years ago! Visit it on Instagram at @newspaper_snippets or Twitter at @news_snips!",
    },
  ];

  return (
    <Layout pageTitle="Home">
      <div id="r_content" className={styles.heading}>
        <h1>Hi, I'm Zack.</h1>
        <h2>I code things sometimes</h2>
        <div className={styles.socials}>
          <a
            aria-label="github"
            href="https://www.github.com/zackumar"
            className={`${styles.icon} fab fa-github`}
          >
            <span>Github</span>
          </a>
          <a
            aria-label="email"
            href="mailto:zack@zackumar.com?subject=Contact Me!"
            className={`${styles.icon} fas fa-envelope`}
          >
            <span>Email Us</span>
          </a>
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/in/zackumar"
            className={`${styles.icon} fab fa-linkedin-in`}
          >
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <section id="about">
          <h3>A Bit About Me</h3>
          <p>
            Hi there! I'm Zack Umar. I'm a student pursuing a BS in Computer
            Science. Check out my projects below or look at my{" "}
            <StyledLink href="https://www.github.com/zackumar">
              GitHub
            </StyledLink>
            !
          </p>
          <p>
            Current Software Engineering Intern at{" "}
            <StyledLink
              href="https://www.heb.com"
              colors={{
                leftColor: "#dc291e",
                rightColor: "#ff0000",
                textColor: color("white"),
              }}
              extended
            >
              H-E-B
            </StyledLink>
            !
          </p>
          <p>
            <StyledLink to="/resume">
              Check out my resume <span className="fas fa-arrow-right" />
            </StyledLink>
          </p>
        </section>
        <section id="projects">
          <h3>Featured Projects</h3>
          <div className={styles.carded}>
            {projects.map((project) => {
              return (
                <Card
                  key={project.title}
                  title={project.title}
                  link={project.link}
                  description={project.description}
                ></Card>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
