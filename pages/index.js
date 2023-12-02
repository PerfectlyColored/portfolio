import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Playfair+Display:wght@900&display=swap"
    rel="stylesheet"/>
      </Head>

      <main>
      <div class="homepage">
    <h1 class="p">
      Aidan Lao
    </h1>
    <div class="directory">
      <a class="btn m grow" href="#tools">Tools</a>
      <a class="btn m grow" href="#about">Bio</a>
      <a class="btn m grow" href="#projects">Projects</a>
      <a class="btn m grow" href="#contact">Socials</a>
      <a class="btn m grow" href="#contact">Resume</a>
    </div>
    <div class="blob">
      <svg xmlnsXLink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350">
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>
    </div>
    <div class="blob2">
      <svg xmlnsXLink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350">
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>
    </div>
  </div>
  <div id="about" class="about">
  <h1>About me</h1>
  <div class='grid'>
    <div>

      <div class="card">
        <h1>Software Engineering @ McMaster</h1>
        <p>2nd year student + Winner of Provost Medal <br/><br/> 4.0/4.0 GPA <br/><br/> A winner of McMaster Engineering Competition</p>
      </div>
       <div class="card img">
         <img src="/svg/piano.JPG" alt=""/>
       </div>
       <div class="card">
         <h1>Experienced Full-stack Developer</h1>
         <p> Current Software Developer @ Deighton (Co-op) <br/><br/> Experience in Agile environments with Scrum  </p>
       </div>
    </div>
    <div>

       <div class="card">
         <h1>Helping the Community</h1>
         <p> Partnered with the Ronald McDonald House <br/><br/> Current Coding Challenge Director @ Project Tech Careers <br/> <br/>Helping Students across Canada learn Python through Competitive Coding</p>
       </div>
       <div class="card">
         <h1>Passionate for learning</h1>
          <p> Experience in React, .NET, HTML, CSS, JS, C#, C, Java, and more <br/> <br/>Former Responsive Web Development Instructor </p>
       </div>
      <div class="card">
         <h1>Professional Pianist</h1>
          <p> Winner of international competitions and national representative <br/><br/> Accredited by the Royal Conservatory of Music (L.Mus) </p>
          <a href="https://laopiano.ca">laopiano.ca</a>
       </div>
    </div>
    <div>

      
    </div>
  </div>
</div>
  <div id="tools" class="tools">
    <div>
      <div><h2 class="m">Languages</h2>
      <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>C</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul></div> 
      <div class="image">

        <img src="/svg/languages.png" alt="" />
      </div>
    </div>
   
    <div class="frame">
     <div>
       <h2 class="m">Frameworks</h2>
       <ul>
         <li>React</li>
         <li>Node.js</li>
         <li>EF</li>
         <li>Kendo</li>
         <li>SQL</li>
         <li>Express.js</li>
         <li>Next.js</li>
         <li>Redux</li>
         <li>.NET</li>
         <li>Apollo</li>
         <li>GraphQL</li>
       </ul>
     </div>
      <div class="image">
        <img src="/svg/react.png" alt="" />
      </div>
    </div>
    <div>
    <div>
      <h2 class="m">Tools</h2>
      <ul>
        <li>Git</li>
        <li>MongoDB</li>
        <li>Heroku</li>
        <li>Agile</li>
        <li>Azure DevOps</li>
        <li>Linux/Bash</li>
      </ul>
    </div>
      <div class="image">
        <img src="/svg/git.svg" alt="" />
      </div>
    </div>
  </div>

<div id="projects" class="projects">
  <h1>Projects</h1>
  <div >
    <div>
      <h1>Automated Vehicle Driving System</h1>
      <p>P5.js, HTML, CSS, JS</p>
    </div>
    <ul>
      <li>Winner of McMaster's Engineering Competition</li>
      <li>Implemented pedestrian and parking spot detection system visualized in P5.js</li>
      <li>Developed virtual dashboard simulating a real car, displaying speed and battery usage</li>
    </ul>
  </div>
