import React from 'react'; // Import React to avoid ReferenceError
import { Meta, StoryFn } from '@storybook/react';
import PriceComparisonCard from '../components/PriceComparisonCard';

// Define metadata for the story
export default {
    title: 'Components/PriceComparisonCard',
    component: PriceComparisonCard,
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ], // Added a decorator to provide necessary context
} as Meta;

// Define a template for the PriceComparisonCard story
const Template: StoryFn<typeof PriceComparisonCard> = (args) => <PriceComparisonCard {...args} />;

// Define the default story for the PriceComparisonCard
export const Default = Template.bind({});
Default.args = {
    competitors: [
        {
            logo: './src/assets/bunkerHillHEB.png',
            name: 'Bunker Hill H-E-B',
            regularPrice: '$15.05',
            netPrice: '$15.05',
            priceChange: 0,
        },
        {
            logo: './src/assets/walgreens.png',
            name: 'Walgreens',
            regularPrice: '$19.99',
            netPrice: '$14.99',
            priceChange: -25,
        },
        {
            logo: './src/assets/walmart.png',
            name: 'Walmart Supercenter',
            regularPrice: '$14.47',
            netPrice: '$14.47',
            priceChange: 0,
        },
        {
            logo: './src/assets/competitorLogo.png',
            name: 'Competitor Store',
            regularPrice: '$19.99',
            netPrice: '$24.99',
            priceChange: 25,
        },
    ],
};
