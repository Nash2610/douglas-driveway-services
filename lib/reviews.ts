// Real 5-star Google reviews for Douglas Driveway Services.
// Shared by the home page (app/page.tsx) and the reviews page
// (app/reviews/page.tsx) so both always show the same list.
export type Review = {
  name: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Diamond Kline",
    text: "Corey was an amazing communicator and was honest about the timeline, which I appreciate. We've never had our driveway sealed before and his workers did an amazing job. Definitely will hire again. 10/10 would recommend.",
  },
  {
    name: "Kieran",
    text: "Corey gave us lots of good information during the process and got back to us very quickly when we had questions. The driveway looks great after the sealing and achieved the result we were looking for. Hoping it holds up for a couple years!",
  },
  {
    name: "Ian",
    text: "What an excellent service! We would recommend Corey to everyone. Right from the get-go Corey was a friendly, easy-going fella and kept in touch, explaining clearly what the process was for sealing our driveway.",
  },
  {
    name: "Jeff Armstead",
    text: "From initial request to on-site measurements the next day, Corey provided top-notch service and advice.",
  },
  {
    name: "Debbie Kseniuk",
    text: "Thank you to the team from Douglas Driveway Services — our driveway looks amazing. We were looking for someone to seal our driveway and Corey and his team came highly recommended. I contacted him and he got back to me immediately.",
  },
  {
    name: "Deanna Brown",
    text: "My homebuilder recommended Douglas Driveway Services for my driveway sealing and they never disappoint. Very easy to book and communicate with, and they sent a reminder shortly before the service to let me know when I could walk and drive on it.",
  },
  {
    name: "Wayne Daku",
    text: "This is the first year we decided to have our driveway sealed by a contractor. We found Douglas Driveway Services on a website, the reviews were great, so we contacted Corey and he was here to give us a quote.",
  },
  {
    name: "Lindsay Hale",
    text: "My experience with Douglas Driveway Services was outstanding. I found them through a neighbor's referral (via their yard sign) and was impressed from the very beginning.",
  },
];
