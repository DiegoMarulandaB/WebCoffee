import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild aria-label="Back Button">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
