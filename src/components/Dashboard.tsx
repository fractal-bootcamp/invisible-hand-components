import React from 'react';
import ProductCard from './ProductCard';
import PriceComparisonCard from './PriceComparisonCard';
import CompetitorsTable from './CompetitorsTable';

// Sample data for the components
const productData = {
    image: './src/assets/airborneC.png',
    shortName: 'Airborne Vitamin C',
    name: 'Airborne Vitamin C 1000mg',
    size: '20',
    sizeUnit: 'Tablets',
    upc: '123456789012',
};

const competitorsData = [
    {
        logo: './src/assets/heb.png',
        name: 'Bunker Hill H-E-B',
        regularPrice: '$15.05',
        netPrice: '$16.05',
        priceChange: 1,
    },
    {
        logo: './src/assets/walgreens.png',
        name: 'Walgreens',
        regularPrice: '$19.99',
        netPrice: '$14.99',
        priceChange: -5,
    },
    {
        logo: './src/assets/walmart.png',
        name: 'Walmart Supercenter',
        regularPrice: '$14.47',
        netPrice: '$14.47',
        priceChange: 0,
    },
];

const competitorsTableData = [
    {
        store: 'Bunker Hill H-E-B',
        regularPrice: '$15.05',
        salePrice: '$15.05',
        currentPrice: '$15.05',
        promotion: 'No promotion',
    },
    {
        store: 'Walgreens',
        regularPrice: '$19.99',
        salePrice: '$14.99',
        currentPrice: '$14.99',
        promotion: 'Extra 15% off $35+ or extra 20% off $50+ health & wellness purchase.',
    },
    {
        store: 'Walmart Supercenter',
        regularPrice: '$14.47',
        salePrice: '$14.47',
        currentPrice: '$14.47',
        promotion: 'No promotion',
    },
];

const Dashboard: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 mx-4 my-4 rounded-lg mx-auto max-w-7xl">
            {/* Wrapper div with gray background */}
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

                {/* Product Information and Price Comparison Section */}
                <div className="flex flex-col md:flex-row mt-6 mb-6">
                    {/* Product Information */}
                    <div className="w-full md:w-1/2">
                        <ProductCard {...productData} />
                    </div>

                    {/* Price Comparison */}
                    <div className="w-full md:w-1/2">
                        <PriceComparisonCard competitors={competitorsData} />
                    </div>
                </div>

                {/* Detailed Competitors Table Section */}
                <section>
                    <CompetitorsTable competitors={competitorsTableData} />
                </section>
            </div>
        </div>
    );
};

export default Dashboard;