import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

const automationProjects = [
  "12-your-ai-everything-automation-security-systems",
  "13-sentilops-financial-intelligence-automation",
  "14-nova-cashflow-financial-literacy-automation",
  "15-finance-real-estate-intelligence-automation",
  "2-linkedin-content-automation-engine",
  "4-soar-edr-incident-response-automation",
  "6-active-directory-siem-soar-auto-response",
];

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column horizontal="center" align="center" marginBottom="xl" gap="8">
        <Heading variant="display-strong-s" align="center">
          Technical Projects
        </Heading>
        <Text style={{ maxWidth: '48rem' }} align="center" onBackground="neutral-weak">
          Infrastructure, cloud, cybersecurity, automation, AI systems, IT support, and software
          builds documented as recruiter-ready technical case studies.
        </Text>
      </Column>

      <Column marginBottom="16" fillWidth radius="l" overflow="hidden">
        <img
          src="/images/projects/automation/automation-systems-cover.png"
          alt="AI automation systems portfolio spanning agents, APIs, workflow orchestration, security controls, finance intelligence, and business operations"
          style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
        />
      </Column>
      <Heading marginBottom="8" variant="heading-strong-xl" align="center">
        Automation Systems
      </Heading>
      <Text marginBottom="l" align="center" onBackground="neutral-weak">
        Multi-system automations spanning AI agents, APIs, business intelligence, finance,
        content operations, security response, routing, state, and human approval.
      </Text>
      <Projects include={automationProjects} />

      <Heading marginBottom="8" variant="heading-strong-xl" align="center">
        Cloud, Security, IT & Software
      </Heading>
      <Text marginBottom="l" align="center" onBackground="neutral-weak">
        Hands-on labs, investigations, support systems, security platforms, and software projects.
      </Text>
      <Projects exclude={automationProjects} />
    </Column>
  );
}
