import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.certifications.title,
      display: about.certifications.display,
      items: about.certifications.items.map((item) => item.name),
    },
    {
      title: about.community.title,
      display: about.community.display,
      items: about.community.experiences.map((experience) => experience.company),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  const renderExperience = (experience: (typeof about.work.experiences)[number], index: number) => (
    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
        <Text id={experience.company} variant="heading-strong-l">
          {experience.company}
        </Text>
        <Text variant="heading-default-xs" onBackground="neutral-weak">
          {experience.timeframe}
        </Text>
      </Row>
      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
        {experience.role}
      </Text>
      <Column as="ul" gap="16">
        {experience.achievements.map((achievement, achievementIndex) => (
          <Text
            as="li"
            variant="body-default-m"
            key={`${experience.company}-${achievementIndex}`}
          >
            {achievement}
          </Text>
        ))}
      </Column>
      {experience.images && experience.images.length > 0 && (
        <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
          {experience.images.map((image, imageIndex) => (
            <Row
              key={imageIndex}
              border="neutral-medium"
              radius="m"
              minWidth={image.width}
              height={image.height}
            >
              <Media
                enlarge
                radius="m"
                sizes={image.width.toString()}
                alt={image.alt}
                src={image.src}
              />
            </Row>
          ))}
        </Row>
      )}
    </Column>
  );

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.locationLabel ?? person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}

            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map(renderExperience)}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certifications.display && (
            <>
              <Heading
                as="h2"
                id={about.certifications.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.certifications.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.certifications.items.map((item, index) => (
                  <Column key={`${item.name}-${index}`} fillWidth gap="4">
                    <Text id={item.name} variant="heading-strong-l">
                      {item.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.businesses && about.businesses.display && (
            <>
              <Heading
                as="h2"
                id={about.businesses.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.businesses.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.businesses.services.map((service, index) => (
                  <Column key={`${service.name}-${index}`} fillWidth gap="8" paddingBottom="16">
                    <Row vertical="center" gap="16" fillWidth>
                      {service.image && (
                        <Media
                          radius="m"
                          height={48}
                          width={48}
                          src={service.image}
                          alt={service.name}
                        />
                      )}
                      <Column>
                        <Text id={service.name} variant="heading-strong-l">
                          {service.name}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {service.description}
                        </Text>
                        <Row paddingTop="8">
                          <Button
                            href={service.url}
                            prefixIcon="chevronRight"
                            size="s"
                            variant="secondary"
                            label={`View ${service.name}`}
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.community.display && (
            <>
              <Heading
                as="h2"
                id={about.community.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.community.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.community.experiences.map(renderExperience)}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, imageIndex) => (
                          <Row
                            key={imageIndex}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
