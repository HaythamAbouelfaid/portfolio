import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  include?: string[];
}

const publishedTime = (value: unknown) => {
  const time = new Date(String(value ?? "")).getTime();
  return Number.isNaN(time) ? 0 : time;
};

export function Projects({ range, exclude, include }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (include && include.length > 0) {
    allProjects = allProjects.filter((post) => include.includes(post.slug));
  }

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Keep active/in-progress projects visible instead of dropping them when
  // publishedAt contains a non-date status string.
  const sortedProjects = allProjects.sort((a, b) => {
    const priorityA = Number(a.metadata.priority ?? 999);
    const priorityB = Number(b.metadata.priority ?? 999);

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    return publishedTime(b.metadata.publishedAt) - publishedTime(a.metadata.publishedAt);
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
