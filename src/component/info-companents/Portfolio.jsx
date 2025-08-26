import React from "react";
import PortfolioCard from "./portfolio-components/Portfolio-Card";
import Sabai from "../../assets/img/Sabai.jpg";
import Senior from "../../assets/img/Senior.jpg";
import SMC from "../../assets/img/smc.jpg";
import TTT from "../../assets/img/ttt.jpg";
import Sushi from "../../assets/img/sushi.jpg";

function Portfolio() {
  return (
    <div class="portfolio-container">
      <PortfolioCard
        img={Sabai}
        title="Sabai Job"
        type="Mobile Application"
        description="A job search platform specifically designed for the blue collar workers from Myanmar, connecting with employers through an intuitive mobile interface."
        technologies={["Flutter"]}
        demoLink="https://play.google.com/store/apps/details?id=com.sabaijob.sabai_app&hl=en"
        githubLink="https://github.com/SabaiJob"
        figma="https://www.figma.com/design/hlvRgFqfLHapk8ozxJTMd2/Sabai-Job?node-id=1-3&t=lgdb7iSyxmrvfJgk-0"
      />
      <PortfolioCard
        img={Senior}
        title="Personalized Healthcare Recommendation System"
        type="Hospital System"
        description="An all in one hospital system which consists of three main interfaces, mobile for patients,admin dashboard and doctor dashboard, and connects with Gemini APIs for the personalized recommendations based on each patient."
        technologies={["Flutter", "Node.js", "React.js", "PostgreSQL"]}
        githubLink="https://github.com/Techies-SE"
        figma="https://www.figma.com/design/TH7jHs6Zu9ETURb9I3K1ND/Personalized-healthcare-recommendation-system-2.0?node-id=266-506"
      />
      <PortfolioCard
        img={SMC}
        title="Smart Campus Application"
        type="Mobile Application"
        description="An Application made for MFU university which offers up-to-date news and events, Map around the campus and features that would be useful for every students"
        technologies={["Flutter", "PostgreSQL"]}
        githubLink="https://github.com/Sisshmue/Smart_Campus"
      />
      <PortfolioCard
        img={TTT}
        title="Ultimate Tic-Tac-Toe"
        type="Web Application Game"
        description="Web Application Game with advanced and enhanced version of normal tic-tac-toe"
        technologies={["java", "ejs"]}
        demoLink="https://lab-cd-mcukjy5pla-uc.a.run.app/"
        githubLink="https://github.com/maefahluang-uni/99-project-ultimatetictactoe_group2"
      />
      <PortfolioCard
        img={Sushi}
        title="Sushi Restaurant App"
        type="Mobile Application"
        description="A Restaurant Application for sushi lovers which has two interfaces for customers and admin with basic restaurant processes"
        technologies={["Flutter", "Firebase"]}
        githubLink="https://github.com/siss-hmue/sushires_project"
      />
    </div>
  );
}

export default Portfolio;
