import type { V2_MetaFunction } from '@remix-run/node';
import { AstroPanda } from '~/components/AstroPanda';
import { Figure } from '~/components/Figure';
import { Icon } from '~/components/Icon';
import { Grid } from '~/components/Grid';

import { CodeIcon } from '@pluralsight/icons';

export const meta: V2_MetaFunction = () => {
    return [
        { title: 'Panda Astronauts Remix' },
        { name: 'description', content: 'Because, why not?' },
    ];
};

export default function Index() {
    return (
        <main>
            <Grid cols={1} style={{ justifyItems: 'center' }}>
                <h1>
                    Panda in Space <Icon icon={CodeIcon} />
                </h1>
                <h2>Because Panda Astronauts Are Awesome</h2>
                <h3>Random Panda facts:</h3>
                <p>
                    Facts from{' '}
                    <a
                        href='https://www.wwf.org.uk/learn/fascinating-facts/pandas'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        WWF.UK.ORG's Top 10 Facts About Pandas
                    </a>
                </p>
                <ol>
                    <li>Pandas have excellent camouflage for their habitat.</li>
                    <li>Their eyes are different to normal bears.</li>
                    <li>Cubs are well protected in their first month.</li>
                    <li>Pandas can swim and even climb trees.</li>
                    <li>
                        They have an extended wrist bone that they use like a
                        thumb to help them grip food.
                    </li>
                    <li>They spend a lot of their day eating.</li>
                    <li>Bamboo is critical to their diet.</li>
                    <li>
                        They do occassionally eat something other than bamboo.
                    </li>
                    <li>
                        Sometimes, to mark their scent, panda's climb a tree
                        backwards with their hindfeet until they're in a full
                        handstand upside down - enabling them to leave their
                        scent higher up.
                    </li>
                    <li>On average, pandas 💩 40 times a day</li>
                </ol>
                <Figure style={{ margin: '2rem auto 1rem', maxWidth: '20rem' }}>
                    <AstroPanda />
                </Figure>
            </Grid>
        </main>
    );
}
