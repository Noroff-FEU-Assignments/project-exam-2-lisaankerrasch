import React from "react";
import activityImage from "../../images/holidaze7.jpg";
import Heading from "../layout/Heading";
import gondola from "../../images/holidaze12.jpg";
import bryggen from "../../images/holidaze13.jpg";
import seafood from "../../images/holidaze3.jpg";

export default function ActivityPage() {
  return (
    <div>
      <section className="section activity__section__1">
        <div className="overlay__frontpage">
          <div className="overlay__frontpage--container">
            <Heading content="Things to do"></Heading>
          </div>
        </div>
        <div className="container">
          <img
            className="container__image"
            src={activityImage}
            alt="Fjords"
          ></img>
        </div>
      </section>
      <section className="section activity__section__2">
        <div className="container">
          <h2>Get a different view</h2>
          <div className="activity__section__flex">
            <div className="activity__section__flex--1">
              <img className="default__image" src={gondola} alt="Gondola"></img>
            </div>
            <div className="activity__section__flex--2">
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
            </div>
          </div>
          <h2>The iconic "Bryggen i Bergen"</h2>
          <div className="activity__section__flex">
            <div className="activity__section__flex--1">
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
            </div>
            <div className="activity__section__flex--2">
              <img
                className="default__image"
                src={bryggen}
                alt="Bryggen i Bergen"
              ></img>
            </div>
          </div>
          <h2>Something fishy?</h2>
          <div className="activity__section__flex">
            <div className="activity__section__flex--1">
              <img
                className="default__image"
                src={seafood}
                alt="Seafood counter"
              ></img>
            </div>
            <div className="activity__section__flex--2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
