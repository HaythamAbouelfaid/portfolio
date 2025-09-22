import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Haytham",
  lastName: "Abouelfaid",
  name: `Haytham Abouelfaid`,
  role: "IT & Cybersecurity Student",
  avatar: "/images/avatar.jpg",
  email: "haythamwick2019@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on IT, cybersecurity projects, and career growth</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/haythamabouelfaid",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/haytham-abouelfaid/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning technical knowledge into real-word IT & cybersecurity solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Active Directory SIEM + SOAR Automation</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/active-directory-siem-soar-automation",
  },
  subline: (
    <>
      I'm Haytham Abouelfaid, an IT & Cybersecurity student at *Northern Virginia Community College*
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , building hands-on projects in Active Directory, SIEM, SOAR, and Cloud Security to
      replicate real-world environments.
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Haytham is a U.S.-based IT & Cybersecurity student at Northern Virginia Community College
        (transfer path to George Mason University). Certified in Google IT Support, AI Essentials,
        and Microsoft Security, he is passionate about system recovery, cloud security, SIEM/SOAR,
        and building labs that simulate enterprise-level security environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Loudoun County Public Schools & AWS",
        timeframe: "June 2025 - July 2025",
        role: "IT & CS Rising Intern",
        achievements: [
          <>
            Instruct coding concepts using Python, AI tools, Twine, LEGO robotics, and 3D printing for hands-on projects that address real-world issues.
          </>,
          <>
            Foster computational thinking, debugging skills, and foundational AI understanding through project-based learning.
          </>,
          <>
            Blend digital storytelling with computer science and AI principles to enhance student creativity.
          </>,
          <>
            Foster student creativity while teaching debugging and technical problem-solving, blending ELA and computer science skills.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-cs-rising.jpg",
            alt: "CS Rising Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/1-cs-project.jpg",
            alt: "CS Rising Project",
            width: 16,
            height: 9,
          },        
        ],
      },
      {
        company: "Home Depot",
        timeframe: "Feb 2025 - Present",
        role: "Retail Sales Associate",
        achievements: [
          <>
            Managed online and in-store order fulfillment, including processing pick-up and delivery requests using company systems.
          </>,
          <>
            Operated handheld technology for inventory checks, barcode scanning, and real-time product updates.
          </>,
          <>
            Assisted customers with selecting and troubleshooting technology products and handled order fulfillment through handheld systems.
          </>,
        ],
        images: [],
      },

      {
        company: "Computer Science Honors Scoeity",
        timeframe: "June 2025 - July 2025",
        role: "Member",
        achievements: [
          <>Taught elementary students coding basics using Scratch and Google Autodraw to build foundational programming skills.</>,
          <>Organized and led coding workshops to introduce young learners to programming and creative problem-solving.</>,
          <>Competed in CyberSlam 2025 at George Mason University, applying practical cybersecurity techniques in real-world simulation challenges.</>,
          <>Solved algorithmic problems in the UVA Coding Competition, demonstrating proficiency in Python programming and problem-solving.</>,
          <>Collaborated with peers to plan events and support fellow students in improving their coding and cybersecurity knowledge.</>,
          <>Gained experience presenting technical material in simple, engaging ways — strengthening public speaking and communication skills.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cshs-uva.jpg",
            alt: "CSHS UVA Coding Competition",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cshs-cyberslam-1.jpg",
            alt: "CSHS CyberSlam Competition",
            width: 16,
            height: 9,
          }, 
          {
            src: "/images/projects/project-01/cshs-cyberslam.jpg",
            alt: "CSHS CyberSlam Competition",
            width: 16,
            height: 9,
          },  
          {
            src: "/images/projects/project-01/cshs-volunteer.jpg",
            alt: "CShS Volunteer Teaching Kids",
            width: 16,
            height: 9,
          },            
        ],
      },
      {
        company: "Best Buy",
        timeframe: "Nov 2024 - Jan 2025",
        role: "Retail Sales Associate",
        achievements: [
          <>Assisted customers in selecting technology products, explaining product functionalities in clear, approachable terms.</>,
          <>Assisted customers with technology selection and setup guidance & provided basic troubleshooting and support for devices and store technology.</>,
          <>Assisted customers with selecting and troubleshooting technology products, supported app navigation, and handled order fulfillment.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Northen Virginia Community College",
        description: <>Associate of Science in Information Technology (2025–2027).</>,
      },
      {
        name: "George Mason University",
        description: <>B.S. Information Technology, Cybersecurity concentration (Transfer).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Cybersecurity",
        description: <>SIEM (Splunk, Microsoft Sentinel), SOAR (Shuffle), log analysis, detection engineering, AD hardening.</>,
        tags: [
          { name: "Splunk", icon: "splunk" },
          { name: "Sentinel", icon: "microsoft" },
          { name: "Active Directory", icon: "windows" },
        ],
        images: [
          { src: "/images/projects/project-01/06-search-results.png", alt: "Splunk detection search results", width: 16, height: 9 },
          { src: "/images/projects/project-01/00-cover-attack-map.png", alt: "Microsoft Sentinel attack map", width: 16, height: 9 },
        ],
      },
      {
        title: "Networking & IT Support",
        description: <>Windows/Mac/Linux troubleshooting, IP networking, VPN/Wi-Fi security, router config, system recovery.</>,
        tags: [
          { name: "Networking", icon: "network" },
          { name: "Linux", icon: "linux" },
          { name: "Windows", icon: "windows" },
        ],
        images: [
          { src: "/images/projects/project-01/00-error1962.jpg", alt: "Error 1962 no operating system found", width: 16, height: 9 },
          { src: "/images/projects/project-01/01-bios-main.jpg", alt: "BIOS configuration screen", width: 16, height: 9 },
        ],
      },
      {
        title: "Vulnerability Management & IR",
        description: <>Tenable scanning, CVE triage, patch validation, evidence capture; incident response workflows and containment.</>,
        tags: [
          { name: "Tenable", icon: "tenable" },      // add to iconLibrary
          { name: "Wireshark", icon: "wireshark" },  // add to iconLibrary
          { name: "LDAP", icon: "server" },
        ],
        images: [
          { src: "/images/projects/project-01/05-kql-and-failed-logons.png", alt: "KQL triage of failed logons", width: 16, height: 9 },
          { src: "/images/projects/project-01/04-cmd-and-services.jpg", alt: "SFC/DISM repair evidence", width: 16, height: 9 },
        ],
      },
      {
        title: "Programming & Scripting",
        description: <>Python automation, PowerShell scripting, JavaScript web apps, HTML/CSS; regex, JSON/webhooks.</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "PowerShell", icon: "terminal" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [
          { src: "/images/projects/project-01/01-vscode.png", alt: "VS Code with Python game code", width: 16, height: 9 },
          { src: "/images/projects/project-01/04-code.png", alt: "IntelliPath AI source code example", width: 16, height: 9 },
        ],
      },
      {
        title: "Cloud & Virtualization",
        description: <>Azure, Vultr VPC, VMware/Hyper-V basics, VM provisioning, NSGs/firewall rules, honeypot deployments.</>,
        tags: [
          { name: "Azure", icon: "microsoft" },
          { name: "VMware", icon: "cloud" },
          { name: "Virtualization", icon: "server" },
        ],
        images: [
          { src: "/images/projects/project-01/00-rg-soc-lab.png", alt: "Azure SOC resource group", width: 16, height: 9 },
          { src: "/images/projects/project-01/04-uf-install.png", alt: "Splunk UF install on Windows host", width: 16, height: 9 },
        ],

      },
      {
        title: "AI & Data Tools",
        description: <>ChatGPT/Copilot workflows, transcript summarization, structured note gen, basic SQL/Excel analysis, Supabase.</>,
        tags: [
          { name: "Supabase", icon: "supabase" },
          { name: "SQL", icon: "database" },       // add to iconLibrary
          { name: "Excel", icon: "excel" },        // add to iconLibrary
        ],
        images: [
          { src: "/images/projects/project-01/02-video-screen.png", alt: "IntelliPath AI video transcript screen", width: 16, height: 9 },
          { src: "/images/projects/project-01/05-supabase.png", alt: "Supabase database integration", width: 16, height: 9 },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Cybersecurity & IT Write-ups",
  description: `Posts and reflections from ${person.name} on labs, challenges, and lessons learned.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Hands-on IT & Cybersecurity projects built by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A mix of project screenshots, diagrams, and photos by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // AD SIEM + SOAR (architecture → proof)
    { src: "/images/projects/project-01/00-Architecture.png", alt: "AD SIEM+SOAR architecture diagram", orientation: "horizontal" },
    { src: "/images/projects/project-01/10-slack-alert.png", alt: "Slack confirmation after SOAR action", orientation: "horizontal" },

    // SOC Honeypot (Azure + Sentinel)
    { src: "/images/projects/project-01/00-cover-attack-map.png", alt: "Microsoft Sentinel global attack map", orientation: "horizontal" },
    { src: "/images/projects/project-01/05-kql-and-failed-logons.png", alt: "KQL query and failed logons aggregation", orientation: "horizontal" },

    // Windows Recovery (Error 1962)
    { src: "/images/projects/project-01/00-error1962.jpg", alt: "Error 1962: No Operating System Found", orientation: "horizontal" },
    { src: "/images/projects/project-01/01-bios-main.jpg", alt: "BIOS/UEFI main screen during recovery", orientation: "horizontal" },

    // IntelliPath AI (in progress)
    { src: "/images/projects/project-01/00-home.png", alt: "IntelliPath AI home view", orientation: "horizontal" },
    { src: "/images/projects/project-01/03-flow-chart.png", alt: "IntelliPath AI processing flow chart", orientation: "horizontal" },

    // Astray: Lost Kingdoms (in progress)
    { src: "/images/projects/project-01/00-home-screen.png", alt: "Astray: Lost Kingdoms title screen", orientation: "horizontal" },
    { src: "/images/projects/project-01/02-sprite-design.png", alt: "Pixel sprite design for Astray", orientation: "horizontal" },

    // Extra AD/SIEM context (optional spice)
    { src: "/images/projects/project-01/06-search-results.png", alt: "Splunk search for successful RDP events", orientation: "horizontal" },
    { src: "/images/projects/project-01/08-shuffle-workflow.png", alt: "Shuffle SOAR workflow with approval → LDAP", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
