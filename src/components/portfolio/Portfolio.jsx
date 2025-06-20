import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Image_1.jpg";
import IMG2 from "../../assets/Image_2.jpeg";
import IMG3 from "../../assets/Image_3.jpg";
import IMG4 from "../../assets/Image_4.jpg";
import IMG5 from "../../assets/Image_5.jpg";
import IMG6 from "../../assets/Image_6.jpg";
import IMG7 from "../../assets/Image.png";
import IMG8 from "../../assets/Image_8.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Boarnerges React Job Portal",
    demo: "https://boarnergesjob.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pitch Deck Website",
    demo: "https://itch-deck.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dies Game",
    demo: "https://boarnergesdi.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Guess Game",
    demo: "https://boarnergesguess.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Itump Landing Page",
    demo: "https://itump.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Layeres Landing Page",
    demo: "https://vercel.com/boarnerges-s-projects/landing-page",
  },
  {
    id: 7,
    image: IMG7,
    title: "Admin Dashboard",
    demo: "https://boarnergesdashboard.netlify.app/",
  },

  {
    id: 8,
    image: IMG8,
    title: "School Management System",
    demo: "https://studmanagement.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="items-start  gap-3">
          <h3 className="text-xl md:text-2xl items-left font-bold text-gray-100 py-4 ">
            <span className=" text-lg font-light text-teal-400">01.</span> Some
            Things I have Built
          </h3>
          <div className="bg-teal-400 w-[20%] align-right h-0.5"></div>
        </div>
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