</div>
<div id="contact" class="contact">
    <h1>Contact</h1>
    <p>laoaidan@gmail.com</p>
    <a href="https://www.linkedin.com/in/aidanlao/">
      linkedin
    </a>
  </div>



      </main>


      <style jsx global>{`
      #__next > div {
        padding: 0;
        margin: 0;
      }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        .m {
        
          font-family: 'Montserrat', sans-serif;
        }
        
        .p {
          font-family: 'Playfair Display', serif;
        }
        * {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        }
        .homepage {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100vh;
          width: 100%;
        
        }
        
        .homepage {
          background: linear-gradient(270deg, #358acc, #600dd9, #13ca8a);
          background-size: 600% 600%;
        
          -webkit-animation: AnimationName 8s ease infinite;
          -moz-animation: AnimationName 8s ease infinite;
          animation: AnimationName 8s ease infinite;
        }
        
        @-webkit-keyframes AnimationName {
          0% {
            background-position: 0% 50%
          }
        
          50% {
            background-position: 100% 50%
          }
        
          100% {
            background-position: 0% 50%
          }
        }
        
        @-moz-keyframes AnimationName {
          0% {
            background-position: 0% 50%
          }
        
          50% {
            background-position: 100% 50%
          }
        
          100% {
            background-position: 0% 50%
          }
        }
        
        @keyframes AnimationName {
          0% {
            background-position: 0% 50%
          }
        
          50% {
            background-position: 100% 50%
          }
        
          100% {
            background-position: 0% 50%
          }
        }
        
        .homepage h1 {
          font-size: min(20vw, 10em);
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0.5em;
        }
        
        .directory {
          width: 100%;
          max-width: 50em;
          display: flex;
          justify-content: center;
          align-items: center;
          row-gap: 1em;
          column-gap: 1em;
          flex-wrap: wrap;
        }
        
        .btn {
          border-radius: 2em;
          border: 2px solid rgba(255, 255, 255, 0.8);
          padding: 0.3em 1.2em;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .btn:hover,
        .btn:focus {
          animation: pulse 1s;
          box-shadow: 0 0 0 0.5em rgba(255, 255, 255, 0.5);
        }
        
        
        .tools ul li, .grow {
          transition: all .2s ease-in-out;
        }
        .homepage h1 {
          animation: wipein 3s 0.2s cubic-bezier(0.5, 0, 0.2, 1.3) both;
        }
        .homepage .directory {
          animation: fadein 2s 0.5s cubic-bezier(0.5, 0, 0.2, 1.3) both;
        }
        @keyframes wipein {
           from {
             clip-path: polygon(33% 100%, 73% 100%, 100% 100%, 0% 100%);
           }
           to {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
           }
         }
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .tools ul li:hover, .grow:hover {
          transform: scale(1.1);
        }
        
        /* .btn:hover,
        .btn:focus {
          box-shadow: 0 0.5em 0.5em -0.4em #fcfcfc;
          transform: translateY(-0.25em);
        } */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
          }
        }
        .homepage {
          position: relative;
          overflow: hidden;
          z-index: 100;
        }
        .directory {
          z-index: 100;
        }
        
        
        .blob {
          position: absolute;
          top: 0;
          left: 0;
          fill: rgba(255, 255, 255, 0.2);
          width: 50vmax;
          z-index: 0;
          animation: move 10s ease-in-out infinite;
          transform-origin: 50% 50%;
        }
        .blob2 {
          position: absolute;
          top: 0;
          left: 0;
          fill: rgba(255, 255, 255, 0.2);
          width: 30vmax;
          z-index: 0;
          animation: move 10s ease-in-out infinite;
          animation-direction: reverse;
          transform-origin: 50% 50%;
        }
        
        @keyframes move {
          0%   { transform: scale(1)   translate(10px, -100px); }
          38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
          40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
          78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
          80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
          100% { transform: scale(1)   translate(10px, -100px); }
        }
        
        
        
        /*Tools*/
        .card {
          height: 25em;
          width: 20em;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(to right, darkblue, darkorchid) border-box;
          border-radius: 1em;
          border: 7px solid transparent;
          box-sizing: border-box;
          padding: 2em;
          background-color: #f0ffff;
          box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
        }
        .tools h2 {
          font-family: 'Playfair Display', sans-serif;
          font-weight: bold;
          color: #072245;
          
        }
        .tools ul {
          list-style-type: none;
          padding-left: 0;
        }
        .tools ul li:hover,
        .tools ul li:focus {
          animation: pulse 1s;
          box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0.2);
        }
        .tools ul li {
          border: 1px solid black;
          padding: 0.5em;
          border-radius: 0.2em;
        }
        .tools {
          box-sizing: border-box;
          padding: 4em min(20em,20vw);
          
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          background-color: #eefbfb;
          width: 100%;
          column-gap: 1em;
          row-gap: 1em;
          flex-wrap: wrap;
        }
        @media (max-width: 700px) {
          .tools {
            padding: 4em 1em;
          }
        }
        .tools .image {
          max-width: 10em;
          max-height: 10em;
        }
        .image img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
        .tools > div {
          display: flex; 
          column-gap: 4em;
          padding: 1em;
          align-items: center;
          justify-content: center;
        }
        .tools h2 {
          font-size: 3em;
          background: -webkit-linear-gradient(#af51c2, #0d51bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tools div > ul {
          display: flex;
          row-gap: 1em;
          flex-wrap: wrap;
          column-gap: 1em;
        }
        
        .lan {
          background-image: url("/svg/Gradient_blob.svg");
          background-repeat: no-repeat;
          
        }
        /*ABOUT*/
        .about {
          min-height: 100vh;
        
          background-color: #eefbfb;
          width: 100%;
          padding: 4em min(5em,20vw);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-sizing: border-box;
        }
        .about .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          row-gap: 0.5em;
          column-gap: 0.5em;
          flex-direction: column;
        }
        .about .grid img {
          object-fit: cover;
          height: 100%;
        }
        
        .card.img {
          padding: 0;
          border: 0;
          overflow: hidden;
          border-radius: 1em;
        }
        .about  h1 {
             font-size: 2em; 
          font-weight: bold;
          font-family: 'Playfair Display', serif;
            background: linear-gradient(to right, #0c2bc6 0%, #b353f3 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .about > h1 {
          font-size: 5em;
        
          background: linear-gradient(to right, #0c2bc6 0%, #b353f3 100%);
           -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .grid > div {
        
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          row-gap: 0.5em;
          column-gap: 0.5em;
        }
        .projects {
          font-family: 'Montserrat', sans-serif;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 80vh;
        }
        .projects div > h1 {
          text-align: center;
        }
        .projects h1  {
          font-family: 'Playfair Display', serif;
          font-weight: bold;
          font-size: 3em;
          background: -webkit-linear-gradient(#af51c2, #0d51bf);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .contact h1  {
          font-family: 'Playfair Display', serif;
          font-weight: bold;
          font-size: 3em;
          background: -webkit-linear-gradient(#e6dee7, #d0e0fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact {
          display: flex;
          flex-direction: column;
          row-gap: 0.5em;
          align-items: center;
          justify-content: center;
        }
        .contact {
          background: linear-gradient(270deg, #358acc, #600dd9, #13ca8a);
          background-size: 600% 600%;
        
          -webkit-animation: AnimationName 8s ease infinite;
          -moz-animation: AnimationName 8s ease infinite;
          animation: AnimationName 8s ease infinite;
          color: white;
          height: 100vh;
        }
        .contact a {
          text-decoration: none;
          padding: 0.3em 0.6em;
          border-radius: 1em;
          margin: 0.3em;
          color: white;
          border: 2px solid white;
          
        }
        .contact a:hover {
          transform: scale(1.1);
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
