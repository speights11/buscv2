import React, { useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";
import shonaCurry from "assets/images/testimonials/Shona Curry.jpeg";
import davidMcCall from "assets/images/testimonials/David McCall.png";
import darrellBrown from "assets/images/testimonials/Darrell Brown.png";
import gladysAndDean from "assets/images/testimonials/Gladys and Dean.jpg";
import kelvin from "assets/images/testimonials/Kelvin Brown.png";
import jazzie from "assets/images/testimonials/Jazzie.jpg";
import delOwens from "assets/images/testimonials/Del Sayles Owen.png";
import franGray from "assets/images/testimonials/Fran Gray.png";
import lula from "assets/images/testimonials/Dr Lula Ballton.jpg";
import brian from "assets/images/testimonials/Brian.jpeg";
import "../../App.scss";

const Testimonials = () => {
  useEffect(() => {
    try {
      sessionStorage.setItem("currentPage", "2");

      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitTestimonials", {
        event_category: "Pages",
        event_label: "Visit Testimonials Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="testimonial-header">The Wall</div>
      <div className="testimonials-content">
        <TestimonialsCard
          title="Darrell Brown"
          subTitle="Verified Purchaser"
          description="As Regina's sibling, I've had the privilege of watching her artistic journey unfold from the very beginning. Her art is nothing short of extraordinary, and I am constantly in awe of her talent and creativity. Regina's work encompasses a stunning variety of styles, from abstract pieces filled with intricate shapes and patterns to portraits that come alive with her innovative use of color. Each piece is a reflection of her unique vision and artistic voice. One of the things I love most about Regina’s art is her use of multimedia effects. These elements add a fascinating three-dimensional perspective, making her work not just something to see, but something to experience. Her ability to bring depth and texture to her pieces is truly remarkable and sets her apart in the art world. I am incredibly proud of Regina and her dedication to her craft. Her art has a way of speaking to the soul, and I believe it has the power to inspire and move anyone who encounters it. If you're looking for artwork that is both visually captivating and emotionally resonant, I wholeheartedly encourage you to explore Regina’s collection. Her pieces are more than just art, they are a celebration of creativity and imagination."
          image={darrellBrown}
          link="https://www.pictorem.com/912451/Ticking%20Time.html?iframe=1"
        />
        <TestimonialsCard
          title="Shona Curry"
          subTitle="Verified Purchaser"
          description="This painting is like a visual caffeine hit for my nostalgia, capturing
        the vibrant chaos of my Georgia State University days with a brush
        dipped in pure joy. Every stroke teems with the energy of our dynamic,
        diverse crew, making it impossible to look at it without grinning like a
        fool. Kudos to Regina (my forever colleague & mentor) and small business
        dynamo who managed to bottle our collective spirit into this
        masterpiece. Hanging it on my wall is like having a reunion with my
        college squad every day, minus the work!"
          image={shonaCurry}
          link="https://www.pictorem.com/912508/Color%20Me%20Love.html?iframe=1"
        />
        <TestimonialsCard
          title="Brian Jenkins"
          subTitle="Verified Purchaser"
          description="In conversation one day, Regina asked me my favorite color. From that, she created this beautiful art that I repurposed as the center piece of my living room. It is a constant conversation starter, and I am very thankful."
          image={brian}
          link="https://www.pictorem.com/912484/Gas%20Clouds.html?iframe=1"
        />

        <TestimonialsCard
          title="Dr. Gladys and Dean Yarbrough"
          subTitle="Verified Purchaser"
          description="Regina’s artwork will entice and delight your senses. Her vibrant use of color and texture is mesmerizing. We are pleased with our purchase and will add more of Regina’s fine work to our collection soon."
          image={gladysAndDean}
          link="https://www.pictorem.com/2003020/Ocean%20Bubbles.html?iframe=1"
        />
        <TestimonialsCard
          title="Jasmine Speights"
          subTitle="Verified Purchaser"
          description="I love the art from Being Us Creations! There’s so many styles to choose from."
          image={jazzie}
          link="https://www.pictorem.com/912487/Scanners.html?iframe=1"
        />
        <TestimonialsCard
          title="Kelvin Brown"
          subTitle="Verified Purchaser"
          description="I really enjoy the artwork. It reminds me of my father and his brothers. It’s a pleasure to look at each day."
          image={kelvin}
          link="https://www.pictorem.com/912431/Brown%20Brothers%20Tribe.html?iframe=1"
        />
        <TestimonialsCard
          title="David McCall"
          subTitle="Verified Purchaser"
          description="I was grateful to be invited to the art show and was pleasantly surprised by the many beautiful art displays. The piece I purchased caught my eye immediately, but I decided to explore it further before returning to it, feeling as though it had my name on it. I look forward to seeing more of Regina's work in the future. Additionally, I must commend the reasonable pricing of the artwork."
          image={davidMcCall}
          link="https://www.pictorem.com/912517/Storm.html?iframe=1"
        />
        <TestimonialsCard
          title="Del Sayles Owen"
          subTitle="Verified Purchaser"
          description=""
          image={delOwens}
          link="https://www.pictorem.com/912478/Eye%20Of%20Light.html?iframe=1"
        />
        <TestimonialsCard
          title="Fran Gray"
          subTitle="Verified Purchaser"
          description=""
          image={franGray}
          link="https://www.pictorem.com/912437/Hey%20Ladies.html?iframe=1"
        />
        <TestimonialsCard
          title="Dr. Lula Ballton"
          subTitle="Verified Purchaser"
          description=""
          image={lula}
          link="https://www.pictorem.com/912487/Scanners.html?iframe=1"
        />
      </div>
      <div className="testimonial-instructions">
        Want to add your picture to the testimonials wall? Email us at{" "}
        <a href="mailto:beignuscreations@gmail.com">
          beignuscreations@gmail.com
        </a>{" "}
        with the subject <strong>&quot;Testimonials&quot;</strong>. <br />
        Include your name, date of purchase, an image and a brief comment.
      </div>
    </>
  );
};

export default Testimonials;
