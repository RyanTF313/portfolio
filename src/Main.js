import React from 'react';
import './App.css';

 export function Main() {
  return (
    <main>
      <section className="about">
        <h3>About Me</h3>
        <p>A Detroit native born with a passion for proving naysayers wrong. I moved 800 miles away to Boston, craving a challenge and with the hopes of beginning a career to help break the chains of poverty in my family. I began my Software Engineering career at Resilient Coders and joined Houghton Mifflin Harcourt as a Web Applications Developer shortly after. The determination to make a better life for my family, my competitive nature, and passion for learning has led me to sail on a journey to become a great Software Engineer.</p>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Twig.js</li>
          <li>JQuery</li>
          <li>Elastic Search</li>
          <li>MongoDB</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS/SCSS</li>
          <li>API</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <section>
          <h4>Freelance TA</h4>
            <ul>
              <li>Help Students by answering questions (HTML,CSS,JavaScript,Bootstrap,API)</li>
              <li>Explaining instructions to students</li>
              <li>Guide students through lesson plans</li>
            </ul>
        </section>
        <section>
          <h4>Houghton Mifflin Harcourt</h4>
            <ul>
              <li>Work within a team to produce technical solutions at an enterprise level</li>
              <li>Create and improve on existing code, systems, and architecture</li>
              <li>Leverage developer workflow tools such as Jenkins, Docker, Git, Postman, Slack, JIRA and Confluence</li>
              <li>Provide detailed documentation on new and existing code</li>
              <li>Created standardization guidelines and provided technical recommendations for business and marketing teams</li>
              <li>Customize Craft CMS templates with PHP and Twig.js</li>
              <li>Update frontend designs using SASS</li>
              <li>Gather requirements from non-developer stakeholders to achieve marketing goals for web pages</li>
              <li>Create and manage ElasticSearch queries</li>
            </ul>
        </section>
        <section>
          <h4>Resilient Coders</h4>
            <ul>
              <li>Develop and design websites for professionals and business through subcontracts gained via self-promotion or coworkers.</li>
              <li>Complete team and insectionidual assignments given daily by Senior Software Engineer that may include preparing code, correcting code, or designing new projects.</li>
              <li>Solve complex web problems usually with code. Using best practices I would solve problems large and small on daily basis.</li>
              <li>Provide code reviews and do pair programming with current cohort.</li>
            </ul>
        </section>
      </section>
    </main>
  );
}
