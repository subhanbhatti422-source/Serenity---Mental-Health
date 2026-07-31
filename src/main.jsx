import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Home from '../src/Components/Pages/Home/Home.jsx'
import About from '../src/Components/Pages/About/About.jsx'
import Services from '../src/Components/Pages/Services/Services.jsx'
import Blog from '../src/Components/Pages/Blog/Blog.jsx'
import Contact from '../src/Components/Pages/Contact/Contact.jsx'

import './index.css'

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Lenis Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


// Router (GitHub Pages compatible)
const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/about',
    element: <About />
  },

  {
    path: '/services',
    element: <Services />
  },

  {
    path: '/blog',
    element: <Blog />
  },

  {
    path: '/contact',
    element: <Contact />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)