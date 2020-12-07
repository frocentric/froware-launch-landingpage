import Awareness from './assets/awareness.svg';
import Support from './assets/support.svg';
import Progression from './assets/progression.svg';
import Proficiency from './assets/proficiency.svg';
import Team from './assets/team.svg';

export const content = {
  headerButton: 'Get Involved',
  sections: [
    {
      alignment: 'centre',
      title: 'Tech through our eyes',
      body: [
        'Froware is the community platform for Black tech professionals. We have created a space for Black people working in tech and digital to connect, learn and collaborate. Froware is here to empower, nurture and promote Black tech talent.',
      ],
    },
    {
      alignment: 'left',
      image: Awareness,
      title: 'Awareness',
      body: [
        `Being Black in tech can feel like a lonely journey at times. Having people that understand and can relate to your cultural context can help, though.`,
        `We’re building a platform to bring together our tech expertise, curate the best and most relevant industry content, promote events and share networking opportunities.`,
      ],
    },
    {
      alignment: 'right',
      image: Support,
      title: 'Support',
      body: [
        `Being Black in our industry means, sadly, many of us have shared experiences of awkwardness, isolation and even hostility in the workplace caused, or made worse, by cultural differences.`,
        `Froware is a safe, inclusive community where you can meet, converse, learn, collaborate and socialise with your Black peers.`,
        `The Froware community will offer support in the form of:
          - Virtual and physical events.
          - Discussion forums.
          - Interest groups.`,
      ],
    },
    {
      alignment: 'left',
      image: Progression,
      title: 'Progression',
      body: [
        `In an industry that still has a long way to go towards genuine equality, it can often be challenging for Black professionals to grasp the opportunities we deserve.`,
        `Whether your discipline is design, data or strategy-focused, we’re committed to developing effective pathways to help you progress and succeed.`,
      ],
    },
    {
      alignment: 'right',
      image: Proficiency,
      title: 'Proficiency',
      body: [
        `The tech industry is still inherently biased against Black people. This manifests itself in many ways, from being overlooked for promotion to being denied funding for a start-up.`,
        `Members will be provided with the right advice and tools to learn new skills and develop techniques that will help reach the next step and gain the recognition we deserve.`,
        `Areas of development will include (but are not limited to):
          - Networking
          - Interview prep and salary negotiation
          - Alternatives to VC funding`,
      ],
    },
    {
      alignment: 'left',
      image: Team,
      title: 'Team',
      body: [
        `We’re a diverse team of experienced professionals with a broad range of skills and backgrounds, but with a shared passion for helping our community to excel in the tech industry.`,
      ],
    },
    {
      alignment: 'none',
      title: 'Get Involved',
      body: [
        `Now that you know all about us, we’d love to learn more about you. Let’s chat!`,
      ],
    },
  ],
  footer: {
    blurb: '© Copyright 2020, All Rights Reserved - Froware',
    social: {
      twitter: 'froware_',
      linkedin: 'company/froware',
    },
  },
};
