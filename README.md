# Career Exploration Hub

A web-based platform that provides personalized, accessible career guidance through interactive assessments, curated resources, and an integrated chatbox for real-time support.[1]

## Abstract

Career Exploration Hub empowers learners and professionals to explore careers aligned to interests, skills, and personality via dynamic questionnaires, assessments, and data-driven insights, delivered through an intuitive web interface. The platform blends modular front-end components, a PHP/MySQL back end, and external services (career guidance API and chatbox) to deliver personalized recommendations and action plans at scale.[1]

## Table of Contents

- Project Background[1]
- Key Features[1]
- System Architecture[1]
- Requirements[1]
- Installation[1]
- Configuration[1]
- Usage[1]
- Modules[1]
- Database Schema[1]
- Results[1]
- Future Work[1]
- License[1]

## Project Background

The platform addresses limited access to comprehensive, affordable, and up-to-date career guidance by delivering a personalized, interactive web application optimized for accessibility and scale. It complements traditional counseling with data-driven assessments, curated content, and AI-powered assistance to help users make informed career decisions.[1]

## Key Features

- Personalized assessments for interests, personality, and skills with tailored recommendations and action plans.[1]
- Career guidance API integration to map user profiles to suitable occupations with supporting rationale and insights.[1]
- Real-time chatbox for interactive assistance, Q&A, and guided navigation through the exploration process.[1]
- Modular front-end with responsive design using HTML, CSS, JavaScript, Bootstrap, and jQuery.[1]
- Secure PHP back end (PDO) with MySQL for user data, interest selections, and recommendation retrieval.[1]
- Results dashboard with career details, outlook, and resources for deeper exploration and comparison.[1]

## System Architecture

The system follows a client–server model with front-end pages, PHP controllers, MySQL storage, and external services for guidance and chatbots.[1]

```
[User] 
  └── Browser (HTML/CSS/JS, Bootstrap, jQuery)
        ├── UI: index.html, interest.html, login.html
        ├── AJAX: interest.js, login.js
        └── Chatbox embed (chatbase/app integration)

[Server]
  ├── PHP: connect.php, insert.php, select.php
  └── MySQL: career.sql (schema + seed)

[External Services]
  ├── Career Guidance API
  └── Chatbox Platform + NLP engine
```


## Requirements

- OS: Windows, macOS, or Linux with modern browser support and stable internet connection.[1]
- Front end: HTML, CSS, JavaScript with Bootstrap and jQuery for responsive UI and interactivity.[1]
- Back end: PHP (PDO) and MySQL for secure data persistence and retrieval.[1]
- Tools: Text editor (e.g., VS Code), local web server (e.g., XAMPP/WAMP/LAMP), and optional external API keys for guidance and chatbox features.[1]

## Installation

- Set up a local PHP server stack and ensure MySQL is running with a user having create/import privileges.[1]
- Clone or copy project files into the server’s document root (e.g., htdocs or www) and verify PHP is accessible in the environment.[1]
- Import database schema and seed data from career.sql into a new database (e.g., career_hub) using a MySQL client or CLI.[1]

```bash
# Example (adjust to local setup)
mysql -u <user> -p -e "CREATE DATABASE career_hub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u <user> -p career_hub < path/to/career.sql
```


## Configuration

- Update connect.php with the correct DB host, database name, username, and password, ensuring PDO error handling is enabled.[1]
- If using external APIs, add keys and endpoints where configured in interest.js or a dedicated config file and secure any secrets outside of version control where possible.[1]
- Verify CORS, session settings, and HTTPS if deploying beyond local development to protect credentials and user data.[1]

## Usage

- Access index.html to navigate the platform, review features, and proceed to interest selection or login/signup as needed.[1]
- Use login.html for authentication; insert.php will handle user creation and login flows with server-side validation via PDO and status codes for success and errors.[1]
- On interest.html, select interests, submit, and review dynamically loaded career matches; click entries for details and resources as provided by the integration and database content.[1]
- Use the chatbox to ask for suggestions, next steps, or clarification on results and site features in real time.[1]

## Modules

- Front end: index.html (landing and navigation), interest.html (assessment and results), login.html (auth UI), plus CSS and JS assets for layout, validation, and AJAX requests.[1]
- Back end: connect.php (database connection), insert.php (user insert/login), select.php (career retrieval from interest mapping), with structured PDO queries and error handling.[1]
- External: Career Guidance API for recommendations and Chatbox platform embed for interactive guidance, both integrated via JavaScript and configured keys.[1]

## Database Schema

- Schema includes user, interest, and career tables with appropriate keys and indices to support selection, matching, and retrieval operations efficiently.[1]
- career.sql provisions table structures, relationships, and seed data to enable out-of-the-box exploration and testing on first run.[1]

## Results

- The deployed prototype delivers a responsive site with working authentication, interest selection, dynamic recommendations, and integrated chat assistance across key user flows.[1]
- Snapshots from the report demonstrate functional landing, login, content, and contact pages reflecting the intended UX and data interactions.[1]

## Future Work

- Expand adaptive learning and personalization with ML-based recommendation refinement and progress-aware content delivery.[1]
- Add gamification and community features to drive engagement, collaboration, and peer support in exploration journeys.[1]
- Enhance analytics, privacy, and security with transparent policies, opt-in controls, and compliance with data protection standards.[1]
- Improve accessibility, mobile optimization, and inclusive UI patterns for a broader user base with diverse needs.[1]

