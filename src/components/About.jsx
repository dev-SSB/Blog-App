import React from 'react'

const About = () => {
  return (
    <div className='bg-white p-4 sm:p-10 min-h-screen'>
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-10 text-center rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Tech Insights</h1>
        <p className="text-lg mt-2">Your Gateway to Industry Trends</p>
      </header>

      {/* Introduction Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">About Tech Insights</h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-700">
          Welcome to Tech Insights, your ultimate destination for staying updated on
          the latest industry news, expert interviews, emerging technologies, and
          valuable resources.
        </p>
      </section>

      {/* Topics Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Topics We Cover</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Latest Industry News",
              img: "https://plus.unsplash.com/premium_photo-1707127783301-2eebb02aafae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Stay informed on market trends and major updates shaping the tech world.",
            },
            {
              title: "Expert Interviews",
              img: "https://plus.unsplash.com/premium_photo-1679936310007-92904bc7b405?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Gain insights from leaders and professionals in the tech industry.",
            },
            {
              title: "Technologies & Innovations",
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Explore the latest tools, frameworks, and emerging technologies.",
            },
            {
              title: "Resources & Guides",
              img: "https://plus.unsplash.com/premium_photo-1686819425798-3d9cabda8d26?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              desc: "Access tutorials, best practices, and other helpful resources.",
            },
          ].map((topic, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={topic.img} alt={topic.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{topic.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{topic.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Creator */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Meet the Creator</h2>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://plus.unsplash.com/premium_photo-1685223895585-5d620fb5ba7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creator"
            className="rounded-full shadow-lg w-40 h-40 object-cover"
          />
          <p className="max-w-lg text-gray-700">
            Hi, I’m Shivprasad Bodke, a passionate software developer and tech enthusiast with a background
            in Full-Stack Web Development. I created Tech Insights to share my love
            for technology and help others stay ahead in the industry.
          </p>
        </div>
      </section>

      {/* Join the Community */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Join the Community</h2>
        <p className="text-lg text-gray-700 mt-3">
          Get in front of the latest updates by subscribing to our newsletter.
        </p>
        <form className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="mt-10 py-6 bg-gray-900 text-white text-center">
        <h4 className="text-lg font-bold">Get in Touch</h4>
        <p className="mt-2">Have questions or suggestions? Feel free to reach out!</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:shivbodke04@gmail.com" className="text-blue-400 text-xl"><i class="ri-mail-line"></i></a>
          <a href="https://github.com/dev-SSB" className="text-blue-400 text-xl"><i class="ri-github-fill"></i></a>
          <a href="https://www.linkedin.com/in/shivprasad-bodke/" className="text-blue-400 text-xl"><i class="ri-linkedin-box-fill"></i></a>
        </div>
        <p className="mt-4 text-gray-400 text-sm">© 2025 Tech Insights. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default About