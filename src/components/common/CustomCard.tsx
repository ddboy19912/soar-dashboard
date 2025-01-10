import { Card, CardContent } from "../ui/card";

interface CustomCardProps {
  children: React.ReactNode;
  containerClass?: string;
  contentClass?: string;
}

const CustomCard = ({
  children,
  containerClass,
  contentClass,
}: CustomCardProps) => {
  return (
    <Card
      className={`rounded-[25px] shadow-none border-card-border ${containerClass}`}
    >
      <CardContent className={contentClass}>{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
