import cssIcon from "./Images/css3.svg"
import reactIcon from "./Images/react.svg"
import jsIcon from "./Images/js.svg"
import pythonIcon from "./Images/python.svg"
import html5Icon from './Images/html5.svg'
import reduxIcon from './Images/redux.svg'
import postgreSQLIcon from './Images/postgresql.svg'
import npmIcon from './Images/npms.svg'
import nodeJsIcon from './Images/nodejs.svg'
// Social Icon
import LinkedInIcon from './Images/LinkedIn.svg'
import githubIcon from "./Images/github.svg"

export default {
    projects: [
        {
          id: 1, //DO NOT CHANGE THIS 
          title: "Cocktail Social",
          para:
            "This app is dedicated to sharing your favorite cocktails or sharing your new experiments and getting feedback. Here you can find out what your friends and peers are mixing up behind the bar.", // Add Your Service Type Here
          imageSrc:
            "https://www.wsbtv.com/resizer/44JlN-VtBRqH1jP4myKUaY-RzXk=/1200x675/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/PV3SJNEXFOPT7AMSJGEV5MCSKI.jpg",
          url: "https://cocktailsocial.herokuapp.com/",
        },
        {
          id: 2, //DO NOT CHANGE THIS 
          title: "Pluck Pluck Choose", 
          para:
            "Pluck Pluck Choose is a Tinder clone of sorts where you either pluck an animal pic or chuck a animal pic, check out the compare option for some good laughs.", // Add Your Service Type Here
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAQb6cD9s9TTk6ZxvohxA3byGJQToHPv3tg&usqp=CAU",
          url: "https://pluck-pluck-choose.herokuapp.com/",
        },
        {
          id: 3, //DO NOT CHANGE THIS 
          title: "Luckey's Cocktail Finder", 
          para:
            "This website utilizes the thecocktaildb API to allow users to search for the ingredient list and build process for almost any cocktail you can think of.", // Add Your Service Type Here
          imageSrc:
            "https://i2.wp.com/abarabove.com/wp-content/uploads/2018/12/P1-Vegan-Unfriendly-Ingredients.jpg?w=1080&ssl=1",
          url: "http://quixotic-name.surge.sh/index.html",
        },
      ],

      skills: [
        {
          id: 1,
          img: html5Icon,
          para:
            "HTML5 ",
        },
        {
          id: 2,
          img: cssIcon,
          para:
            "CSS3",
        },
        {
          id: 3,
          img: jsIcon,
          para:
            "JavasScript",
        },
        {
          id: 4,
          img: reactIcon,
          para:
            "React",
        },
        {
          id: 5,
          img: reduxIcon,
          para:
            "Redux",
        },
        {
          id: 6,
          img: pythonIcon,
          para:
            "Python",
        },
        {
          id: 7,
          img: postgreSQLIcon,
          para:
            "PostgreSQL",
        },
        {
          id: 8,
          img: npmIcon,
          para:
            "Npm",
        },
        {
          id: 9,
          img: nodeJsIcon,
          para:
            "NodeJs",
        },
      ],
      social: [
        // Add Or Remove The Link Accordingly
        { img: githubIcon, 
          url: "https://github.com/Gnarlyluck" },
        {
          img: LinkedInIcon,
          url: "https://www.linkedin.com/in/schuyler-luckey/",
        },
      ]
}