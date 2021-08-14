import PageTitle from "../../global-components/PageTitle";

function About() {
  return (
    <div id="about" className="h-auto w-full p-12">
      <PageTitle title="About"></PageTitle>
      <div className="flex">
        <div className="hidden sm:block sm:w-1/2"></div>
        <p className="sm:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          recusandae asperiores deserunt nam qui autem consequuntur similique
          consequatur est? Numquam quos officiis illum quia libero sint eius
          maiores voluptatum earum! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet recusandae asperiores deserunt nam qui autem
          consequuntur similique consequatur est? Numquam quos officiis illum
          quia libero sint eius maiores voluptatum earum!
        </p>
      </div>
    </div>
  );
}

export default About;
