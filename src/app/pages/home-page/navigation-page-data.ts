import { ISideMenuItem } from '../../shared/shared-models';

export const sideMenuDetails: ISideMenuItem[] = [
    {
        name: 'Topics',
        children: [
            {
                name: 'Social Issues',
                children: [
                    {
                        name: 'Cleanliness',
                        link: '/cleanliness',
                    },
                    {
                        name: 'Eating Habbits',
                        link: '/eating-habbits',
                    },
                    {
                        name: 'Food Waste',
                        link: '/food-waste',
                    },
                    {
                        name: 'Social Media',
                        link: '/social-media',
                    },
                    {
                        name: 'Pornography / Adult films',
                        link: '/porno-grapy',
                    },
                ],
            },
            {
                name: 'Economical Issues',
                children: [
                    { name: 'Issue 1' },
                    { name: 'Issue 2' },
                    { name: 'Issue 3' },
                ],
            },
            {
                name: 'Religious Issues',
                children: [
                    { name: 'Issue 1' },
                    { name: 'Issue 2' },
                    { name: 'Issue 3' },
                ],
            },
        ],
    },
    {
        name: 'Guidelines',
        children: [
            {
                name: 'Marriage Guidelines',
                children: [
                    {
                        name: 'Point 1',
                    },
                    {
                        name: 'Point 2',
                    },
                ],
            },
            {
                name: 'Marriage Guidelines',
                children: [
                    {
                        name: 'Point 1',
                    },
                    {
                        name: 'Point 2',
                    },
                ],
            },
        ],
    },
];
