import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Haytham",
  lastName: "Abouelfaid",
  name: "Haytham Abouelfaid",
  role: "AWS Data Center Operations Technician II | Automation & Security Systems",
  avatar: "/images/avatar.jpg",
  email: "haythamwick2019@gmail.com",
  location: "America/New_York",
  locationLabel: "Northern Virginia, USA",
  languages: ["English", "Arabic"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Infrastructure, cloud, cybersecurity, automation, AI systems, and technical build notes.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HaythamAbouelfaid",
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
  image: "/images/og/home-2026.png",
  label: "Home",
  title: "Haytham Abouelfaid | AWS Data Center Ops, Automation & Cybersecurity",
  description:
    "Portfolio of Haytham Abouelfaid: AWS Data Center Operations Technician II building across infrastructure, IT support, cloud, cybersecurity, automation, AI systems, and software.",
  headline: <>Operating infrastructure. Automating systems. Engineering security.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SentinelOps — AI-Assisted Phishing Investigation Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Build
        </Text>
      </Row>
    ),
    href: "/work/11-sentinelops-ai-phishing-investigation",
  },
  subline: (
    <>
      I&apos;m Haytham Abouelfaid, an AWS Data Center Operations Technician II and George Mason
      University IT student. I work across server infrastructure, IT operations, cloud,
      cybersecurity, AI automation, APIs, and technical systems — then turn that experience into
      documented projects, repeatable workflows, and production-minded engineering.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description:
    "AWS data center operations, IT support, cloud, cybersecurity, AI automation, technical projects, and community work by Haytham Abouelfaid.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Haytham Abouelfaid is a Northern Virginia-based infrastructure and automation builder
        working as an <strong>AWS Data Center Operations Technician II</strong>. His technical work
        spans server hardware, IT support, cloud infrastructure, cybersecurity, Python,
        Make.com automation, AI-agent workflows, API integration, knowledge systems, and
        human-in-the-loop operational controls. He completed an A.S. in Information Technology at
        Northern Virginia Community College and is pursuing a B.S. in Information Technology at
        George Mason University.
      </>
    ),
  },
  work: {
    display: true,
    title: "Technical Experience",
    experiences: [
      {
        company: "Amazon Web Services (AWS)",
        timeframe: "Jun 2026 - Present",
        role: "Data Center Operations Technician II",
        achievements: [
          <>
            Support data center operations through server hardware maintenance, rack-level
            troubleshooting, service-availability procedures, and operational safety standards.
          </>,
          <>
            Apply hardware diagnostics, structured ticketing, escalation workflows, and
            Linux/Windows and networking fundamentals in a 24/7 infrastructure environment.
          </>,
          <>
            Build practical infrastructure-operations experience while protecting internal
            information and keeping public portfolio material limited to non-confidential,
            role-level responsibilities.
          </>,
        ],
        images: [],
      },
      {
        company: "Your AI Everything",
        timeframe: "Jun 2026 - Present",
        role: "AI Automation & Security Systems Engineer",
        achievements: [
          <>
            Your AI Everything is an AI consulting, development, automation, and enablement business focused on helping individuals and teams turn existing AI tools into practical operating systems, agents, command centers, knowledge systems, and connected workflows.
          </>,
          <>
            Working with Gus across the automation, systems integration, technical operations, and security-minded workflow side of the business.
          </>,
          <>
            Support AI operating system and agent workflow architecture, Make.com automation, REST / HTTP APIs, JSON, webhooks, workflow state, and Google Workspace integrations.
          </>,
          <>
            Build AI knowledge systems, prompt and command systems, Your AI OS workflow support, and AI Assessment / automation-audit workflow support.
          </>,
          <>
            Design security-minded workflow patterns including human approval gates, deduplication, error handling, logging, workflow reliability, research automation, sales enablement, content systems, reporting, business intelligence, finance / real-estate intelligence, and documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "LSMP VIDEO",
        timeframe: "Aug 2025 - Present",
        role: "GTM Automation IT Support Specialist II (promoted Aug 2026)",
        achievements: [
          <>
            Advanced from GTM Automation IT Support Specialist I to Specialist II in August 2026,
            expanding ownership across business IT support, automation reliability, and workflow
            troubleshooting.
          </>,
          <>
            Configure and support company Apple devices, Apple Business Manager enrollment,
            Mosyle MDM workflows, user setup, access, and device-management troubleshooting.
          </>,
          <>
            Build and maintain Make.com automations while troubleshooting failed scenarios, API
            errors, credential issues, Google Workspace problems, access failures, routing logic,
            and data-mapping problems.
          </>,
          <>
            Document repeatable support and automation procedures across Google Workspace,
            Make.com, APIs, and device-management workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "AI Enablement Works",
        timeframe: "Apr 2026 - Present",
        role: "AI Sales Enablement Content Systems",
        achievements: [
          <>
            Support an AI-powered sales-enablement system for onboarding, buyer education,
            marketing scripts, and scalable B2B content workflows.
          </>,
          <>
            Organize research, brand assets, prompt workflows, and AI content pipelines for
            script creation, voice generation, and avatar-based video production.
          </>,
        ],
        images: [],
      },
      {
        company: "MyGuyGus",
        timeframe: "Mar 2026 - Present",
        role: "AI Automation Systems Operator",
        achievements: [
          <>
            Build AI-assisted automation and content systems across multiple business lines to
            support publishing, research, sales enablement, and bilingual GTM execution.
          </>,
          <>
            Design Make.com workflows connecting Sheets, Drive, Gmail, LinkedIn, AI generation,
            HTML email, Apps Script, APIs, brand assets, and routing logic into repeatable
            operations.
          </>,
        ],
        images: [],
      },
      {
        company: "MigosConcierge",
        timeframe: "Mar 2026 - Present",
        role: "AI Travel Concierge Product Support",
        achievements: [
          <>
            Support product planning for an AI-assisted travel-concierge platform spanning
            chauffeur coordination, lodging logistics, traveler support, privacy-oriented
            workflows, and bilingual assistance.
          </>,
          <>
            Help structure product messaging, user journeys, AI media assets, backend planning,
            documentation, and prototype workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Sentilops",
        timeframe: "Mar 2026 - Present",
        role: "Founder & Automation Systems Builder — Financial Intelligence",
        achievements: [
          <>
            Founded an AI-assisted financial-intelligence and literacy system that turns
            newsletters, market updates, business trends, and investing content into structured
            research and educational insight.
          </>,
          <>
            Built workflows for intake, article extraction, AI analysis, Sheets logging, Drive
            knowledge files, Slack alerts, action queues, market lessons, and cash-flow inputs.
          </>,
        ],
        images: [],
      },
      {
        company: "AutomateWithGus",
        timeframe: "Nov 2025 - Present",
        role: "Automation & AI Systems Builder — GTM / Sales",
        achievements: [
          <>
            Build and maintain AI-assisted GTM systems supporting LinkedIn outreach, email
            workflows, content operations, and CRM-style sales processes.
          </>,
          <>
            Troubleshoot API authentication, workflow failures, routing logic, mapping errors,
            and multi-step automation integrations.
          </>,
        ],
        images: [],
      },
      {
        company: "NoRepSales",
        timeframe: "Nov 2025 - Present",
        role: "Sales Enablement & Growth Automation Associate",
        achievements: [
          <>
            Support buyer-facing content, automation assets, LinkedIn publishing workflows, and
            AI-generated messaging systems.
          </>,
          <>
            Structure source documents, visual assets, prompt libraries, and automation-ready
            knowledge bases for scalable outreach and enablement operations.
          </>,
        ],
        images: [],
      },
      {
        company: "George Mason University Computer Science Club",
        timeframe: "Apr 2026",
        role: "Events & Operations Intern",
        achievements: [
          <>
            Supported technical/community event setup, promotion coordination, member
            communication, logistics, outreach, and documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "Loudoun County Public Schools & AWS",
        timeframe: "Jun 2025 - Jul 2025",
        role: "IT & CS Rising Intern",
        achievements: [
          <>
            Instructed coding and technology concepts with Python, AI tools, Twine, LEGO robotics,
            and 3D printing through hands-on project-based learning.
          </>,
          <>
            Helped students develop computational thinking, debugging, foundational AI
            understanding, and technical problem-solving skills.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-cs-rising.jpg",
            alt: "CS Rising project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/1-cs-project.jpg",
            alt: "CS Rising project activity",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "George Mason University",
        description: (
          <>B.S. Information Technology, Cybersecurity Concentration — Aug 2026 to Dec 2028.</>
        ),
      },
      {
        name: "Northern Virginia Community College",
        description: <>A.S. Information Technology — Jun 2025 to Aug 2026.</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Google Cybersecurity Professional Certificate",
        description: <>Completed Oct 2025.</>,
      },
      {
        name: "Google IT Automation with Python",
        description: <>Completed Oct 2025.</>,
      },
      {
        name: "Google IT Support Professional Certificate",
        description: <>Completed Aug 2025.</>,
      },
      {
        name: "Microsoft Security Essentials",
        description: <>Completed Aug 2025.</>,
      },
    ],
  },
  businesses: {
    display: true,
    title: "Businesses & Services",
    services: [
      {
        name: "Your AI Everything",
        description: "Working with Gus on AI operating systems, automation architecture, agents, integrations, knowledge systems, workflow reliability, and security-minded technical operations.",
        url: "https://myguygus.com/ai",
        image: "/images/businesses/your-ai-everything/cover.png",
      },
      {
        name: "Your AI OS",
        description: "A personalized AI operating layer combining role-specific context, agents, knowledge, commands, and automation around how an individual or team actually works.",
        url: "https://myguygus.com/youraios/en",
      },
      {
        name: "AI Assessment",
        description: "An assessment entry point for reviewing current AI usage, workflows, repetitive work, and opportunities for practical automation or AI-system improvements.",
        url: "https://myguygus.com/ai/assessment",
      },
    ],
  },
  community: {
    display: true,
    title: "Community & Financial Literacy",
    experiences: [
      {
        company: "NOVA CASHFLOW & Financial Literacy Circle",
        timeframe: "Apr 2026 - Present",
        role: "Founder / Community Organizer",
        achievements: [
          <>
            Founded a financial-literacy community for students and young professionals focused on
            cash flow, assets versus liabilities, investing, real estate, and practical
            wealth-building education.
          </>,
          <>
            Built outreach, newsletter, content, and automation systems supporting onboarding,
            finance education, research organization, and local community growth.
          </>,
        ],
        images: [],
      },
      {
        company: "Developing Professionals in Information & Technology Sectors",
        timeframe: "Aug 2025 - Present",
        role: "Co-Founder",
        achievements: [
          <>
            Co-founded a professional networking community connecting aspiring IT,
            cybersecurity, marketing, automation, and business professionals with peers,
            startups, and working practitioners.
          </>,
          <>
            Organize networking discussions, outreach, and events that help members explore
            technical fields and build career connections.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Data Center & Infrastructure Operations",
        description: (
          <>
            Server hardware maintenance, rack-level troubleshooting, hardware diagnostics,
            ticketing, escalation, operational safety, and infrastructure reliability.
          </>
        ),
        tags: [
          { name: "Server Hardware", icon: "server" },
          { name: "Linux", icon: "linux" },
          { name: "Windows", icon: "windows" },
          { name: "Networking", icon: "network" },
        ],
        images: [],
      },
      {
        title: "IT Support & Systems",
        description: (
          <>
            Windows 10/11, macOS, Linux, BIOS/UEFI, DISM/SFC, WinRE, device setup, Apple Business
            Manager, Mosyle MDM, Microsoft 365, Google Workspace, user access, and endpoint
            recovery.
          </>
        ),
        tags: [
          { name: "Windows", icon: "windows" },
          { name: "Linux", icon: "linux" },
          { name: "Microsoft 365", icon: "microsoft" },
        ],
        images: [
          {
            src: "/images/projects/project-01/00-error1962.jpg",
            alt: "Windows recovery Error 1962",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/01-bios-main.jpg",
            alt: "BIOS troubleshooting",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & Networking",
        description: (
          <>
            Azure, Microsoft Sentinel, Log Analytics, VNets, NSGs, Vultr VPC, TCP/IP, DNS/DHCP,
            VPNs, Wi-Fi security, RDP, virtualization, and firewall/network controls.
          </>
        ),
        tags: [
          { name: "Azure", icon: "microsoft" },
          { name: "Networking", icon: "network" },
          { name: "Virtualization", icon: "server" },
        ],
        images: [
          {
            src: "/images/projects/project-01/00-rg-soc-lab.png",
            alt: "Azure SOC lab resource group",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cybersecurity & SOC",
        description: (
          <>
            SIEM/SOAR, EDR, incident response, phishing/smishing investigation, email-header
            analysis, IOC extraction, threat intelligence, log analysis, MITRE ATT&CK, NIST
            frameworks, RBAC, and least privilege.
          </>
        ),
        tags: [
          { name: "Splunk", icon: "splunk" },
          { name: "Microsoft Sentinel", icon: "microsoft" },
          { name: "LimaCharlie", icon: "shield" },
          { name: "Tines / Shuffle", icon: "workflow" },
        ],
        images: [
          {
            src: "/images/projects/project-01/0_Workflow_Tines_Full.png",
            alt: "SOAR EDR workflow",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/10-slack-alert.png",
            alt: "SIEM SOAR alert workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Automation, AI Agents & APIs",
        description: (
          <>
            Make.com, Make AI Agents, Python, PowerShell, JavaScript, REST/HTTP APIs, JSON,
            regex/parsing, webhooks, Google Workspace automation, OpenAI/OpenRouter, knowledge
            systems, routing, deduplication, state, error handling, and human approval gates.
          </>
        ),
        tags: [
          { name: "Make.com", icon: "workflow" },
          { name: "Python", icon: "python" },
          { name: "PowerShell", icon: "terminal" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [
          {
            src: "/images/projects/project-01/0_Make_Workflow_Full.jpg",
            alt: "Make automation workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming & Data",
        description: (
          <>
            Python, PowerShell, JavaScript, SQL, Git/GitHub, SQLite, Supabase, CLI tooling,
            structured Markdown/JSON outputs, automated testing, and CI workflows.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
          { name: "SQL", icon: "database" },
        ],
        images: [
          {
            src: "/images/projects/project-01/3-sentinelops-terminal-investigation-run.jpg",
            alt: "SentinelOps Python CLI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Documentation & Operations",
        description: (
          <>
            Ticketing workflows, SOPs, runbooks, technical documentation, troubleshooting guides,
            knowledge-base design, workflow audits, support handoffs, technical demos, and
            operational governance.
          </>
        ),
        tags: [
          { name: "Runbooks", icon: "book" },
          { name: "Workflow Documentation", icon: "workflow" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Infrastructure, Cybersecurity & Automation Write-ups",
  description:
    "Technical write-ups from Haytham Abouelfaid covering infrastructure, IT, cloud, cybersecurity, automation, AI systems, and lessons from hands-on builds.",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Technical Projects – ${person.name}`,
  description:
    "Infrastructure, cloud, cybersecurity, automation, AI, IT support, and software projects built by Haytham Abouelfaid.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Highlights",
  title: `Technical Highlights – ${person.name}`,
  description:
    "Selected architecture diagrams, security investigations, cloud labs, automation systems, and project evidence.",
  images: [
    {
      src: "/images/projects/project-01/1-sentinelops-banner.png",
      alt: "SentinelOps AI-assisted phishing investigation platform",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/01-azure-vm-overview.jpg",
      alt: "Azure osTicket help desk deployment",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/0_Workflow_Tines_Full.png",
      alt: "SOAR and EDR automated incident response workflow",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/00-Architecture.png",
      alt: "Active Directory SIEM and SOAR architecture",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/00-cover-attack-map.png",
      alt: "Microsoft Sentinel cloud SOC attack map",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/0_Homepage_Hero.jpg",
      alt: "CupidSecure AI romance scam detection platform",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/0_Make_Workflow_Full.jpg",
      alt: "AI content automation workflow",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/00-error1962.jpg",
      alt: "Windows Error 1962 recovery",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
