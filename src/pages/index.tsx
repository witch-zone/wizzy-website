import * as React from "react";
import { type HeadFC, graphql, useStaticQuery, Link } from "gatsby";
import classnames from "classnames";

import Section from "../components/Section";

import "../styles/base.scss";
import * as classes from "./index.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";
import daniface from "../assets/images/daniface.png";
import yenface from "../assets/images/yenface.png";

interface GrimoirePage {
  path: string;
  title: string;
  description?: string;
  day?: string;
  month?: string;
  year: string;
}

interface Grimoire {
  [key: string]: GrimoirePage[];
}

const useGrimoire = (): Grimoire => {
  const {
    pages: { nodes },
  } = useStaticQuery(graphql`
    {
      pages: allSitePage {
        nodes {
          path
          pageContext
        }
      }
    }
  `);

  return nodes
    .filter((node) => node.pageContext.isMischief)
    .reduce((allNodes, currentNode) => {
      const node = {
        path: currentNode.path,
        ...currentNode.pageContext,
      };

      const year = node.year;
      const yearNodes = allNodes[year] ?? [];

      return {
        ...allNodes,
        [year]: [...yearNodes, node],
      };
    }, {});
};

interface GrimoireYearProps {
  year: string;
  pages: GrimoirePage[];
}

const GrimoireYear = ({ year, pages }: GrimoireYearProps) => (
  <Section>
    <h2>{year}</h2>

    {pages.map((page) => (
      <div>
        <Link to={page.path}>{page.title}</Link>
      </div>
    ))}
  </Section>
);

export default () => {
  const grimoire = useGrimoire();

  return (
    <main className={classes.Wizzy}>
      <section className={classes.WizzyWelcome}>
        <div className={classes.WizzyWelcome__Message}>
          <h1>
            welcome to the
            <Logo className={classes.WizzyWelcome__Logo} alt="Witch💖Zone" />
          </h1>

          <p>
            the witch zone is yen quach, dani valentine, and sometimes their
            friends. we want to make cute, silly, and inclusive things for
            everyone to enjoy!
          </p>
        </div>

        <img
          src={daniface}
          className={classnames(classes.Witch, classes.Witch__Dani)}
          alt=""
        />
        <img
          src={yenface}
          className={classnames(classes.Witch, classes.Witch__Yen)}
          alt=""
        />
      </section>

      <section className={classes.Mischief}>
        {Object.entries(grimoire).map(([year, pages]) => (
          <GrimoireYear year={year} pages={pages} />
        ))}

        <footer>
          <Section>
            with love and sparkles from dani and yen of the witch zone ♥
          </Section>
        </footer>
      </section>
    </main>
  );
};

export const Head: HeadFC = () => <title>welcome to the Witch💖Zone!</title>;
