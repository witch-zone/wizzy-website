import * as React from "react";
import type { HeadFC } from "gatsby";
import classnames from "classnames";

import Section from "../components/Section";

import "../styles/base.scss";
import * as classes from "./index.module.scss";

import Logo from "../assets/images/wizzy-logo.svg";
import daniface from "../assets/images/daniface.png";
import yenface from "../assets/images/yenface.png";

export default () => (
  <main>
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
      <Section>
        <h2>2023</h2>
        Lunar New Year - Cyber Cat and cybeR Rabbit
      </Section>
      <Section>
        <h2>2022</h2>
        The Nice List Again Again Again
      </Section>
      <Section>
        <h2>2020</h2>
        The Witch Zoom
        <br />
        Halloween
        <br />
        Mikerail
      </Section>
      <Section>
        <h2>2019</h2>
        The Nice List Again Again
        <br />
        Valentine's Day
      </Section>
      <Section>
        <h2>2019</h2>
        The Nice List Again Again
        <br />
        Valentine's Day
      </Section>
      <Section>
        <h2>2018</h2>
        The LookMaker
        <br />
        Mischief Summer
      </Section>
      <Section>
        <h2>2017</h2>
        The Nice List Again
        <br />
        <a href="/mischief/sparkle-idol-festival">Sparkle Idol Festival</a>
      </Section>
      <Section>
        <h2>2016</h2>
        The Nice List
        <br />
        Forming the witch zone yaaaay
      </Section>
    </section>
  </main>
);

export const Head: HeadFC = () => <title>welcome to the Witch💖Zone!</title>;
