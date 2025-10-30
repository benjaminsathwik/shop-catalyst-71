import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image_url?: string;
  affiliate_link: string;
  category: string;
  brand?: string;
  rating: number;
}

const ProductCard = ({
  name,
  description,
  price,
  image_url,
  affiliate_link,
  category,
  brand,
  rating,
}: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="line-clamp-1">{name}</CardTitle>
            {brand && (
              <p className="text-sm text-muted-foreground mt-1">{brand}</p>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-2xl font-bold text-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={affiliate_link} target="_blank" rel="noopener noreferrer">
            Buy Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
