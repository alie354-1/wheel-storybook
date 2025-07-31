import { Meta, StoryFn } from "@storybook/react-vite";
import { MediaPlayer, MediaPlayerProps } from './MediaPlayer';

export default {
  title: 'Patterns/MediaPlayer',
  component: MediaPlayer,
} as Meta;

const Template: StoryFn<MediaPlayerProps> = (args) => <MediaPlayer {...args} />;

export const Video = Template.bind({});
Video.args = {
  media: {
    id: '1',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video',
    title: 'Big Buck Bunny',
    description: 'A short film about a giant rabbit.',
  },
};

export const Audio = Template.bind({});
Audio.args = {
  media: {
    id: '2',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    type: 'audio',
    title: 'SoundHelix Song 1',
    description: 'A sample audio file.',
  },
};

export const LiveStream = Template.bind({});
LiveStream.args = {
  media: {
    id: '3',
    src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    type: 'video',
    title: 'Live Stream',
    description: 'A sample live stream.',
  },
};

export const Presentation = Template.bind({});
Presentation.args = {
  media: {
    id: '4',
    src: '',
    type: 'presentation',
    title: 'Presentation',
    description: 'A sample presentation.',
    slides: [
      'https://i.pravatar.cc/800?u=a042581f4e29026024d',
      'https://i.pravatar.cc/800?u=a042581f4e29026704d',
      'https://i.pravatar.cc/800?u=a042581f4e29026706d',
    ],
  },
};
