const page = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-6 text-lg">
          Welcome to our platform, where innovation meets simplicity. We are
          dedicated to creating high-quality content, products, and services
          that help people connect, grow, and thrive in a digital world.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
        <p className="mb-6">
          Our mission is to empower users through smart solutions, engaging
          content, and user-first design. We believe in building tools and
          communities that support real-life goals and spark creativity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What We Do</h2>
        <ul className="list-disc ml-5 mb-6">
          <li>Deliver helpful resources and original content</li>
          <li>Develop intuitive, modern web experiences</li>
          <li>Provide value through transparency and trust</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Values</h2>
        <ul className="list-disc ml-5 mb-6">
          <li>
            <strong>Integrity:</strong> We’re honest, ethical, and accountable.
          </li>
          <li>
            <strong>Creativity:</strong> We think outside the box to solve real
            problems.
          </li>
          <li>
            <strong>User Focus:</strong> We build with your needs in mind.
          </li>
          <li>
            <strong>Excellence:</strong> We aim for high standards in everything
            we do.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Join Us</h2>
        <p className="mb-6">
          Whether you&apos;re here to learn, create, or collaborate—welcome!
          We’re excited to have you as part of our journey. Feel free to{" "}
          <a
            href="mailto:shazid.dev@gmail.com"
            className="text-blue-600 underline"
          >
            reach out
          </a>{" "}
          if you’d like to work with us or have any questions.
        </p>
      </div>
    </section>
  );
};

export default page;
