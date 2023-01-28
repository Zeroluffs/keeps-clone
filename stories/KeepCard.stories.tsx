import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {KeepCard} from '../components/KeepCard';

export default {
    title: 'Example/KeepCard',

    component: KeepCard,
} as ComponentMeta<typeof KeepCard>;

const Template: ComponentStory<typeof KeepCard> = (args) => <KeepCard/>;
export const Primary = Template.bind({});
