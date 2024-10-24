import { Meta, StoryFn } from '@storybook/react'; // Corrected import for StoryFn
import CompetitorsTable from '../components/CompetitorsTable';

// Meta configuration for the story
export default {
    title: 'Components/CompetitorsTable', // Storybook title path
    component: CompetitorsTable, // Component to be rendered
} as Meta;

// Template for creating stories
const Template: StoryFn = (args: any) => <CompetitorsTable {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {}; // Default arguments for the story
