import { Card, CardHeader, CardFooter } from "@/components/ui/card"; // Removed CardBody as it is not exported from the module
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import React from "react";

// Importing necessary components from the CompetitorsTable file
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PriceComparisonCardProps {
    competitors: {
        logo: string;
        name: string;
        regularPrice: string;
        netPrice: string;
        priceChange: number; // Positive for increase, negative for decrease
    }[];
}

// Define the PriceComparisonCard component
const PriceComparisonCard: React.FC<PriceComparisonCardProps> = ({ competitors }) => {
    return (
        <Card className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-50">
            {/* Card Header */}
            <CardHeader className="relative p-4">
                <div className="font-bold text-lg">Price Comparison</div>
            </CardHeader>
            {/* Card Body with Competitor Logos and Price Details */}
            <div className="px-4 py-2">
                <Table>
                    <TableCaption>Competitor Prices</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-base"></TableHead>
                            <TableHead className="font-bold text-base text-center">Regular Price</TableHead> {/* Aligned to center */}
                            <TableHead className="font-bold text-base text-center">Net Price</TableHead> {/* Aligned to center */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {competitors.map((competitor, index) => (
                            <TableRow key={index} className="flex flex-row items-center justify-between">
                                <TableCell className="flex items-center justify-center">
                                    {competitor.logo ? (
                                        <img className="w-12 h-12 rounded-full object-cover" src={competitor.logo} alt={competitor.name} />
                                    ) : (
                                        <div className="font-bold text-lg">{competitor.name}</div>
                                    )}
                                </TableCell>
                                <TableCell className="text-gray-700 text-base flex items-center justify-center">
                                    <span className="font-semibold">{competitor.regularPrice}</span>
                                </TableCell>
                                <TableCell className="text-gray-700 text-base flex items-center justify-center">
                                    <span className="font-semibold">{competitor.netPrice}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
};

// Export the PriceComparisonCard component as default
export default PriceComparisonCard;
