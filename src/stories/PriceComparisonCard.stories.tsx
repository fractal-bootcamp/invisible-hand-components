import React from 'react'; // Import React to avoid ReferenceError
import { Meta, StoryFn } from '@storybook/react';
import PriceComparisonCard from '../components/PriceComparisonCard';

// Define metadata for the story
export default {
    title: 'Components/PriceComparisonCard',
    component: PriceComparisonCard,
    parameters: {
        layout: 'centered',
    },
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
    ],
};
