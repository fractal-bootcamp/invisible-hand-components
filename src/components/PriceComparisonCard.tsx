import { Card, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";
import React from "react";

// Custom styles for table cells using Tailwind CSS
const tableCellStyles = "text-center align-middle";
const priceColumnStyles = "min-w-[120px]"; // Minimum width for price columns
const logoColumnStyles = "w-24"; // Width for the logo column

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
        <Card className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg bg-gray-50">
            {/* Card Header */}
            <CardHeader className="relative p-4">
                {/* Header content can be added here if needed */}
            </CardHeader>
            {/* Card Body with Competitor Logos and Price Details */}
            <div className="px-4 py-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={`font-bold text-base ${logoColumnStyles}`}>{/* Empty header for logo */}</TableHead>
                            <TableHead className={`font-bold text-base text-right ${priceColumnStyles}`}>Regular Price</TableHead>
                            <TableHead className={`font-bold text-base text-right ${priceColumnStyles}`}>Net Price</TableHead>
                            <TableHead className={`font-bold text-base text-right ${priceColumnStyles}`}>Price Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {competitors.map((competitor, index) => (
                            <TableRow key={index}>
                                {/* Updated logo cell to align content vertically and horizontally */}
                                <TableCell className={`flex items-center justify-center h-20 ${tableCellStyles} ${logoColumnStyles}`}>
                                    {competitor.logo ? (
                                        <img className="w-16 h-auto object-contain" src={competitor.logo} alt={competitor.name} />
                                    ) : (
                                        <div className="font-bold text-lg">{competitor.name}</div>
                                    )}
                                    {!competitor.logo && (
                                        <span className="ml-2">{competitor.name}</span>
                                    )}
                                </TableCell>
                                <TableCell className={`text-gray-700 text-base text-right ${priceColumnStyles}`}>
                                    <span>{competitor.regularPrice}</span>
                                </TableCell>
                                <TableCell className={`text-base text-right font-semibold ${priceColumnStyles}`}>
                                    <span>{competitor.netPrice}</span>
                                </TableCell>
                                <TableCell className={`text-base text-right ${priceColumnStyles}`}>
                                    {competitor.priceChange !== 0 ? (
                                        <Badge
                                            className={`font-semibold py-2 rounded-md ${competitor.priceChange < 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}
                                        >
                                            {competitor.priceChange < 0 ? (
                                                <ArrowDown className="inline-block mr-1 w-5 h-5" />
                                            ) : (
                                                <ArrowUp className="inline-block mr-1 w-5 h-5" />
                                            )}
                                            ${Math.abs(competitor.priceChange).toFixed(2)} ({competitor.priceChange > 0 ? '+' : ''}{competitor.priceChange.toFixed(2)}%)
                                        </Badge>
                                    ) : (
                                        <Badge className="py-2 rounded-md bg-gray-100 text-gray-800">
                                            No Change
                                        </Badge>
                                    )}
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