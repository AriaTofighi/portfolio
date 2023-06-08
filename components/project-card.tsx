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

  const cardContent = (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex justify-between">
          {/* whitespace: pre-line  */}
          <CardDescription className="
            whitespace-pre-line
          ">{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );

  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );

  return content
};

export default ProjectCard;
