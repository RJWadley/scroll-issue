import "styles/reset.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import type { GatsbyBrowser } from "gatsby"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
