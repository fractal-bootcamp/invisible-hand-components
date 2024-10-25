import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dashboard from '../components/Dashboard';

// Define metadata for the story
export default {
    title: 'Components/Dashboard',
    component: Dashboard,
    parameters: {
        layout: 'centered', // Use centered layout for the dashboard
    },
} as Meta;

// Define a template for the Dashboard story
const Template: StoryFn = () => <Dashboard />;

// Define the default story for the Dashboard
export const Default = Template.bind({});