import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Image_1.webp";
import IMG2 from "../../assets/image_2.webp";
import IMG3 from "../../assets/image_3.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Website Design for University",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18591114-Website-Design-for-University",
  },
  {
    id: 2,
    image: IMG2,
    title: "Messenges Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18590733-Messenges-Dashboard",
  },
  {
    id: 3,
    image: IMG3,
    title: "TTC-APP",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18590195-TTC-APP",
  },
  {
    id: 4,
    image: IMG2,
    title: "Messenges Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18590733-Messenges-Dashboard",
  },
  {
    id: 5,
    image: IMG1,
    title: "Website Design for University",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18591114-Website-Design-for-University",
  },
  {
    id: 6,
    image: IMG3,
    title: "TTC-APP",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18590195-TTC-APP",
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
        {data.map(({ id, image, title, github, demo }) => {
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
