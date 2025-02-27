import SectionTitle from '../Common/SectionTitle';

const AboutSections = () => {
  return (
    <>
      <section className="about-section-one py-12 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <SectionTitle
          title="Our Story"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices."
          center
        />
      </section>
      <section className="about-section-two py-12 bg-gray-100 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <SectionTitle
          title="Our Values"
          paragraph="Ut quis dapibus libero. Integer sit amet ligula eget eros laoreet tincidunt."
          center
        />
      </section>
      <section className="team-section py-12 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <SectionTitle
          title="Meet the Team"
          paragraph="Our team is composed of dedicated professionals who are passionate about what they do."
          center
        />
        <div className="team-members flex flex-wrap justify-center">
          {/* Add team member components here */}
        </div>
      </section>
      <section className="testimonials py-12 bg-gray-100 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Hear from our satisfied clients who have experienced our exceptional service."
          center
        />
        <div className="testimonials-list flex flex-wrap justify-center">
          {/* Add testimonial components here */}
        </div>
      </section>
    </>
  );
};

export default AboutSections;