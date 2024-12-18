import logo from "./logo.svg";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import java from "./tech/java.png";
import python from "./tech/python.png"; 
import threejs from "./tech/threejs.svg";

import meta from "./company/meta.png";
import shopify from "./company/shopify.png";
import pycube from "./company/pycube.png";
import tesla from "./company/tesla.png";
import montefiore from "./company/montefiore.png";
import bscw from "./company/bscw.png";

import crawler from "./crawler.png";
import twitter from "./twitter.png";
import jobit from "./jobit.png";
import tripguide from "./tripguide.png";
import faceTracker from "./facetracker.png"; 
import sudoku from './sudoku.png'
import textToSpeech from './textToSpeech.png'
import three from './threejs.png'
import colorPalette from './colorPalette.png'
import linkedin from './linkedin.png'
import resume from './resume.png'
import resumePDF from './JoeyFarisResume.pdf'

export const loadTechIcons = () => Promise.all([
  import("./tech/html.png"),
  import("./tech/css.png"),
  import("./tech/javascript.png"),
  import("./tech/docker.png"),
  import("./tech/figma.png"),
  import("./tech/git.png"),
  import("./tech/mongodb.png"),
  import("./tech/nodejs.png"),
  import("./tech/reactjs.png"),
  import("./tech/redux.png"),
  import("./tech/tailwind.png"),
  import("./tech/typescript.png"),
  import("./tech/java.png"),
  import("./tech/python.png"),
  import("./tech/threejs.svg")
]);

export const loadProjectImages = () => Promise.all([
  import("./crawler.png"),
  import("./twitter.png"),
  import("./jobit.png"),
  import("./tripguide.png"),
  import("./facetracker.png"),
  import("./sudoku.png"),
  import("./textToSpeech.png"),
  import("./threejs.png"),
  import("./colorPalette.png")
]);

export {
  logo,
  three,
  backend,
  textToSpeech,
  creator,
  mobile,
  sudoku,
  crawler,
  web,
  github,
  menu,
  colorPalette,
  close,
  css,
  faceTracker,
  docker,
  figma,
  java,
  python,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  montefiore,
  shopify,
  pycube,
  bscw,
  tesla,
  twitter,
  jobit,
  tripguide,
  linkedin,
  resume,
  resumePDF,
};
