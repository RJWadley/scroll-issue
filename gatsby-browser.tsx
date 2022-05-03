import "styles/reset.css";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import type { GatsbyBrowser } from "gatsby"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
