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
import { ExternalLink } from "lucide-react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { title, description, href } = project;

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-md flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
        <div className="mt-3">
          <CardDescription className="whitespace-pre-line text-muted-foreground/90 text-base leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {href && (
        <CardFooter className="pt-4 mt-auto">
          <Button asChild variant="default" className="w-full sm:w-auto font-bold tracking-wide group/btn">
            <a href={href} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
