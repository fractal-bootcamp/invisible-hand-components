import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard from '../components/ProductCard';

// Define metadata for the story
export default {
    title: 'Components/ProductCard',
    component: ProductCard,
} as Meta;
// Define a template for the ProductCard story
const Template: StoryFn = (args) => <ProductCard {...args} />;

// Define the default story for the ProductCard
export const Default = Template.bind({});

// Provide default arguments for the Default story
Default.args = {
    image: './src/assets/airborneC.png',
    shortName: 'Airborne Vitamin C',
    name: 'Airborne Vitamin C 1000mg',
    size: '20',
    sizeUnit: 'Tablets',
    upc: '123456789012',
};