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
        <Card className="max-w-xs py-1 rounded-lg overflow-hidden shadow-lg bg-gray-50">
            {/* Card Header with Product Image */}
            <CardHeader className="relative">
                <div className="font-bold text-xl mb-1">{shortName}</div>
                <img className="w-full rounded-lg object-cover" src={image} alt={name} />
            </CardHeader>
            {/* Card Body with Product Details */}
            <div className="px-4"> {/* Replaced CardBody with a div and adjusted padding */}
                <p className="text-gray-700 text-sm">Name: {name}</p>
                <p className="text-gray-700 text-sm">
                    Size: {size}
                    {/* Wrap size unit in a colorful badge */}
                    <Badge variant="outline" className=" ml-2 rounded-md bg-blue-100 text-xs text-blue-800">{sizeUnit}</Badge>
                </p>
            </div>
            {/* Card Footer with UPC Code */}
            <CardFooter className="px-4 py-2"> {/* Adjusted padding */}
                <Badge variant="outline" className="py-1 rounded-md bg-gray-200 text-xs">UPC: {upc}</Badge>
            </CardFooter>
        </Card>
    );
};

// Export the ProductCard component as default
export default ProductCard;
