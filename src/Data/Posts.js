// src/data/posts.js
import React from "react";

// images import
import gmbImg from "../Assets/images/saas.webp";
import frontendBackendImg from "../Assets/images/SEOService.webp";

const posts = [
  {
    id: 1,
    slug: "strategies-that-maximize-foot-traffic-of-google-my-business",
    title: "Strategies that Maximize Foot Traffic of Google My Business",
    date: "19 January 2024",
    author: "Zackery Brian",
    featuredImage: gmbImg,
    featuredAlt: "Google My Business strategies to increase foot traffic",

    content: (
      <>
        <h2>In the digital age, harnessing the power of local online engagement</h2>

        <p>
          In the digital age, harnessing the power of local online engagement is crucial
          for businesses seeking to maximize their foot traffic. Google My Business (GMB),
          a dynamic tool offered by Google, empowers companies to connect with local
          customers and drive more visitors to their physical locations.
        </p>

        <h3>1. Crafting a Compelling GMB Profile</h3>
        <p>
          The foundation of a successful GMB strategy lies in a well-crafted profile.
          Ensure that your profile is complete, accurate, and up-to-date.
        </p>

        <h3>Final Words</h3>
        <p>
          Google My Business is invaluable for businesses seeking to drive local foot
          traffic and foster online engagement.
        </p>
      </>
    ),
  },

  {
    id: 2,
    slug: "front-end-vs-back-end-development-two-pillars-of-web-development",
    title: "Front-End vs. Back-End Development: Two Pillars of Web Development",
    date: "19 January 2024",
    author: "Zackery Brian",
    featuredImage: frontendBackendImg,
    featuredAlt: "Front-end vs Back-end development",

    content: (
      <>
        <p>
          In the vast digital landscape of websites and applications, front-end and
          back-end development work together to build seamless experiences.
        </p>

        <h3>What is Front-End Development?</h3>
        <p>
          Front-end development focuses on UI and UX — everything the user sees and
          interacts with.
        </p>

        <h3>Final Words</h3>
        <p>
          Front-end and back-end development together shape the future of the web.
        </p>
      </>
    ),
  },
];

export default posts;
