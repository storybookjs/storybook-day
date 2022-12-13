import fetch from 'node-fetch';

interface DxData {
  githubStars: number;
  latestPost: {
    title: string;
    url: string;
  };
  latestVersion: string;
  npmDownloads: number;
  subscriberCount: number;
}

export async function getDxData(): Promise<DxData> {
  const res = await fetch('https://storybook-dx.netlify.app/.netlify/functions/dx-data');
  return res.json();
}
