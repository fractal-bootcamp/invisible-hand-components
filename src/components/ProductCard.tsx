import { Card, CardHeader, CardFooter } from "@/components/ui/card"; // Removed CardBody as it is not exported from the module
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    image: string;
    shortName: string;
    name: string;
    size: string;
    sizeUnit: string;
    upc: string;
}

// Define the ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({
    image,
    shortName,
    name,
    size,
    sizeUnit,
    upc
}) => {
    return (
        // Reduced the max width of the card to make it smaller
        <Card className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-50">
            {/* Card Header with Product Image */}
            <CardHeader className="relative">
                <img className="w-full rounded-lg object-cover" src={image} alt={name} />
            </CardHeader>
            {/* Card Body with Product Details */}
            <div className="px-4 py-2"> {/* Replaced CardBody with a div and adjusted padding */}
                <div className="font-bold text-xl mb-2">{shortName}</div>
                <p className="text-gray-700 text-base">Name: {name}</p>
                <p className="text-gray-700 text-base">
                    Size: {size}
                    {/* Wrap size unit in a colorful badge */}
                    <Badge variant="outline" className="py-1 ml-2 rounded-md bg-blue-100 text-xs text-blue-800">{sizeUnit}</Badge>
                </p>
            </div>
            {/* Card Footer with UPC Code */}
            <CardFooter className="px-4 py-4"> {/* Adjusted padding */}
                <Badge variant="outline" className="py-1 rounded-md bg-gray-200 text-xs">UPC: {upc}</Badge>
            </CardFooter>
        </Card>
    );
};

// Export the ProductCard component as default
export default ProductCard;
