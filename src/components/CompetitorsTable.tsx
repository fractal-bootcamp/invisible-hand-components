import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronsUpDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CompetitorTableProps {
  competitors: {
    store: string;
    regularPrice: string;
    salePrice: string;
    currentPrice: string;
    promotion: string;
  }[];
}

// Corrected component name
export const CompetitorsTable: React.FC<CompetitorTableProps> = ({ competitors }) => {
  return (
    <Table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <TableCaption>A list of competitor prices for Airbone Vitamin C.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="justify-between min-w-36">
            Store
            <span className="ml-auto">
              <ChevronsUpDown className="inline-block ml-2 w-4 h-4" /> {/* Moving ChevronsUpDown to the end of the cell */}
            </span>
          </TableHead>
          {/* Set exact width for all price columns using Tailwind CSS */}
          <TableHead className="text-right w-36 justify-between">
            Regular Price
            <span className="ml-auto">
              <ChevronsUpDown className="inline-block ml-2 w-4 h-4" /> {/* Moving ChevronsUpDown to the end of the cell */}
            </span>
          </TableHead>
          <TableHead className="text-right w-36 justify-between">
            Sale Price
            <span className="ml-auto">
              <ChevronsUpDown className="inline-block ml-2 w-4 h-4" /> {/* Moving ChevronsUpDown to the end of the cell */}
            </span>
          </TableHead>
          <TableHead className="text-right w-36 justify-between">
            Current Price
            <span className="ml-auto">
              <ChevronsUpDown className="inline-block ml-2 w-4 h-4" /> {/* Moving ChevronsUpDown to the end of the cell */}
            </span>
          </TableHead>
          <TableHead className="justify-between min-w-36">
            Promotion
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            Bunker Hill H-E-B
          </TableCell>
          {/* Apply the same width to all price cells using Tailwind CSS */}
          <TableCell className="text-right w-36">
            $15.05

          </TableCell>
          <TableCell className="text-right w-36">
            $15.05
          </TableCell>
          <TableCell className="text-right w-36 font-semibold">
            $15.05
          </TableCell>
          <TableCell>
            <Badge variant="secondary" className="py-2 rounded-md">No promotion</Badge> {/* Wrapped "No promotion" in a Badge */}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            Walgreens
          </TableCell>
          <TableCell className="text-right w-36">
            $19.99

          </TableCell>
          <TableCell className="text-right w-36">
            $14.99
          </TableCell>
          <TableCell className="text-right w-36 font-semibold">
            $14.99
          </TableCell>
          {/* TODO: Add tags for promotion codes */}
          <TableCell>
            {/* Added badges for promotion codes HEALTH15 and HEALTH20 */}
            Extra 15% off $35+ or extra 20% off $50+ health & wellness purchase.
            <br />
            <Badge variant="outline" className="py-1 mt-1 rounded-md bg-blue-200 text-xs">HEALTH15</Badge> {/* Made the badge smaller by reducing padding and font size */}
            <Badge variant="outline" className="py-1 mt-1 rounded-md bg-green-200 ml-2 text-xs">HEALTH20</Badge> {/* Made the badge smaller by reducing padding and font size */}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            Walmart Supercenter
          </TableCell>
          <TableCell className="text-right w-36">
            $14.47

          </TableCell>
          <TableCell className="text-right w-36">
            $14.47
          </TableCell>
          <TableCell className="text-right w-36 font-semibold">
            $14.47
          </TableCell>
          {/* TODO: Add tags for promotion codes */}
          <TableCell>
            <Badge variant="secondary" className="py-2 rounded-md">No promotion</Badge> {/* Wrapped "No promotion" in a Badge */}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

// Corrected default export
export default CompetitorsTable
