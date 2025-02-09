export interface ISpeaker {
  imageUrl: string;
  role: string;
  name: string;
  company: {
    logo: string;
    name: string;
    websiteLink: string;
  };
}
