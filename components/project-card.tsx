import { Project } from "@/types/projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { title, description, href } = project;

  const titleContent = <CardTitle>{title}</CardTitle>;

  const headerContent = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {titleContent}
    </a>
  ) : (
    titleContent
  );

  return (
    <Card>
      <CardHeader>
        {headerContent}
        <div className="flex justify-between">
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
