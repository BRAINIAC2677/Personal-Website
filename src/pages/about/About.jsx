import PageTitle from "../../global-components/PageTitle";

function About() {
  return (
    <div id="about" className="h-auto w-full p-12 bg-primary-light">
      <PageTitle title="About"></PageTitle>
      <div className="flex justify-center items-center space-x-12 mt-24">
        <div className="hidden lg:flex justify-center items-center magic-card mr-10 text-ink">
          <p className="font-semibold text-2xl tracking-wider">
            Life is beautiful
          </p>
        </div>
        <div className="hidden lg:block h-32 w-1 bg-secondary"></div>
        <p className="lg:w-1/2 text-ink">
          This is Asif Azad. I was born in Faridpur, Bangladesh. Currently I am
          living in Dhaka, Bangladesh. I am a Freshmen doing my undergad in
          Bangladesh University of Engineering and Technology. My major is CSE.
          My hobby is to watch and rewatch movies. And I love to play basketball
          and table tennis.
          <br />
          <br /> I am enthusiastic about technology. I enjoy getting myself
          acquinted with cutting-edge technologies. The wonders of technologies
          fascinate me in every possible way. <br />
          <br />I am optimistic about life. Life is a precious gift from the
          Almighty. That is why I like to feel and enjoy every bit of it.
          Moreover, I try to give the same vibe to others around me. <br />
          <br />I love to meet, work and connect with new people. If they share
          the same interests as me then it's good. And if they don't I get to
          broaden my perspective engaging with them.
        </p>
      </div>
    </div>
  );
}

export default About;
