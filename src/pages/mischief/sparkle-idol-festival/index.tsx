import * as React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import WizzyLayout from "../../../components/WizzyLayout";
import Section from "../../../components/Section";

import "../../../styles/base.scss";
import * as classes from "../Mischief.module.scss";
import * as sifClasses from "./SparkleIdolFestival.module.scss";

export default () => (
  <WizzyLayout>
    <article className={classes.Mischief}>
      <header className={classes.Mischief__Header}>
        <h2 className={classes.Mischief__Title}>
          <StaticImage
            src="./logo.png"
            alt="Sparkle Idol Festival"
            className={sifClasses.SparkleIdolFestival__Logo}
            loading="eager"
            placeholder="none"
          />
        </h2>

        <div className={classes.Mischief__Meta}>
          <div className={classes.Date}>
            <div className={classes.Date__Prefix}>a mischief conjured in</div>
            <div className={classes.Date__Chip}>Valentine's Day, 2017</div>
          </div>

          <a href="https://sif.witch.zone">https://sif.witch.zone</a>
        </div>
      </header>

      <Section>
        <div className={classes.Mischief__Body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            maximus, ex ut facilisis pellentesque, dui orci finibus nisl, eu
            molestie tortor nunc non diam. Donec blandit lorem sodales porttitor
            auctor. Maecenas congue euismod tellus. Aenean interdum ultrices
            molestie. Vivamus at pharetra neque, a blandit urna. Duis cursus
            magna ut sapien facilisis porta. Donec id venenatis ex. Pellentesque
            lobortis velit ac justo viverra bibendum. Duis orci est, tristique
            vitae mattis ac, rhoncus sed sapien. Ut diam quam, accumsan sit amet
            dignissim sit amet, molestie non lectus. Donec lobortis, ex faucibus
            pretium eleifend, libero tellus elementum felis, quis pretium ligula
            dui vel erat. Praesent at libero dui.
          </p>

          <figure>
            <StaticImage
              src="./dani and yen.jpg"
              placeholder="blurred"
              alt=""
            />
            <figcaption>a nice picture of dani and yen</figcaption>
          </figure>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            maximus, ex ut facilisis pellentesque, dui orci finibus nisl, eu
            molestie tortor nunc non diam. Donec blandit lorem sodales porttitor
            auctor. Maecenas congue euismod tellus. Aenean interdum ultrices
            molestie. Vivamus at pharetra neque, a blandit urna. Duis cursus
            magna ut sapien facilisis porta. Donec id venenatis ex. Pellentesque
            lobortis velit ac justo viverra bibendum. Duis orci est, tristique
            vitae mattis ac, rhoncus sed sapien. Ut diam quam, accumsan sit amet
            dignissim sit amet, molestie non lectus. Donec lobortis, ex faucibus
            pretium eleifend, libero tellus elementum felis, quis pretium ligula
            dui vel erat. Praesent at libero dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            maximus, ex ut facilisis pellentesque, dui orci finibus nisl, eu
            molestie tortor nunc non diam. Donec blandit lorem sodales porttitor
            auctor. Maecenas congue euismod tellus. Aenean interdum ultrices
            molestie. Vivamus at pharetra neque, a blandit urna. Duis cursus
            magna ut sapien facilisis porta. Donec id venenatis ex. Pellentesque
            lobortis velit ac justo viverra bibendum. Duis orci est, tristique
            vitae mattis ac, rhoncus sed sapien. Ut diam quam, accumsan sit amet
            dignissim sit amet, molestie non lectus. Donec lobortis, ex faucibus
            pretium eleifend, libero tellus elementum felis, quis pretium ligula
            dui vel erat. Praesent at libero dui.
          </p>

          <aside>
            <p>
              Cras sit amet ante id diam interdum cursus. Nulla suscipit at mi
              vitae feugiat. Vivamus at tellus ut dui dictum eleifend at vel
              lorem. Cras et sapien vel elit convallis maximus. Pellentesque
              magna leo, tempor vitae massa eget, condimentum venenatis nunc.
              Vivamus congue sapien eros, a aliquet nunc consequat ac. Etiam
              pretium lorem ut molestie pellentesque. Aenean mollis, nisi vel
              volutpat finibus, arcu magna pellentesque tellus, vel condimentum
              lorem ipsum a enim. Donec non quam id massa porttitor rhoncus et
              at neque. Integer imperdiet dolor purus, suscipit vehicula nisl
              accumsan eget.
            </p>
          </aside>

          <figure>
            <StaticImage src="./ticket.png" placeholder="blurred" alt="" />
            <figcaption>you'll need one of these to scout with</figcaption>
          </figure>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            maximus, ex ut facilisis pellentesque, dui orci finibus nisl, eu
            molestie tortor nunc non diam. Donec blandit lorem sodales porttitor
            auctor. Maecenas congue euismod tellus. Aenean interdum ultrices
            molestie. Vivamus at pharetra neque, a blandit urna. Duis cursus
            magna ut sapien facilisis porta. Donec id venenatis ex. Pellentesque
            lobortis velit ac justo viverra bibendum. Duis orci est, tristique
            vitae mattis ac, rhoncus sed sapien. Ut diam quam, accumsan sit amet
            dignissim sit amet, molestie non lectus. Donec lobortis, ex faucibus
            pretium eleifend, libero tellus elementum felis, quis pretium ligula
            dui vel erat. Praesent at libero dui.
          </p>
        </div>
      </Section>
    </article>
  </WizzyLayout>
);

export const Head: HeadFC = () => (
  <title>the Sparkle Idol Festival ~ a mischief from the Witch💖Zone</title>
);
