import React from "react";
import { Link } from "react-router-dom";
import frontImage from "../../images/holidaze8.jpg";
import ulriken from "../../images/holidaze4.jpg";
import bergenDark from "../../images/Bergen-dark2.svg";

export default function HomePage() {
  return (
    <div>
      <section className="section section__1">
        <div className="container">
          <img
            className="container__image"
            src={frontImage}
            alt="Bergen by"
          ></img>
        </div>
      </section>
      <section className="section section__2">
        <div className="container">
          <h2>Take in the spectacular view from Ulriken</h2>
          <div className="section__flex">
            <div className="section__flex--1">
              <img className="default__image" src={ulriken} alt="Ulriken"></img>
            </div>
            <div className="section__flex--2">
              <p>
                Sapien et ligula ullamcorper malesuada proin libero nunc
                consequat interdum. Sit amet nisl purus in mollis nunc. Ac
                turpis egestas maecenas pharetra convallis. Velit euismod in
                pellentesque massa placerat. Eget nulla facilisi etiam dignissim
                diam quis. Nullam eget felis eget nunc. Natoque penatibus et
                magnis dis. Volutpat diam ut venenatis tellus in metus vulputate
                eu scelerisque. Elementum tempus egestas sed sed risus pretium
                quam vulputate dignissim. Praesent semper feugiat nibh sed.
                Mauris nunc congue nisi vitae suscipit tellus mauris a diam.
                Ullamcorper malesuada proin libero nunc consequat. Bibendum arcu
                vitae elementum curabitur vitae nunc.
              </p>
              <p>
                Libero id faucibus nisl tincidunt eget nullam non nisi est. Nunc
                id cursus metus aliquam. Congue nisi vitae suscipit tellus. Nunc
                mattis enim ut tellus elementum sagittis vitae et leo. Urna
                neque viverra justo nec ultrices dui. Viverra accumsan in nisl
                nisi scelerisque eu ultrices. Volutpat maecenas volutpat blandit
                aliquam etiam erat velit. Leo duis ut diam quam nulla porttitor
                massa id neque. Pellentesque eu tincidunt tortor aliquam.
                Natoque penatibus et magnis dis. Nec nam aliquam sem et.
                Faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt. Nunc aliquet bibendum enim facilisis gravida neque.
                Tristique nulla aliquet enim tortor at auctor urna nunc id.
                Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis
                gravida. Pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Ut diam quam nulla porttitor massa id neque aliquam
                vestibulum. Adipiscing tristique risus nec feugiat in fermentum.
                Velit laoreet id donec ultrices tincidunt arcu non sodales
                neque. Diam maecenas sed enim ut.
              </p>
              <Link to="/activities">Find more things to do in Bergen</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section__3">
        <div className="container">
          <h2>When it rains...</h2>
          <div className="section__flex">
            <div className="section__flex--1">
              <p className="bold">
                Sit amet aliquam id diam maecenas ultricies. Elit at imperdiet
                dui accumsan sit amet nulla facilisi morbi. Sollicitudin aliquam
                ultrices sagittis orci a scelerisque. Amet justo donec enim diam
                vulputate ut pharetra sit. Laoreet suspendisse interdum
                consectetur libero. Ac turpis egestas maecenas pharetra
                convallis posuere morbi leo. Molestie a iaculis at erat
                pellentesque adipiscing. Nisi porta lorem mollis aliquam ut.{" "}
              </p>
              <p>
                Amet luctus venenatis lectus magna fringilla. Tincidunt augue
                interdum velit euismod in pellentesque massa. Fames ac turpis
                egestas sed tempus urna et. Fermentum dui faucibus in ornare.
                Blandit libero volutpat sed cras. Risus at ultrices mi tempus
                imperdiet. Augue eget arcu dictum varius duis at consectetur
                lorem. Fames ac turpis egestas integer eget aliquet. Interdum
                varius sit amet mattis vulputate enim nulla aliquet. Massa id
                neque aliquam vestibulum morbi blandit cursus risus at.
                Elementum curabitur vitae nunc sed velit dignissim sodales.
              </p>
            </div>
            <div className="section__flex--2">
              <img
                className="default__illustration"
                src={bergenDark}
                alt="Illustration of Bryggen"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="section section__4">
        <div clasNames="container"></div>
      </section>
    </div>
  );
}
